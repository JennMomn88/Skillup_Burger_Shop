import React, { useState } from "react";
import MenuCard from "./MenuCard";
import Burger1Img from "../../assets/burger1.png";
import Burger2Img from "../../assets/burger2.png";
import Burger3Img from "../../assets/burger3.png";

const Menu = () => {
  const addProductToCart = (itemNum, cartItems, setCartItems) => {
    const isItemInCart = cartItems.some((item) => item.itemNum === itemNum);

    if (isItemInCart) {
      const items = cartItems.map((item) => {
        if (item.itemNum === itemNum) {
          item.units += 1;
        }

        return item;
      });

      setCartItems(items);
    } else {
      setCartItems([...cartItems, { itemNum: itemNum, units: 1 }]);
    }
  };

  const [products] = useState([
    {
      itemNum: 13,
      burgerSrc: Burger1Img,
      price: 3.3,
      title: "Hamburguesa con queso",
      handler: addProductToCart,
      delay: 0,
    },
    {
      itemNum: 16,
      burgerSrc: Burger2Img,
      price: 4.5,
      title: "Hamburguesa vegetariana con queso",
      handler: addProductToCart,
      delay: 0.3,
    },
    {
      itemNum: 18,
      burgerSrc: Burger3Img,
      price: 6.1,
      title: "Hamburguesa con queso y papas fritas",
      handler: addProductToCart,
      delay: 0.6,
    },
  ]);

  return (
    <div id="menu">
      <h1>Menú</h1>
      <div>
        {products.map((product) => (
          <MenuCard
            itemNum={product.itemNum}
            burgerSrc={product.burgerSrc}
            price={product.price}
            title={product.title}
            handler={product.handler}
            delay={product.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
