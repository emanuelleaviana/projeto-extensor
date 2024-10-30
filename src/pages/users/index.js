import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/NavBar';
import * as C from "./styles";

const UserTable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  // Substitua este array de dados de exemplo com sua lógica de obtenção de dados
  useEffect(() => {
    const fetchData = async () => {
      // Busca o token fora do useEffect e o atualiza quando o localStorage mudar
      const token = localStorage.getItem('token');
      console.log(token);
      await axios.get('https://nodejs-calcados-api-production.up.railway.app/api/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        // Extraia os dados da resposta
        setUsers(response.data); // Assumindo que a API retorna os usuários em `response.data`
      });
    };
    fetchData();
  }, []);

  return (
    <C.Container>
      <Header />
      <C.Content style={{overflow: "auto"}}>
        <C.H1>Usuários</C.H1>
        <C.Table style={{padding: "15px", marginLeft: "250px"}}>
            <C.TableHead>
            <C.TableRow>
                <C.TableHeader>Nome</C.TableHeader>
                <C.TableHeader>Email</C.TableHeader>
                <C.TableHeader>Telefone</C.TableHeader>
                <C.TableHeader>Cargo</C.TableHeader>
                <C.TableHeader>Status</C.TableHeader>
            </C.TableRow>
            </C.TableHead>
            <C.TableBody>
            {users.map((user) => (
                <C.TableRow key={user.id}>
                <C.TableCell style={{whiteSpace: "nowrap"}}>{user.name}</C.TableCell>
                <C.TableCell style={{whiteSpace: "nowrap"}}>{user.email}</C.TableCell>
                <C.TableCell style={{whiteSpace: "nowrap"}}>{user.phone}</C.TableCell>
                <C.TableCell>{user.role}</C.TableCell>
                <C.TableCell>{user.is_active === true ? "Ativo" : "Inativo"}</C.TableCell>
                </C.TableRow>
            ))}
            </C.TableBody>
        </C.Table>
      </C.Content>
      <Navbar onNavigate={navigate} />
    </C.Container>
  );
};

export default UserTable;