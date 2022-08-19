import pc from "../../assets/pc.png";
import styles from "./demo.module.scss";

const Demo = () => {
  return (
    <section className={styles.demo}>
      <div className={styles.demo__header}>
        <h2 className={styles.demo__header_title}>
          ¿Crees que Hydra es la herramienta que buscabas para potenciar tu
          negocio?
        </h2>
        <button className={styles.demo__header_button}>Agenda una demo</button>
      </div>

      <div className={styles.demo__description}>
        <img
          src={pc}
          alt="Hydra"
          draggable={false}
          className={styles.demo__description_image}
        />
        <p className={styles.demo__description_content}>
          Y mejora las experiencias de tus clientes con una de las mejores
          herramientas para ventas online basada en{" "}
          <span>Comercio Conversacional</span>
        </p>
      </div>
    </section>
  );
};

export default Demo;
