import css from "./ContactsList.module.scss";
import icons from "../../../../assets/images/icons/icons.svg";

const ContactsList = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <a href="tel:+21670253734" className={css.contact_link}>
          <svg className={css.icon}>
            <use href={icons + "#mobile"}></use>
          </svg>
          <p className={css.link_content}>(+216) 70 253 734</p>
        </a>
      </li>
      <li className={css.item}>
        <a href="mailto:contact@birsaplatform.com" className={css.contact_link}>
          <svg className={css.icon}>
            <use href={icons + "#envelope"}></use>
          </svg>
          <p className={css.link_content}>contact@birsaplatform.com</p>
        </a>
      </li>
    </ul>
  );
};

export default ContactsList;
