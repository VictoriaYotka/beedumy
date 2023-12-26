import { useCallback, useEffect, useState } from "react";
import css from "./BuyCourseOptions.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { animated, useSpring } from "@react-spring/web";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const BuyCourseOptions = () => {
  const [activeModal, setActiveModal] = useState(null);

  const toggleBodyScroll = (bodyScrollStyle) => {
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

  const modalStyles = useSpring({
    to: { opacity: activeModal ? 1 : 0 },
    from: { opacity: 0 },
    config: { transition: "0.4s ease-in-out" },
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

      {/* modals */}

      {activeModal === "card" && (
        <animated.div
          id="backdrop"
          className={css.backdrop}
          style={modalStyles}
        >
          <div id="modal" className={css.modal}>
            <button className={css.close_button} onClick={closeModal}>
              <svg className={css.close_icon}>
                <use href={icons + "#close"}></use>
              </svg>
            </button>

            <form className={css.form}>
              <strong className={css.modal_heading}>
                Card payment details
              </strong>
              <div className={css.input_group}>
                <label htmlFor="payment_card_input" className={css.label}>
                  Enter your card number:
                </label>
                <input
                  type="text"
                  id="payment_card_input"
                  name="payment_card_input"
                  className={css.input}
                  required
                />
              </div>
              <button type="submit" className={css.submit_button}>
                Use card
              </button>
            </form>
          </div>
        </animated.div>
      )}

      {activeModal === "netbanking" && (
        <animated.div
          id="backdrop"
          className={css.backdrop}
          style={modalStyles}
        >
          <div id="modal" className={css.modal}>
            <button className={css.close_button} onClick={closeModal}>
              <svg className={css.close_icon}>
                <use href={icons + "#close"}></use>
              </svg>
            </button>

            <form className={css.form}>
              <strong className={css.modal_heading}>
                Netbanking payment details
              </strong>
              <div className={css.input_group}>
                <label htmlFor="netbanking_payment_input" className={css.label}>
                  Enter your card number:
                </label>
                <input
                  type="text"
                  id="netbanking_payment_input"
                  name="netbanking_payment_input"
                  className={css.input}
                  required
                />
              </div>
              <button type="submit" className={css.submit_button}>
                Use netbanking
              </button>
            </form>
          </div>
        </animated.div>
      )}

      {activeModal === "wallet" && (
        <animated.div
          id="backdrop"
          className={css.backdrop}
          style={modalStyles}
        >
          <div id="modal" className={css.modal}>
            <button className={css.close_button} onClick={closeModal}>
              <svg className={css.close_icon}>
                <use href={icons + "#close"}></use>
              </svg>
            </button>

            <form className={css.form}>
              <strong className={css.modal_heading}>
                Wallet payment details
              </strong>
              <div className={css.input_group}>
                <label htmlFor="wallet_payment_input" className={css.label}>
                  Enter your wallet number:
                </label>
                <input
                  type="text"
                  id="wallet_payment_input"
                  name="wallet_payment_input"
                  className={css.input}
                  required
                />
              </div>
              <button type="submit" className={css.submit_button}>
                Use wallet
              </button>
            </form>
          </div>
        </animated.div>
      )}

      {activeModal === "upi" && (
        <animated.div
          id="backdrop"
          className={css.backdrop}
          style={modalStyles}
        >
          <div id="modal" className={css.modal}>
            <button className={css.close_button} onClick={closeModal}>
              <svg className={css.close_icon}>
                <use href={icons + "#close"}></use>
              </svg>
            </button>

            <form className={css.form}>
              <strong className={css.modal_heading}>UPI payment details</strong>
              <div className={css.input_group}>
                <label htmlFor="upi_payment_input" className={css.label}>
                  Enter your UPI number:
                </label>
                <input
                  type="text"
                  id="upi_payment_input"
                  name="upi_payment_input"
                  className={css.input}
                  required
                />
              </div>
              <button type="submit" className={css.submit_button}>
                Use UPI
              </button>
            </form>
          </div>
        </animated.div>
      )}
    </>
  );
};

export default BuyCourseOptions;
