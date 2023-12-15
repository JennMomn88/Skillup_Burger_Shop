import React from "react";
import { motion } from "framer-motion";
import Popup from "reactjs-popup";
import { useCartContext } from "../../context/CartContext";

const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 }) => {
  const [cartItems, setCartItems] = useCartContext();

  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div className="placeholder"></div>
      <div className="card">
        <img src={burgerSrc} alt={itemNum} />

        <h5>
          {Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR",
          }).format(price)}
        </h5>

        <p>{title}</p>
        <Popup
          trigger={(open) => <button>Buy Now</button>}
          onOpen={() => handler(itemNum, cartItems, setCartItems)}
        >
          <div
            style={{
              color: "red",
              transform: "translate(0%,-500%)",
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            Added to cart!
          </div>
        </Popup>
      </div>
    </motion.div>
  );
};

export default MenuCard;
