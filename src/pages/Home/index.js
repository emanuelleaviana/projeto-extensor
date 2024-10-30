import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Navbar from "../../components/NavBar";
import Select from "../../components/Select";
import * as C from "./styles";

const Home = () => {
  const navigate = useNavigate();

  const [roles, setRoles] = useState([]);
  const [form, setForm] = useState({
    codigo: "",
    name: "",
    descricao: "",
    category_id: 1,
    quantidade: "",
    preco: ""
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
        console.log('token', token)
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

  const categories = [
    { value: 1, label: 'Plataforma' },
    { value: 2, label: 'Rasteirinha' },
    { value: 3, label: 'Salto' },
    { value: 4, label: 'Tênis' },
    { value: 5, label: 'Bota' },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    const newValue = name === 'category_id' ? Number(value) : value;
  
    setForm((prevForm) => ({
      ...prevForm,
      [name]: newValue,
    }));
  };
  

  async function teste() {
    const response = await axios.post(
      "https://nodejs-calcados-api-production.up.railway.app/api/manage/products/register",
      form, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
    ).then(
      response => {
        setTimeout(() => {
          navigate('/home');
        }, 3000);
      }).catch(
        error => {
          setErrorMessage(error.response.data.error);
        }
      );
  }

  return (
    <C.Container>
      <Header />
      <C.Container>
        <C.Content>
          <C.H1>Cadastrar produto</C.H1>
          <Input
            type="text"
            label={'Código'}
            name="codigo"
            placeholder="Digite o Código"
            onChange={handleChange}
            value={form.codigo}
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
            label={'Descrição'}
            name="descricao"
            placeholder="Descrição"
            onChange={handleChange}
            value={form.descricao}
            labelPosition="side"
            isTextArea={true}
            align="flex-start"
          />
         <Select
            label="Categoria"
            name="category_id"
            value={form.category_id}
            onChange={handleChange}
            options={categories}
            labelPosition="side" 
          />
          <Input
            type="text"
            label={'Quantidade'}
            name="quantidade"
            placeholder="Quantidade"
            onChange={handleChange}
            value={form.quantidade}
            labelPosition="side"
          />
          <Input
            type="text"
            label={'Preço'}
            name="preco"
            placeholder="Preço"
            onChange={handleChange}
            value={form.preco}
            labelPosition="side"
          />

          <Button Text="Cadastrar" onClick={teste} />
        </C.Content>
      </C.Container>

      <Navbar onNavigate={navigate} />
    </C.Container>
  );
};

export default Home;
