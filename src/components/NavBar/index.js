import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox , faFile, faUser, faSignOutAlt, faHistory  } from '@fortawesome/free-solid-svg-icons';
import * as C from "./styles"; 

const Navbar = ({ onNavigate }) => (
  
  <C.Navbar>
    <C.NavItem onClick={() => onNavigate("/home")}>
      <FontAwesomeIcon icon={faFile} />
    </C.NavItem>
    <C.NavItem onClick={() => onNavigate("/usuarios/novo-usuario")}>
      <FontAwesomeIcon icon={faUser} />
    </C.NavItem>
    <C.NavItem onClick={() => onNavigate("/estoque")}>
      <FontAwesomeIcon icon={faBox} />
    </C.NavItem>
    <C.NavItem onClick={() => onNavigate("/historico")}> 
      <FontAwesomeIcon icon={faHistory} />
    </C.NavItem>
    <C.NavItem onClick={() => onNavigate("/signin")}> 
      <FontAwesomeIcon icon={faSignOutAlt} />
    </C.NavItem>
  </C.Navbar>
);

export default Navbar;
