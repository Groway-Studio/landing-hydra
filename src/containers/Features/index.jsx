import { Card } from "../../components";
import { features } from "../../data";
import styles from "./features.module.scss";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.features__content}>
        {features.map(({ img, title, info }) => (
          <Card
            key={title}
            image={img}
            title={title}
            info={info}
            className={styles.features__card}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
