import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as C from "./styles";

const Signin = () => {
  const [form, setForm] = useState({
    registration: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleLogin()   
 {
    if (form.registration.length > 0 && form.password.length > 0) {
      const response = await axios.post(
        "https://nodejs-calcados-api-production.up.railway.app/api/auth/login/",
        form
      ).then(
        response => {
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            navigate("/home");
          }
      }).catch(
        error => {
          setErrorMessage(error.response.data.error);
        }
      );
    }
  }

  return (
    <C.Container>
      <C.Logo src={logo} alt="Logo do sistema" /> 
      <C.Content>
        <Input
          type="text"
          name="registration"
          placeholder="Digite sua Matrícula"
          onChange={handleChange}
          value={form.registration}
        />
        <Input
          type="password"
          name="password"
          placeholder="Digite sua Senha"
          onChange={handleChange}
          value={form.password}
        />
        <C.P>{errorMessage}</C.P>
        <Button Text="Entrar" onClick={handleLogin} />
      </C.Content>
    </C.Container>
  );
};

export default Signin;   
