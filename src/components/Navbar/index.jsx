import hydra from "../../assets/hydra_logo.png";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const elements = [
    "Comercio Conversacional",
    "Sobre Nosotros",
    "Contáctanos",
    "Contáctanos",
  ];

  return (
    <nav className={styles.navbar}>
      <img
        src={hydra}
        alt="Hydra"
        draggable={false}
        className={styles.navbar__logo}
      />
      <ul className={styles.navbar__list}>
        {elements.map((navItem, index) => (
          <li key={index} className={styles.navbar__list_item}>
            <a href="#!">{navItem}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
