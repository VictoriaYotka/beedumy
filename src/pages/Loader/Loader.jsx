import css from "./Loader.module.scss";

const Loader = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.loader}></div>
      </div>
    </section>
  );
};

export default Loader;
