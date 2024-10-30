import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/NavBar';
import * as C from "./styles";

const StockPage = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    await axios.get('https://nodejs-calcados-api-production.up.railway.app/api/manage/products/getall', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
        console.log(response.data);
      setOrders(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <C.Container>
      <Header />
      <C.Content style={{overflow: "auto"}}>
        <C.H1>Estoque</C.H1>
        <div style={{ overflow: "scroll", width: "300px"}}>
          <C.Table style={{padding: "15px"}}>
              <C.TableHead>
              <C.TableRow>
                  <C.TableHeader>Nome</C.TableHeader>
                  <C.TableHeader>Categoria</C.TableHeader>
              </C.TableRow>
              </C.TableHead>
              <C.TableBody>
              {orders.map((user) => (
                  <C.TableRow key={user.id}>
                  <C.TableCell style={{whiteSpace: "nowrap"}}>{user.name}</C.TableCell>
                  <C.TableCell style={{whiteSpace: "nowrap"}}>{user.Category?.name}</C.TableCell>
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

export default StockPage;