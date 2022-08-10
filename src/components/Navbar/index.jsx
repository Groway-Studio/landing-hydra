import { useEffect, useState } from "react";
import hydra from "../../assets/hydra_logo.svg";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => {});
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

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
      <ul
        className={`${styles.navbar__list} ${
          show && width < 600 ? styles.show : ""
        }`}
        onClick={() => setShow(!show)}
      >
        {elements.map((navItem, index) => (
          <li key={index} className={styles.navbar__list_item}>
            <a href="#!">{navItem}</a>
          </li>
        ))}
      </ul>

      <div className={styles.mobile_menu} onClick={() => setShow(!show)}>
        <label htmlFor="show" className={styles.navigation__icon_box}></label>
        <input
          type="checkbox"
          name="show"
          className={styles.navigation__toggle}
          onClick={() => (width < 600 ? setShow(!show) : setShow(false))}
        />
      </div>
    </nav>
  );
};

export default Navbar;
