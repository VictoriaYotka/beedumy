import { Link } from "react-router-dom";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import css from "./LoginForm.module.scss";

const LoginForm = () => {
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target);
  };

  return (
    <SectionAnimationWrapper>
      <div className={css.container}>
        <form onSubmit={handleLoginFormSubmit} className={css.form}>
          <div className={css.input_wrapper}>
            <label className={css.label} htmlFor="login_email">
              Email
            </label>
            <input
              type="email"
              name="login_email"
              id="login_email"
              className={css.input}
              // placeholder="email"
              required
            />
          </div>
          <div className={css.input_wrapper}>
            <label className={css.label} htmlFor="login_password">
              Password
            </label>
            <input
              type="password"
              name="login_password"
              id="login_password"
              className={css.input}
              // placeholder="password"
              required
            />
          </div>

          <div className={css.wrapper}>
            <button className={css.button} type="submit">
              Log in
            </button>
            <div className={css.inner_wrapper}>
              <p className={css.descr}>Don't have an account?</p>
              <Link to="/register" className={css.link_button}>
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </SectionAnimationWrapper>
  );
};

export default LoginForm;
