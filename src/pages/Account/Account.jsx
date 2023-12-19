import css from "./Account.module.scss";
import UserInfo from "./UserInfo/UserInfo";
import FavoriteCourses from "./FavoriteCourses/FavoriteCourses";
import PopularNews from "./PopularNews/PopularNews";

const Account = () => {
  return (
    <section className="section">
      <div className="container">
        <UserInfo />
        <div className={css.wrapper}>
          <FavoriteCourses />
          <PopularNews />
        </div>
      </div>
    </section>
  );
};

export default Account;
