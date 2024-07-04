import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import PaginaBase from "./Pages/PaginaBase";
import Propostas from "./Pages/Propostas";
import Login from "./Pages/Login";
import Departamentos from "./Pages/Departamentos";
import Cargos from "./Pages/Cargos";
import Colaboradores from "./Pages/Colaboradores";
import Bancos from "./Pages/Bancos";
import Produtos from "./Pages/Produtos";
import Operacoes from "./Pages/Operacoes";
import Promotoras from "./Pages/Promotoras";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<PaginaBase />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/propostas" element={<Propostas />}></Route>
          <Route path="/departamentos" element={<Departamentos />}></Route>
          <Route path="/cargos" element={<Cargos />}></Route>
          <Route path="/colaboradores" element={<Colaboradores />}></Route>
          <Route path="/bancos" element={<Bancos />}></Route>
          <Route path="/produtos" element={<Produtos />}></Route>
          <Route path="/operacoes" element={<Operacoes />}></Route>
          <Route path="/promotoras" element={<Promotoras />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
