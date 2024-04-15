import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from './Pages/Dashboard'
import PaginaBase from "./Pages/PaginaBase"
import Propostas from "./Pages/Propostas"
import Login from "./Pages/Login"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<PaginaBase/>}>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/propostas" element={<Propostas/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

