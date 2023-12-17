import NewsCard from "../NewsCard/NewsCard";
import css from "./NewsList.module.scss";
import hero_image from "../../../assets/images/home/hero/image.png";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const NewsList = () => {
  return (
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className={css.container}>
          <ul className={css.list}>
            <NewsCard
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisicing elit..."
              content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sunt hic fuga aliquid recusandae..."
              img={hero_image}
              meta1="some info1"
              meta2="some info2"
              meta3="some info3"
            />

            <NewsCard
              title="Lorem ipsum "
              content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sunt hic fuga aliquid recusandae reiciendis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sunt hic fuga aliquid recusandae reiciendis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sunt hic fuga aliquid recusandae reiciendis"
              img={hero_image}
              meta1="some info1"
              meta2="some info2"
              meta3="some info3"
            />

            <NewsCard
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa"
              content="Lorem"
              img={hero_image}
              meta1="some info1"
              meta2="some info2"
              meta3="some info3"
            />
          </ul>
        </div>
      </section>
    </SectionAnimationWrapper>
  );
};

export default NewsList;
