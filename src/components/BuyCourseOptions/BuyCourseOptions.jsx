import css from "./BuyCourseOptions.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { useState } from "react";

const BuyCourseOptions = () => {
  const [card, setCard] = useState(false);
  const [netbanking, setNetbanking] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [upi, setUpi] = useState(false);

  const handleShow = (category) => {
    switch (category) {
      case "card":
        setCard(true);
        setNetbanking(false);
        setWallet(false);
        setUpi(false);
        break;
      case "netbanking":
        setCard(false);
        setNetbanking(true);
        setWallet(false);
        setUpi(false);
        break;
      case "wallet":
        setCard(false);
        setNetbanking(false);
        setWallet(true);
        setUpi(false);
        break;
      case "upi":
        setCard(false);
        setNetbanking(false);
        setWallet(false);
        setUpi(true);
        break;
      default:
        setCard(false);
        setNetbanking(false);
        setWallet(false);
        setUpi(false);
    }
  };
  return (
    <div className={css.container}>
      <div className={css.payment_container}>
        {/* <div className={css.topper}>
          <div className={css.topper_option}>Choose way of payment</div>
          <div className={css.topper_option}>Fill in info & confirm</div>
        </div> */}
        <div className={css.list_wrapper}>
          <ul className={css.list}>
            {/* card */}
            <li
              className={card ? `${css.active}` : `${css.item}`}
              onClick={() => handleShow("card")}
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
              className={netbanking ? `${css.active}` : `${css.item}`}
              onClick={() => handleShow("netbanking")}
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
              className={wallet ? `${css.active}` : `${css.item}`}
              onClick={() => handleShow("wallet")}
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
              className={upi ? `${css.active}` : `${css.item}`}
              onClick={() => handleShow("upi")}
            >
              <div className={css.icon_wrapper}>
                <svg className={css.icon}>
                  <use href={icons + "#upi"}></use>
                </svg>
              </div>
              <span className={css.payment_name}>UPI</span>
            </li>
          </ul>

          <div className={css.descr_wrapper}>
            {card && <div className={css.descr}>Card payment details</div>}
            {netbanking && (
              <div className={css.descr}>Netbanking payment details</div>
            )}
            {wallet && <div className={css.descr}>Wallet payment details</div>}
            {upi && <div className={css.descr}>Upi payment details</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCourseOptions;
