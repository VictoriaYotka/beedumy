import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import css from "./FAQ.module.scss";

const FAQ = () => {
  return (
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.heading}>الأسئلة المتكررة</h2>
          <ul className={css.list}>
            <li className={css.item}>
              <div className={css.icon_1}>
                <span>?</span>
              </div>
              <div className={css.wrapper}>
                <h3 className={css.item_heading}>
                  كيفية الإشتراك في أحد العروض؟
                </h3>
                <p className={css.descr}>
                  للتمتّع بمحتوى منصة بيرسا التعليمية نبدأ اولا بانشاء حساب خاص
                  بك واختيار أحد العروض المتوفّرة ولإتمام عملية الدفعيمكنك زيارة
                  مقرنا أو الدفع في : البنك /البريد / البطاقة البنكية.
                </p>
              </div>
            </li>
            <li className={css.item}>
              <div className={css.icon_2}>
                <span>?</span>
              </div>
              <div className={css.wrapper}>
                <h3 className={css.item_heading}>
                  ماهي العروض المتوفّرة الآن ؟
                </h3>
                <p className={css.descr}>
                  نوفّر باقة من العروض المتنوّعة لجميع المستويات (عروض شهريّة أو
                  ثلاثية أو سنويّة) سجّل في الموقع لمعرفة كامل تفاصيل الباقات
                  المتوفّرة في صفحة العروض.
                </p>
              </div>
            </li>
            <li className={css.item}>
              <div className={css.icon_3}>
                <span>?</span>
              </div>
              <div className={css.wrapper}>
                <h3 className={css.item_heading}>ماهي منصة بيرسا التعليمية؟</h3>
                <p className={css.descr}>
                  هي منصة تفاعلية موجهة إلى العالم العربي توفر مواد تعليمية
                  لجميع الفئات العمرية ودورات تكوينية في تخصصات مختلفة بطريقة
                  حديثة وفعالة
                </p>
              </div>
            </li>
            <li className={css.item}>
              <div className={css.icon_4}>
                <span>?</span>
              </div>
              <div className={css.wrapper}>
                <h3 className={css.item_heading}>كيفية التسجيل في المنصّة ؟</h3>
                <p className={css.descr}>
                  للتسجيل في منصة بيرسا التعليمية أدخل للواجهة الرئيسية من
                  الموقع ثمّ اضغط على "سجل الآن". أضِف بياناتك الخاصة مع كتابة
                  رقم الهاتف الخاص بك ثم اضغط على "دخول" وابدأ رحلتك نحو النجاح.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>{" "}
    </SectionAnimationWrapper>
  );
};

export default FAQ;
