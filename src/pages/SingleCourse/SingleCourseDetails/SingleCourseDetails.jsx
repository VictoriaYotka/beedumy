import { useCallback, useEffect, useState } from "react";
import css from "./SingleCourseDetails.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";
import {
  splitText,
  toggleBodyScroll,
  useConditionalTransition,
} from "../../../utils";
import { animated } from "@react-spring/web";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";
import CommentCard from "../CommentCard/CommentCard";

const LessonItems = ({ unit = "unit name", minutes = 16, exercises = 3 }) => {
  const { t } = useTranslation();

  return (
    <>
      <li className={css.lessons_item}>
        <div className={css.lessons_icon_wrapper_1}>
          <svg className={css.lessons_icon}>
            <use href={icons + "#folder"}></use>
          </svg>
        </div>
        <p className={css.lessons_condition}>{unit}</p>
      </li>

      {minutes && (
        <li className={css.lessons_item}>
          <div className={css.lessons_icon_wrapper_2}>
            <svg className={css.lessons_icon}>
              <use href={icons + "#play"}></use>
            </svg>
          </div>
          <p className={css.lessons_condition}>video</p>
          <p className={css.lessons_info}>
            {minutes} {t("courses.single_course_details_lessons_minutes")}
          </p>
        </li>
      )}

      {exercises && (
        <li className={css.lessons_item}>
          <div className={css.lessons_icon_wrapper_3}>
            <svg className={css.lessons_icon}>
              <use href={icons + "#chat"}></use>
            </svg>
          </div>
          <p className={css.lessons_condition}>exercises</p>
          <p className={css.lessons_info}>
            {exercises} {t("courses.single_course_details_lessons_exercises")}
          </p>
        </li>
      )}
    </>
  );
};

const SubmissionInfo = ({
  style,
  content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptates voluptas voluptatum rem veritatis ipsum molestiae earum sequi molestias nulla quidem, magni amet ea est placeat officiis id incidunt aut? Id eius voluptates error soluta, qui officia a quos? Fuga, iusto debitis sit asperiores similique quos officiis exercitationem, distinctio deleniti non neque assumenda laboriosam officia mollitia saepe voluptatum earum quisquam ullam accusamus? Totam consequuntur quos doloremque praesentium cumque libero nostrum quasi repellat suscipit eius! Aspernatur quos accusantium beatae, assumenda provident distinctio error suscipit officiis eius, corporis excepturi! Consequuntur nobis dolore ipsam quisquam accusantium vitae fuga explicabo nesciunt soluta sequi eaque molestiae possimus, minus quidem ducimus mollitia minima architecto. Doloribus eligendi cum blanditiis minus culpa facilis facere ipsam saepe, deleniti reiciendis, explicabo ab voluptas sint excepturi. Qui doloremque recusandae enim labore. Beatae assumenda impedit quae odio facilis itaque error magnam accusantium, necessitatibus eum aliquid ad distinctio suscipit provident consequuntur consequatur commodi?",
}) => {
  const paragraphs = splitText(content);

  return (
    <animated.div
      className={css.info_wrapper}
      style={style}
      data-option="submission"
    >
      {paragraphs.map((sentence, index) => (
        <p className={css.submission_sentence} key={index}>
          {sentence}
        </p>
      ))}
    </animated.div>
  );
};

const ContentInfo = ({
  style,
  descr = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, consequatur incidunt ad delectus perferendis obcaecati! Iste vitae corrupti facere delectus?",
  video_link = "https://www.youtube.com/embed/JfJYHfrOGgQ?start=0&end=15",
  // ?start=0&end=10 for cutting video
}) => {
  const { t } = useTranslation();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    toggleBodyScroll("clip");
    setIsOpenModal(true);
  };

  const handleCloseModal = useCallback(() => {
    toggleBodyScroll("visible");
    setIsOpenModal(false);
  }, []);

  useEffect(() => {
    const handlerClicks = (e) => {
      const backdrop = e.target.closest("#backdrop");
      const modal = e.target.closest("#modal");
      const target = e.key === "Escape";

      if ((backdrop && !modal) || target) {
        handleCloseModal();
      }
    };

    if (isOpenModal) {
      window.addEventListener("click", handlerClicks);
      window.addEventListener("keydown", handlerClicks);
    }

    return () => {
      window.removeEventListener("click", handlerClicks);
      window.removeEventListener("keydown", handlerClicks);
    };
  }, [handleCloseModal, isOpenModal]);

  const transitions =
    useConditionalTransition.useConditionalModalsTransition(isOpenModal);

  return (
    <>
      <animated.div
        className={css.info_wrapper}
        style={style}
        data-option="content"
      >
        <h5 className={css.content_header}>
          {t("courses.single_course_details_content_heading")}
        </h5>
        <p className={css.content_descr}>{descr}</p>

        <ul className={css.lessons_list}>
          <li className={css.lessons_item}>
            <div className={css.lessons_icon_wrapper_1}>
              <svg className={css.lessons_icon}>
                <use href={icons + "#folder"}></use>
              </svg>
            </div>
            <p className={css.content_condition_first}>first lesson</p>
            <button className={css.content_button} onClick={handleOpenModal}>
              {t("courses.single_course_details_content_watch")}
            </button>
          </li>

          <LessonItems />
          <LessonItems />
          <LessonItems />
        </ul>
      </animated.div>

      {transitions((style, isTrue) => {
        switch (isTrue) {
          case true:
            return (
              <ModalWrapper closeModal={handleCloseModal} style={style}>
                <div className={css.video_group_wrapper}>
                  <div className={css.video_wrapper}>
                    <iframe
                      className={css.video}
                      title="course video demonstration"
                      src={video_link}
                      loading="lazy"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </ModalWrapper>
            );

          default:
            return null;
        }
      })}
    </>
  );
};

const ExamsInfo = ({ style }) => {
  return (
    <animated.div
      className={css.info_wrapper}
      style={style}
      data-option="exams"
    >
      <ul className={css.lessons_list}>
        <LessonItems />
        <LessonItems />
        <LessonItems />
      </ul>
    </animated.div>
  );
};

const RatingInfo = ({ style, votes = 3, rating = "4.6", comments = "02" }) => {
  const { t } = useTranslation();

  return (
    <>
      {/* rating */}
      <animated.div
        className={css.info_wrapper}
        style={style}
        data-option="rating"
      >
        <div className={css.rating_container}>
          <ul className={css.diagram_list}>
            <li className={css.diagram_item}>
              <span className={css.diagram_heading}>
                {t("courses.single_course_details_rating_excellent")}
              </span>
              <span className={css.diagram_range}></span>
              <span className={css.diagram_votes}>{votes}</span>
            </li>
            <li className={css.diagram_item}>
              <span className={css.diagram_heading}>
                {t("courses.single_course_details_rating_fine")}
              </span>
              <span className={css.diagram_range}></span>
              <span className={css.diagram_votes}>{votes}</span>
            </li>
            <li className={css.diagram_item}>
              <span className={css.diagram_heading}>
                {t("courses.single_course_details_rating_middle")}
              </span>
              <span className={css.diagram_range}></span>
              <span className={css.diagram_votes}>{votes}</span>
            </li>
            <li className={css.diagram_item}>
              <span className={css.diagram_heading}>
                {t("courses.single_course_details_rating_bad")}
              </span>
              <span className={css.diagram_range}></span>
              <span className={css.diagram_votes}>{votes}</span>
            </li>
            <li className={css.diagram_item}>
              <span className={css.diagram_heading}>
                {t("courses.single_course_details_rating_very_bad")}
              </span>
              <span className={css.diagram_range}></span>
              <span className={css.diagram_votes}>{votes}</span>
            </li>
          </ul>

          <div className={css.rating_circle}>
            <p className={css.rating}>{rating}</p>
            <p>Stars</p>
            <p>
              <span className={css.rating_comments}>{comments}</span>

              {t("courses.single_course_details_rating_comments")}
            </p>
          </div>
        </div>
      </animated.div>

      {/* comments */}
      <animated.div
        className={css.info_wrapper}
        style={style}
        data-option="rating"
      >
        <CommentCard />
      </animated.div>

      {/* add comment */}
      <animated.div
        className={css.info_wrapper}
        style={style}
        data-option="rating"
      >
        <div className={css.add_wrapper}>
          <h3 className={css.add_header}>
            {t("courses.single_course_details_rating_add_comment_header")}
          </h3>
          <div className={css.add_subheader}>
            <p className={css.add_evaluate}>
              {t("courses.single_course_details_rating_add_comment_subheader")}
            </p>
            <div>Stars</div>
          </div>
          <form>
            <input
              type="text"
              name="single_course_comment_name"
              id="single_course_comment_name"
              placeholder={t(
                "courses.single_course_details_rating_add_comment_name_placeholder"
              )}
              className={css.input}
            />
            <input
              type="email"
              name="single_course_comment_email"
              id="single_course_comment_email"
              placeholder={t(
                "courses.single_course_details_rating_add_comment_email_placeholder"
              )}
              className={css.input}
            />

            <textarea
              name="single_course_comment_comment"
              id="single_course_comment_comment"
              cols="30"
              rows="5"
              placeholder={t(
                "courses.single_course_details_rating_add_comment_textarea_placeholder"
              )}
              className={css.textarea}
            ></textarea>
            <button type="submit" className={css.form_button}>
              {t("courses.single_course_details_rating_add_comment_button")}
            </button>
          </form>
        </div>
      </animated.div>
    </>
  );
};

const SingleCourseDetails = () => {
  const { t } = useTranslation();

  const [info, setInfo] = useState("submission");

  const handleOptionSelect = (selectedInfo) => {
    setInfo(selectedInfo);
  };

  const transitions =
    useConditionalTransition.useConditionalListsTransition(info);

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        <li
          className={css.item}
          onClick={() => handleOptionSelect("submission")}
        >
          <p
            className={`${css.item_heading} ${
              info === "submission" ? css.active : ""
            }`}
          >
            {t("courses.single_course_details_submission")}
          </p>
        </li>
        <li className={css.item} onClick={() => handleOptionSelect("content")}>
          <p
            className={`${css.item_heading} ${
              info === "content" ? css.active : ""
            }`}
          >
            {t("courses.single_course_details_content")}
          </p>
        </li>
        <li className={css.item} onClick={() => handleOptionSelect("exams")}>
          <p
            className={`${css.item_heading} ${
              info === "exams" ? css.active : ""
            }`}
          >
            {t("courses.single_course_details_exams")}
          </p>
        </li>
        <li className={css.item} onClick={() => handleOptionSelect("rating")}>
          <p
            className={`${css.item_heading} ${
              info === "rating" ? css.active : ""
            }`}
          >
            {t("courses.single_course_details_rating")}
          </p>
        </li>
      </ul>

      {transitions((style, item) => {
        switch (item) {
          case "submission":
            return <SubmissionInfo style={style} key="submission" />;

          case "content":
            return <ContentInfo style={style} key="content" />;

          case "exams":
            return <ExamsInfo style={style} key="exams" />;

          case "rating":
            return <RatingInfo style={style} key="rating" />;

          default:
            return null;
        }
      })}
    </div>
  );
};

export default SingleCourseDetails;
