import css from "./NotFound.module.scss";
import TriangleBackground from "../../components/Layout/TriangleBackground/TriangleBackground";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <TriangleBackground>
      <div className={css.container}>
        <p className={css.descr}>Not found</p>
        <Link to="/" className={css.button}>
          Back to homepage
        </Link>
      </div>
    </TriangleBackground>
  );
};

export default NotFound;
