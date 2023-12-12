import css from "./SimplePageHeader.module.scss";

const SimplePageHeader = ({ children, heading, subheading, background }) => {
  const sectionStyle = {
    backgroundColor: background,
  };

  return (
    <section className={css.section} style={sectionStyle}>
      <div className={css.container}>
        <h3 className={css.heading}>{heading}</h3>
        {subheading && <h5 className={css.subheading}>{subheading}</h5>}
        {children}
      </div>
    </section>
  );
};

export default SimplePageHeader;
