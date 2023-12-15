import React from "react";
import BurgerImg from "../../assets/burger2.png";
import Popup from "reactjs-popup";

const Contact = () => {
  return (
    <div className="contact">
      <form onsubmit="return false;">
        <h2>Contáctanos</h2>
        <input type="text" name="name" id="name" placeholder="Nombre" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Tu mensaje..."
        ></textarea>
        <Popup trigger={(open) => <button type="button">Enviar</button>}>
          <div className="popup">
            ¡Gracias por contactarnos! En breve te responderemos.
          </div>
        </Popup>
      </form>
      <div className="formBorder">
        <div>
          <img src={BurgerImg} alt="Burguer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
