import image1 from "../../assets/services/image1.png";
import image2 from "../../assets/services/image2.png";

import { ServiceCard } from "../../components";

import styles from "./services.module.scss";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.services__ellipse1}></div>
      <div className={styles.services__ellipse2}></div>
      <ServiceCard
        img={image1}
        title="Servicio a la medida de integración de datos"
        className={styles.services__card}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut
          voluptatum consectetur facere ad nobis laborum ea tempore veniam
          reiciendis hic, odio laboriosam magnam nesciunt aspernatur eligendi
          officiis perspiciatis voluptas? Lorem ipsum dolor sit amet consectetur
        </p>
      </ServiceCard>
      <ServiceCard
        img={image2}
        title="Un espacio de Negocios que trabajan con Nosotros a futuro"
        className={styles.services__card}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut
          voluptatum consectetur facere ad nobis laborum ea tempore veniam
          reiciendis hic, odio laboriosam magnam nesciunt aspernatur eligendi
          officiis perspiciatis voluptas? Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </ServiceCard>
    </section>
  );
};

export default Services;
