import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import StockPage from "../pages/stock";
import UserTable from "../pages/users";
import NewUser from "../pages/users/new-user";

function isAuthenticated() {
  const token = localStorage.getItem('token');
  return !!token;
}

function ProtectedRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/signin" replace />;
  }
  return <Outlet />;
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/usuarios" element={<UserTable />} />
            <Route path="/usuarios/novo-usuario" element={<NewUser />} />
            <Route path="/usuarios/editar-usuario/:registration" element={<NewUser />} />
            <Route path="/estoque" element={<StockPage />} />
          </Route>
            <Route path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;