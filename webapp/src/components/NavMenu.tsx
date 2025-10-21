import React from "react";
import "../styles/NavMenu.css";

const NavMenu: React.FC = () => {
  return (
    <>
      <nav className="nav-menu">
        <img src="iv.svg" alt="Identidade Visual Alcateia" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Contatos</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;