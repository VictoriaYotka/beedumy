import { useCallback, useEffect, useState } from "react";
import css from "./BuyCourseOptions.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { useTransition } from "@react-spring/web";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import {
  CardModal,
  NetbankingModal,
  UpiModal,
  WalletModal,
} from "../Modals/Modals";

const BuyCourseOptions = () => {
  const [activeModal, setActiveModal] = useState(null);

  const toggleBodyScroll = (bodyScrollStyle) => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.paddingRight =
      bodyScrollStyle === "clip" ? `${scrollbarWidth}px` : "0";
    document.body.style.overflowY = bodyScrollStyle;
  };

  const openModal = (paymentType) => {
    toggleBodyScroll("clip");
    setActiveModal(paymentType);
  };

  const closeModal = useCallback(() => {
    toggleBodyScroll("visible");
    setActiveModal(null);
  }, []);

  useEffect(() => {
    const handlerClicks = (e) => {
      const backdrop = e.target.closest("#backdrop");
      const modal = e.target.closest("#modal");
      const target = e.key === "Escape";

      if ((backdrop && !modal) || target) {
        closeModal();
      }
    };

    if (activeModal) {
      window.addEventListener("click", handlerClicks);
      window.addEventListener("keydown", handlerClicks);
    }

    return () => {
      window.removeEventListener("click", handlerClicks);
      window.removeEventListener("keydown", handlerClicks);
    };
  }, [activeModal, closeModal]);

  const transitions = useTransition(activeModal, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <SectionAnimationWrapper>
        <div className={css.container}>
          <div className={css.payment_container}>
            <div className={css.list_wrapper}>
              <ul className={css.list}>
                {/* card */}
                <li
                  className={
                    activeModal === "card" ? `${css.active}` : `${css.item}`
                  }
                  onClick={() => openModal("card")}
                >
                  <div className={css.icon_wrapper}>
                    <svg className={css.icon}>
                      <use href={icons + "#card"}></use>
                    </svg>
                  </div>
                  <span className={css.payment_name}>Card</span>
                </li>

                {/* netbanking */}
                <li
                  className={
                    activeModal === "netbanking"
                      ? `${css.active}`
                      : `${css.item}`
                  }
                  onClick={() => openModal("netbanking")}
                >
                  <div className={css.icon_wrapper}>
                    <svg className={css.icon}>
                      <use href={icons + "#netbanking"}></use>
                    </svg>
                  </div>
                  <span className={css.payment_name}>Netbanking</span>
                </li>

                {/* wallet */}
                <li
                  className={
                    activeModal === "wallet" ? `${css.active}` : `${css.item}`
                  }
                  onClick={() => openModal("wallet")}
                >
                  <div className={css.icon_wrapper}>
                    <svg className={css.icon}>
                      <use href={icons + "#wallet"}></use>
                    </svg>
                  </div>
                  <span className={css.payment_name}>Wallet</span>
                </li>

                {/* upi */}
                <li
                  className={
                    activeModal === "upi" ? `${css.active}` : `${css.item}`
                  }
                  onClick={() => openModal("upi")}
                >
                  <div className={css.icon_wrapper}>
                    <svg className={css.icon}>
                      <use href={icons + "#upi"}></use>
                    </svg>
                  </div>
                  <span className={css.payment_name}>UPI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionAnimationWrapper>

      {transitions((style, item) => {
        switch (item) {
          case "card":
            return (
              <CardModal style={style} closeModal={closeModal} key="card" />
            );
          case "netbanking":
            return (
              <NetbankingModal
                style={style}
                closeModal={closeModal}
                key="netbanking"
              />
            );
          case "wallet":
            return (
              <WalletModal style={style} closeModal={closeModal} key="wallet" />
            );
          case "upi":
            return <UpiModal style={style} closeModal={closeModal} key="upi" />;

          default:
            return null;
        }
      })}
    </>
  );
};

export default BuyCourseOptions;
