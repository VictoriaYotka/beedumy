import css from "./GalleryItem.module.scss";
import icons from "../../../../assets/images/icons/icons.svg";

const GalleryItem = ({ img }) => {
  return (
    <li className={css.gallery_item}>
      {img ? (
        <img src={img} alt="gallery" loading="lazy" className={css.image} />
      ) : (
        <svg className={css.placeholder_icon}>
          <use href={icons + "#placeholder"}></use>
        </svg>
      )}
    </li>
  );
};

export default GalleryItem;
