import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Navbar from "../../components/NavBar";
import Select from "../../components/Select";
import * as C from "./styles";

const RequestOrder
 = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    codigo: "",
    product: "",
    category_id: 1,
    quantidade: "",
  });

  const categories = [
    { value: 1, label: 'Plataforma' },
    { value: 2, label: 'Rasteirinha' },
    { value: 3, label: 'Salto' },
    { value: 4, label: 'Tênis' },
    { value: 5, label: 'Bota' }
  ];
  

  function handleChange(event) {
    console.log("ok")
  }

  return (
    <C.Container>
      <Header />
      <C.Container>
        <C.Content>
          <C.H1>Solicitar pedido</C.H1>
          <Input
            type="text"
            label={'Código'}
            name="cod"
            placeholder="Digite o Código"
            onChange={handleChange}
            labelPosition="side"
          />
          <Input
            type="text"
            label={'Produto'}
            name="product"
            placeholder="Digite o nome"
            onChange={handleChange}
            labelPosition="side"
          />
         <Select
            label="Categoria"
            name="cod"
            onChange={handleChange}
            options={categories}
            labelPosition="side" 
          />
         <Input
            type="number"
            label={'Quantidade'}
            name="qty"
            placeholder="Quantidade"
            onChange={handleChange}
            labelPosition="side"
          />
          <Button Text="Solicitar" onClick={console.log("ok")} />
        </C.Content>
      </C.Container>

      <Navbar onNavigate={navigate} />
    </C.Container>
  );
};

export default RequestOrder;
