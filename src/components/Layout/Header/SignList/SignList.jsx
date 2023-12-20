import { Link } from "react-router-dom";
import css from "./SignList.module.scss";
import icons from "../../../../assets/images/icons/icons.svg";
import { useEffect, useState } from "react";

const SignList = ({ userImage }) => {
  const token = false;
  const isLoggedIn = false;

  const [isOpened, setIsOpened] = useState(false);

  const handlerClicks = (e) => {
    const backdrop =
      e.target.closest("#account_button") === null && e.type === "click";
    const target = e.key === "Escape";

    if (backdrop || target) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handlerClicks);
    window.addEventListener("keydown", handlerClicks);

    return () => {
      window.removeEventListener("click", handlerClicks);
      window.removeEventListener("keydown", handlerClicks);
    };
  });

  return (
    <>
      {isLoggedIn && token && (
        <ul className={css.sign_list}>
          <li>
            {/* register */}
            <Link to="/register" className={css.register_button}>
              سجل الآن
            </Link>
          </li>
          <li>
            {/* login  */}
            <Link to="/login" className={css.login_button}>
              تسجيل الدخول
            </Link>
          </li>
        </ul>
      )}

      {!isLoggedIn && !token && (
        /* account */
        <div id="account_button" className={css.account_wrapper}>
          <button
            onClick={() => setIsOpened(!isOpened)}
            className={css.account_button}
          >
            {userImage ? (
              <img src={userImage} alt="user" className={css.user_image} />
            ) : (
              <svg className={css.user_icon}>
                <use href={`${icons}#user`}></use>
              </svg>
            )}
            <p>My account</p>
            <div className={css.icon_wrapper}>
              <svg
                className={
                  isOpened ? `${css.hide_more_icon}` : `${css.show_more_icon}`
                }
              >
                <use href={`${icons}#chevron-down`}></use>
              </svg>
            </div>
          </button>

          <ul className={`${css.options_list} ${isOpened ? css.dropdown : ""}`}>
            <li className={css.options_item}>
              <svg className={css.option_icon}>
                <use href={`${icons}#user`}></use>
              </svg>
              <Link>Profile</Link>
            </li>
            <li className={css.options_item}>
              <svg className={css.option_icon}>
                <use href={`${icons}#play`}></use>
              </svg>
              <Link>Courses</Link>
            </li>
            <li className={css.options_item}>
              <svg className={css.option_icon}>
                <use href={`${icons}#wallet`}></use>
              </svg>
              <Link>Wallet</Link>
            </li>
            <li className={css.options_item}>
              <svg className={css.option_icon}>
                <use href={`${icons}#exit`}></use>
              </svg>
              <Link>Log out</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SignList;
