import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as C from "./styles";
import axios from "axios";

const Signin = () => {
  const [form, setForm] = useState({
    registration: '',
    password: '',
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  
  async function handleLogin() {
    if(form.registration.length > 0 && form.password.length > 0) {
      const response = await axios.post('https://nodejs-calcados-api-production.up.railway.app/api/auth/login/', form);

      if(response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/home');
      }
    }
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
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
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;