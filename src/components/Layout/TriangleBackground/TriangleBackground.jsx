import css from "./TriangleBackground.module.scss";

const TriangleBackground = ({ children }) => {
  return <section className={css.section}>{children}</section>;
};

export default TriangleBackground;
