import css from "./News.module.scss";
import hero_image_sm from "../../assets/images/home/hero/image_sm.webp";
import SimplePageHeader from "../../components/SimplePageHeader/SimplePageHeader";
import SectionAnimationWrapper from "../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import NewsHeaderList from "../../components/NewsHeaderList/NewsHeaderList";
import { useTranslation } from "react-i18next";
import NewsCard from "./NewsCard/NewsCard";

const News = () => {
  const { t } = useTranslation();

  return (
    <>
      <SimplePageHeader heading={t("news.header")} background="#5e5ed6">
        <NewsHeaderList />
      </SimplePageHeader>

      <SectionAnimationWrapper>
        <section className={css.section}>
          <div className={css.container}>
            <ul className={css.list}>
              <NewsCard
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisicing elit..."
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sunt hic fuga aliquid recusandae..."
                meta1="some info1"
                meta2="some info2"
                meta3="some info3"
              />

              <NewsCard
                title="Lorem ipsum "
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sunt hic fuga aliquid recusandae reiciendis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sunt hic fuga aliquid recusandae reiciendis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sunt hic fuga aliquid recusandae reiciendis"
                meta1="some info1"
                meta2="some info2"
                meta3="some info3"
              />

              <NewsCard
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa"
                content="Lorem"
                img={hero_image_sm}
                meta1="some info1"
                meta2="some info2"
                meta3="some info3"
              />
            </ul>
          </div>
        </section>
      </SectionAnimationWrapper>
    </>
  );
};

export default News;
