import React, { useState } from "react";
import { Menu, Hamburger, Logo, MenuLink, Nav } from "./NavbarStyles";
import img from "../../img/food-logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/">
        <img src={img} alt="" />
        <span>RECİPE</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span style={{ background: "#393e46" }}></span>
        <span></span>
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink target="_blank" to="https://github.com/keskindev">
          Github
        </MenuLink>
        <MenuLink to="/login">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
