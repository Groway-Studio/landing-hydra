import styles from "./info.module.scss";

const Info = () => {
  return (
    <section className={styles.info}>
      <p className={styles.info__description}>
        Si algo ha demostrado el distanciamiento social inpuesto por la pandemia
        es que los seres humanos <span>necesitan</span> y valoran la interacción
        <span>social.</span>
      </p>

      <div className={styles.info__highlight}>
        <p>
          Hydra es una herramienta de marketing en redes sociales y basada en
          estrategias de atención al cliente personalizadas para mejorar la
          experiencia de compra por Internet a través de WhatsApp.
        </p>
      </div>
    </section>
  );
};

export default Info;
