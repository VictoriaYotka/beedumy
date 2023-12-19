import { Link } from "react-router-dom";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import css from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target);
  };

  return (
    <SectionAnimationWrapper>
      <div className={css.container}>
        <form onSubmit={handleRegisterFormSubmit} className={css.form}>
          <div className={css.input_wrapper}>
            <label className={css.label} htmlFor="register_name">
              Name
            </label>
            <input
              type="text"
              name="register_name"
              id="register_name"
              className={css.input}
              // placeholder="name"
              required
            />
          </div>
          <div className={css.input_wrapper}>
            <label className={css.label} htmlFor="register_email">
              Email
            </label>
            <input
              type="email"
              name="register_email"
              id="register_email"
              className={css.input}
              // placeholder="email"
              required
            />
          </div>
          <div className={css.input_wrapper}>
            <label className={css.label} htmlFor="register_password">
              Password
            </label>
            <input
              type="password"
              name="register_password"
              id="register_password"
              className={css.input}
              // placeholder="password"
              required
            />
          </div>
          <div className={css.input_wrapper}>
            <label className={css.label} htmlFor="register_confirm_password">
              Confirm password
            </label>
            <input
              type="password"
              name="register_confirm_password"
              id="register_confirm_password"
              className={css.input}
              // placeholder="password"
              required
            />
          </div>

          <div className={css.wrapper}>
            <button className={css.button} type="submit">
              Register
            </button>
            <div className={css.inner_wrapper}>
              <p className={css.descr}>Already have an account?</p>
              <Link to="/login" className={css.link_button}>
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </SectionAnimationWrapper>
  );
};

export default RegisterForm;
