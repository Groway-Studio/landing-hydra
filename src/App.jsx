import { Footer, Navbar } from "./components";
import {
  ContactForm,
  Demo,
  Features,
  Header,
  Info,
  Services,
  TheyTrustUs,
} from "./containers";
import styles from "./App.module.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Header />
        <Info />
        <Features />
        <TheyTrustUs />
        <Services />
        <Demo />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default App;
