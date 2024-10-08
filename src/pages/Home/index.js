import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import * as C from "./styles";

const Home = () => {
  const navigate = useNavigate();

  function signout() {
    localStorage.removeItem('token');
  };

  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <Button 
        Text="Cadastrar Novo Usuário" 
        onClick={() => [navigate("/usuarios/novo-usuario")]}
      ></Button>
      <Button 
        Text="Sair" 
        onClick={() => [signout(), navigate("/signin")]}
      ></Button>
    </C.Container>
  );
};

export default Home;