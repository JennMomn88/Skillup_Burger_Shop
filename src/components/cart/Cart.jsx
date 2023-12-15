import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { useCartContext } from "../../context/CartContext";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [items, setItems] = useState([0, 0, 0]);

  const increment = (itemNum) => {
    const updatedItems = items.map((units, index) =>
      index === itemNum ? ++units : units
    );

    setItems(updatedItems);
  };

  const decrement = (itemNum) => {
    if (!items[itemNum]) return;

    const updatedItems = items.map((units, index) =>
      index === itemNum ? --units : units
    );

    setItems(updatedItems);
  };

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Hamburguesa con queso"}
          img={burger1}
          value={items[0]}
          increment={() => increment(0)}
          decrement={() => decrement(0)}
        />
        <CartItem
          title={"Hamburguesa vegetariana con queso"}
          img={burger2}
          value={items[1]}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Hamburguesa con queso y papas fritas"}
          img={burger3}
          value={items[2]}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
