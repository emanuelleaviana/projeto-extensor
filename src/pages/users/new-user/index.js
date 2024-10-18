import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Header from "../../../components/Header";
import Navbar from "../../../components/NavBar";
import Select from "../../../components/Select";
import * as C from "./styles";
import { RowContainer } from "./styles";

const NewUser = () => {
  const [form, setForm] = useState({
    codigo: "",
    cpf: "",
    nome: "",
    email: "",
    telefone: "",
    sexo: "0", 
    registration: "",
    password: "",
    status: "0" 
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const status = [
    { value: '0', label: 'Ativo' },
    { value: '1', label: 'Inativo' },
    { value: '2', label: 'Bloqueado' },
  ];

  const sexo = [
    { value: '0', label: 'Masculino' },
    { value: '1', label: 'Feminino' },
    { value: '2', label: 'Não informar' },
  ];


  const navigate = useNavigate();

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleUserRegister() {
      if (form.registration.length > 0 && form.password.length > 0) {
        const response = await axios.post(
          "https://nodejs-calcados-api-production.up.railway.app/api/auth/create-user/",
          form, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
        ).then(
          response => {
            if (response.data.success) {
              setErrorMessage('');
              setSuccessMessage(response.data.success);
              setTimeout(() => {
                navigate("/home");
              }, 3000);
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
      <Header />
      <C.Container>
        <C.Content>
          <C.H1>Cadastrar Novo Usuário</C.H1>
          <RowContainer>
            <Input
              type="text"
              label={'Código'}
              name="codigo"
              placeholder="Digite o Código"
              onChange={handleChange}
              value={form.codigo}
              labelPosition="side"
            />
            <Select
              label="Status"
              name="status"
              value={form.status}
              onChange={handleChange}
              options={status}
              labelPosition="side"
            />
          </RowContainer>
          <Input
            type="text"
            label={'CPF'}
            name="codigo"
            placeholder="Digite o CPF"
            onChange={handleChange}
            value={form.cpf}
            labelPosition="side"
          />
          <Input
            type="text"
            label={'Nome'}
            name="name"
            placeholder="Digite o nome"
            onChange={handleChange}
            value={form.name}
            labelPosition="side"
          />
          <Input
            type="text"
            label={'E-mail'}
            name="email"
            placeholder="Digite o email"
            onChange={handleChange}
            value={form.email}
            labelPosition="side"
          />
            <Input
              type="text"
              label={'Telefone'}
              name="codigo"
              placeholder="Digite o Telefone"
              onChange={handleChange}
              value={form.telefone}
              labelPosition="side"
            />
            <Select
              label="Sexo"
              name="sexo"
              value={form.sexo}
              onChange={handleChange}
              options={sexo}
              labelPosition="side"
            />
          <C.H1>Credenciais</C.H1>
          <Input
            type="text"
            label={'Matrícula'}
            name="registration"
            placeholder="Digite a Matrícula"
            onChange={handleChange}
            value={form.registration}
          />
          <Input
            type="password"
            label={'Senha'}
            name="password"
            placeholder="Digite a Senha"
            onChange={handleChange}
            value={form.password}
          />
          <C.Error>{errorMessage}</C.Error>
          <C.Success>{successMessage}</C.Success>
          <Button Text="Cadastrar" onClick={handleUserRegister} />
        </C.Content>
      </ C.Container>

      <Navbar onNavigate={navigate} />
    </ C.Container>
  );
};

export default NewUser;
