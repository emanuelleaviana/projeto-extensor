import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import Header from "../../components/Header";
import Navbar from "../../components/NavBar";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";

const Home = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    codigo: "",
    nome: "",
    descricao: "",
    categoria: "",
    quantidade: "",
    preco: ""
  });

  const categories = [
    { value: 'plataforma', label: 'Plataforma' },
    { value: 'rasteirinha', label: 'Rasteirinha' },
    { value: 'salto', label: 'Salto' },
    { value: 'tenis', label: 'Tênis' },
    { value: 'bota', label: 'Bota' },
  ];

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
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
            name="nome"
            placeholder="Digite o nome"
            onChange={handleChange}
            value={form.nome}
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
            name="categoria"
            value={form.categoria}
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

          <Button Text="Cadastrar" onClick={console.log("boa")} />
        </C.Content>
      </C.Container>
      <Navbar onNavigate={navigate} />
    </C.Container>
  );
};

export default Home;
