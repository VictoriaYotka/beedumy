import { Link } from "react-router-dom";
import css from "./SingleNewsAdditionalInfo.module.scss";

const SingleNewsAdditionalInfo = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h5 className={css.heading}>مقالات أخرى</h5>
        <ul className={css.articles_list}>
          <li className={css.articles_item}>
            <Link className={css.articles_link}>
              <div className={css.articles_image_wrapper}>
                <img className={css.articles_image} src="" alt="" />
              </div>
              <h6 className={css.articles_title}>title</h6>
            </Link>
          </li>
          <li className={css.articles_item}>
            <Link className={css.articles_link}>
              <div className={css.articles_image_wrapper}>
                <img className={css.articles_image} src="" alt="" />
              </div>
              <h6 className={css.articles_title}>title</h6>
            </Link>
          </li>
          <li className={css.articles_item}>
            <Link className={css.articles_link}>
              <div className={css.articles_image_wrapper}>
                <img className={css.articles_image} src="" alt="" />
              </div>
              <h6 className={css.articles_title}>title</h6>
            </Link>
          </li>
        </ul>
      </div>
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
    </div>
  );
};

export default SingleNewsAdditionalInfo;
