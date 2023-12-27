import css from "./ModalWrapper.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { animated } from "@react-spring/web";

const ModalWrapper = ({ children, closeModal, style }) => {
  return (
    <animated.div style={style} id="backdrop" className={css.backdrop}>
      <div id="modal" className={css.modal}>
        <button className={css.close_button} onClick={closeModal}>
          <svg className={css.close_icon}>
            <use href={icons + "#close"}></use>
          </svg>
        </button>
        {children}
      </div>
    </animated.div>
  );
};

export default ModalWrapper;
