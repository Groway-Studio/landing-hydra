import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

import hydra_business from "../../assets/hydra_business.svg";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={hydra_business} alt="Hydra Business" draggable={false} />

      <div className={styles.footer__social_icons}>
        <BsTwitter />
        <RiInstagramFill />
        <BsFacebook />
      </div>
    </footer>
  );
};

export default Footer;
