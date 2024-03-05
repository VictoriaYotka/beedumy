import { useState } from "react";
import css from "./SingleCourseDetails.module.scss";
import { useTranslation } from "react-i18next";
import { useConditionalSpring } from "../../../utils";
import {
  ContentInfo,
  ExamsInfo,
  RatingInfo,
  SubmissionInfo,
} from "./SingleCourseDetailsInfo";

const SingleCourseDetails = ({ handleAddSingleCourseCommentFormSubmit }) => {
  const { t } = useTranslation();

  const [info, setInfo] = useState("submission");

  const handleOptionSelect = (selectedInfo) => {
    setInfo(selectedInfo);
  };

  const transitions =
    useConditionalSpring.useConditionalSingleCourseDetailsTransition(info);

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
            return (
              <RatingInfo
                style={style}
                key="rating"
                handleAddSingleCourseCommentFormSubmit={
                  handleAddSingleCourseCommentFormSubmit
                }
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default SingleCourseDetails;
