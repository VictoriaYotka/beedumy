import { Link } from "react-router-dom";
import css from "./SignList.module.scss";

const SignList = () => {
  const token = false;
  const isLoggedIn = false;

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
        <ul className={css.sign_list}>
          <li>
            {/* account */}
            <Link to="/account" className={css.register_button}>
              My account
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default SignList;
