import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const [links] = useState([
    { name: "Inicio", to: "/" },
    { name: "Contacto", to: "/contact" },
    { name: "Quienes Somos", to: "/about" },
    { name: "Cesta de Compra", to: "/cart" },
  ]);

  return (
    <nav className="Header">
      <div>
        <Logo width="40px" height="40px" alt="logo Hamburguesa" />
      </div>
      {links.map((link) => (
        <div>
          <Link to={link.to}>{link.name}</Link>
        </div>
      ))}
      <DropdownMenu style={{ backgroundColor: "white" }} />
    </nav>
  );
};

export default Header;
