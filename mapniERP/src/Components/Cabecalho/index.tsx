import styled from "styled-components"
import LogoMapni from "../../imagens/logoMapni.png"
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import { RiDonutChartFill } from "react-icons/ri";
import { BsFolder } from "react-icons/bs";
import { PiCurrencyCircleDollar } from "react-icons/pi";

const Container = styled.div`
  height:70px;
  padding:0 30px;
  background-color:var(--preto-padrao);
  display:flex;
  justify-content:space-between;
  align-items:center;
  color:#FFFFFF;
img {
  width:40px;
  height:50px;
}
`
const ListaDeOpcoes = styled.ul`
  display: flex;
  height: 100%;
  font-size: 15px;
  align-items: center;
  margin: 0 40px;
li {
  display: flex;
  align-items: center;
  padding:0 12px;
  gap: 6px;
  height: 100%;
  position: relative;
&:hover {
  cursor: pointer;
  .icone {
    color:#fbff00;
  }
&:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color:#fbff09;
  box-shadow:0px 0px 2px 0px #fbff00;
}}}
`
const IconeSair = styled(IoExitOutline)`
  cursor:pointer;
  font-size:22px;
  color:#fc5d5d;
&:hover {
  transition:.2s;
  transform:scale(1.09);
}
`
const Cabecalho = () => {
  return (
    <Container>

        <img src={LogoMapni} alt="logo mapni" />

        <ListaDeOpcoes>
          <li><HiOutlineChartBarSquare className="icone" fontSize={20}/>Dashboard</li>
          <li><IoRocketOutline className="icone" fontSize={17}/>Propostas</li>
          <li><RiDonutChartFill className="icone" fontSize={17}/>Analytics </li>
          <li><BsFolder className="icone" fontSize={17}/>Administrativo</li>
          <li><PiCurrencyCircleDollar className="icone" fontSize={19}/>Financeiro </li>
        </ListaDeOpcoes>

        <Link to="/login"><IconeSair/></Link>

    </Container>
  )
}

export default Cabecalho
