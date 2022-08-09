import { images } from "../../data";
import styles from "./they_trust_us.module.scss";

const TheyTrustUs = () => {
  return (
    <section className={styles.they_trust_us}>
      <h2 className={styles.they_trust_us__title}>Confían en nosotros</h2>
      <div className={styles.they_trust_us__images}>
        {images.map((image, index) => (
          <div className={styles.they_trust_us__images_item} key={index}>
            <img
              src={image}
              alt={`Img${index}`}
              key={index}
              draggable={false}
              className={styles.they_trust_us__image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheyTrustUs;
