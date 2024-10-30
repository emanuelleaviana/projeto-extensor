import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Navbar from '../../components/NavBar';
import * as C from "./styles";

const UserTable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  function navigateNewUser() {
    navigate('novo-usuario')
  }

  async function deleteUser(id) {
    const token = localStorage.getItem('token');
      await axios.delete(`https://nodejs-calcados-api-production.up.railway.app/api/users/delete-user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        fetchData();
      });
  }

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    await axios.get('https://nodejs-calcados-api-production.up.railway.app/api/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setUsers(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <C.Container>
      <Header />
      <C.Content style={{overflow: "auto"}}>
        <C.H1>Usuários</C.H1>
        <Button Text="Cadastrar Usuário" onClick={navigateNewUser} />
        <div style={{ overflow: "scroll", width: "300px"}}>
          <C.Table style={{padding: "15px"}}>
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
                  <C.TableCell><FontAwesomeIcon icon={faPenToSquare} onClick={navigateNewUser}/></C.TableCell>
                  <C.TableCell><FontAwesomeIcon icon={faTrash} onClick={() => deleteUser(user.registration)}/></C.TableCell>
                  </C.TableRow>
              ))}
              </C.TableBody>
          </C.Table>
        </div>
      </C.Content>
      <Navbar onNavigate={navigate} />
    </C.Container>
  );
};

export default UserTable;