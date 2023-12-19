import { Link } from "react-router-dom";
import css from "./SingleNewsAdditionalInfo.module.scss";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import PopularNewsItem from "../../../components/PopularNewsItem/PopularNewsItem";

const SingleNewsAdditionalInfo = () => {
  return (
    <div className={css.wrapper}>
      <SectionAnimationWrapper>
        <div className={css.container}>
          <h5 className={css.heading}>مقالات أخرى</h5>
          <ul className={css.articles_list}>
            <PopularNewsItem />
            <PopularNewsItem />
            <PopularNewsItem />
          </ul>
        </div>
      </SectionAnimationWrapper>

      <SectionAnimationWrapper>
        <div className={css.container}>
          <h5 className={css.heading}>كلمات مفتاحية</h5>
          <ul className={css.keywords_list}>
            <li className={css.keywords_item}>
              <Link>منصات</Link>
            </li>
            <li className={css.keywords_item}>
              <Link>منصات</Link>
            </li>
            <li className={css.keywords_item}>
              <Link>منصات</Link>
            </li>
            <li className={css.keywords_item}>
              <Link>منصات</Link>
            </li>
          </ul>
        </div>
      </SectionAnimationWrapper>

      <SectionAnimationWrapper>
        <div className={css.container}>
          <h5 className={css.heading}>المواضيع المختلفة</h5>
          <ul className={css.topics_list}>
            <li className={css.topics_item}>
              <Link>بالباكالوريا</Link>
            </li>
            <li className={css.topics_item}>
              <Link>بالباكالوريا</Link>
            </li>
            <li className={css.topics_item}>
              <Link>بالباكالوريا</Link>
            </li>
            <li className={css.topics_item}>
              <Link>بالباكالوريا</Link>
            </li>
            <li className={css.topics_item}>
              <Link>بالباكالوريا</Link>
            </li>
          </ul>
        </div>
      </SectionAnimationWrapper>
    </div>
  );
};

export default SingleNewsAdditionalInfo;
