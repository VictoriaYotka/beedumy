import css from "./SignList.module.scss";

const SignList = () => {
  return (
    <ul className={css.sign_list}>
      <li>
        {/* register */}
        <button className={css.register_button}>سجل الآن</button>
      </li>
      <li>
        {/* login  */}
        <button className={css.login_button}>تسجيل الدخول</button>
      </li>
    </ul>
  );
};

export default SignList;
