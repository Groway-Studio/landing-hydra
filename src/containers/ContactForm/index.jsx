import styles from "./contact_form.module.scss";

const ContactForm = () => {
  return (
    <section className={styles.contact_form}>
      <div className={styles.contact_form__ellipse1}></div>
      <div className={styles.contact_form__ellipse2}></div>
      <h2 className={styles.contact_form__title}>Contáctanos</h2>
      <form className={styles.contact_form__form}>
        <div className={styles.contact_form__form_inputs}>
          <input type="text" placeholder="Nombre" required />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            required
          />
        </div>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Mensaje"
          required
        ></textarea>
        <div className={styles.contact_form__form_button}>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
