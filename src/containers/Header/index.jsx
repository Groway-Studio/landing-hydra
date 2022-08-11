import header_image from "../../assets/header_image.png";
import hydra from "../../assets/hydra.png";
import arrowdown from "../../assets/arrowdown.png";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <main className={styles.header}>
      <div className={styles.header__ellipse1}></div>
      <div className={styles.header__ellipse2}>
        <img src={hydra} alt="Hydra" draggable={false} />
      </div>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>
          Centraliza tus ventas con <span>HYDRA</span>
        </h1>
        <p className={styles.header__description}>
          ¿Vendes por <span>WhatsApp</span> pero tu teléfono no te permite{" "}
          <span>delegar tu trabajo?</span>
        </p>
        <button className={styles.header__button}>Esto es para vos</button>
        <img
          src={arrowdown}
          alt="arrow down"
          className={styles.header__arrow}
          draggable={false}
        />
      </div>
      <img
        src={header_image}
        alt="Header Img"
        draggable={false}
        className={styles.header__image}
      />
    </main>
  );
};

export default Header;
