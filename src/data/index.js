import dialog from "../assets/features/dialog.svg";
import list from "../assets/features/list.svg";
import easy from "../assets/features/easy.svg";

import image1 from "../assets/trust_us/image1.png";
import image2 from "../assets/trust_us/image2.png";
import image3 from "../assets/trust_us/image3.png";
import image4 from "../assets/trust_us/image4.png";
import image5 from "../assets/trust_us/image5.png";

export const features = [
  {
    img: dialog,
    title: "Comunicación",
    info: (
      <p>
        Esto no es poca cosa: <br />
        Los clientes valoran la posibilidad de comunicarse con las marcas si lo
        necesitan. En la actualidad, el <span>66%</span> de los consumidores
        confía más en hacer una compra cuando una empresa utiliza activamente
        las <span>aplicaciones de mensajería.</span>
      </p>
    ),
  },
  {
    img: list,
    title: "Cómo funciona",
    info: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat facere
        distinctio ipsum, unde consequuntur excepturi sed laboriosam error vero
        rerum dicta iste ea expedita natus corrupti quibusdam inventore
        accusantium tempora.
      </p>
    ),
  },
  {
    img: easy,
    title: "Sin fricciones y fácil",
    info: (
      <p>
        Olvídate por un momento del comercio tradicional. Ahora los clientes
        pueden evitar todos los inconvenientes de las habituales compras en las
        tiendas físicas mezclando y combinando las experiencias ofrecidas. ¿La
        tienda está cerrada? ¿No tienen tiempo para esperar en una fila? No hay
        problema, ellos aún pueden obtener la{" "}
        <span>experiencia personalizada</span> de ser atendidos en la tienda.
      </p>
    ),
  },
];

export const images = [image1, image2, image3, image4, image5];
