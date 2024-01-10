import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";
import css from "./Modals.module.scss";

const CardModal = ({ closeModal, style }) => {
  return (
    <ModalWrapper style={style} closeModal={closeModal}>
      <form className={css.form}>
        <strong className={css.modal_heading}>Card payment details</strong>
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
    </ModalWrapper>
  );
};

const NetbankingModal = ({ closeModal, style }) => {
  return (
    <ModalWrapper style={style} closeModal={closeModal}>
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
    </ModalWrapper>
  );
};

const WalletModal = ({ closeModal, style }) => {
  return (
    <ModalWrapper style={style} closeModal={closeModal}>
      <form className={css.form}>
        <strong className={css.modal_heading}>Wallet payment details</strong>
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
    </ModalWrapper>
  );
};

const UpiModal = ({ closeModal, style }) => {
  return (
    <ModalWrapper style={style} closeModal={closeModal}>
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
    </ModalWrapper>
  );
};

export { CardModal, NetbankingModal, WalletModal, UpiModal };
