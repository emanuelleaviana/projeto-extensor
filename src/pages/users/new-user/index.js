import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Navbar from "../../../components/NavBar";
import Select from "../../../components/Select";
import * as C from "./styles";

const NewUser = () => {
  const [roles, setRoles] = useState([]);
  const [form, setForm] = useState({
    cpf: "",
    name: "",
    email: "",
    phone: "",
    sex: "0", 
    role: "",
    registration: "",
    password: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      await axios.get('https://nodejs-calcados-api-production.up.railway.app/api/users/roles', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        response = response.data.map(item => {
          return { value: item.role_id, label: item.name };
        });
        setRoles(response);
      });
    };
    fetchData();
  }, []);

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
        form.role = Number(form.role);
        const response = await axios.post(
          "https://nodejs-calcados-api-production.up.railway.app/api/users/create-user/",
          form, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
        ).then(
          response => {
            if (response.data.success) {
              setErrorMessage('');
              setSuccessMessage(response.data.success);
              setTimeout(() => {
                navigate('/usuarios');
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
          <Input
            type="text"
            label={'CPF'}
            name="cpf"
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
              name="phone"
              placeholder="Digite o Telefone"
              onChange={handleChange}
              value={form.phone}
              labelPosition="side"
            />
            <Select
              label="Sexo"
              name="sexo"
              value={form.sex}
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
          <Select
              label="Perfil"
              name="role"
              value={form.role}
              onChange={handleChange}
              options={roles}
              labelPosition="side"
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
