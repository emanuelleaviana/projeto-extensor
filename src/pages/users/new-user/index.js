import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import * as C from "./styles";

const NewUser = () => {
    const [form, setForm] = useState({
      registration: "",
      name: "",
      email: "",
      confirmEmail: "",
      password: "",
      role: "admin"
    });
  
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
  
    const navigate = useNavigate();
  
    function handleChange(event) {
      setForm({ ...form, [event.target.name]: event.target.value });
    }

    function back() {
        navigate("/home");
    }
  
    async function handleUserRegister()   
   {  
      if(form.email !== form.confirmEmail) {
        setErrorMessage('Os endereços de email não coincidem. Digite-os novamente.');
      } else {
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
    }
  
    return (
      <C.Container>
        <C.Logo src={logo} alt="Logo do sistema" /> 
        <C.Content>
            <C.H1>Cadastrar Novo Usuário</C.H1>
          <Input
            type="text"
            label={'Matrícula'}
            name="registration"
            placeholder="Digite a Matrícula"
            onChange={handleChange}
            value={form.registration}
          />
          <Input
            type="text"
            label={'Nome'}
            name="name"
            placeholder="Digite o nome"
            onChange={handleChange}
            value={form.name}
          />
          <Input
            type="text"
            label={'E-mail'}
            name="email"
            placeholder="Digite o email"
            onChange={handleChange}
            value={form.email}
          />
          <Input
            type="text"
            label={'Confirmação de Email'}
            name="confirmEmail"
            placeholder="Confirme o email"
            onChange={handleChange}
            value={form.confirmEmail}
          />
          <Input
            type="password"
            label={'Nova Senha'}
            name="password"
            placeholder="Digite a Senha"
            onChange={handleChange}
            value={form.password}
          />
          <C.Error>{errorMessage}</C.Error>
          <C.Success>{successMessage}</C.Success>
          <Button 
            backgroundColor={'#FFF'} 
            color={'#046ee5'} 
            border={'1px solid #046ee5'} 
            Text="Cancelar" 
            onClick={back} />
          <Button Text="Cadastrar" onClick={handleUserRegister} />
        </C.Content>
      </C.Container>
    );
  };
  
  export default NewUser; 