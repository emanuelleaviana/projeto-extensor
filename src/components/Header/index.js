import React from "react";
import * as C from "./styles";
import logo from "../../assets/logo.png";

const Header = () => (
  <C.Header>
    <C.Logo src={logo} alt="Logo do sistema" />
  </C.Header>
);

export default Header;
