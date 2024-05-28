import styled from "styled-components";
import LogoMapni from "../../imagens/logoMapni.png";
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import { RiDonutChartFill } from "react-icons/ri";
import { BsFolder } from "react-icons/bs";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { GoGear } from "react-icons/go";
import { useState } from "react";

const Container = styled.div`
  height: 70px;
  padding: 0 30px;
  background-color: var(--preto-padrao);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  img {
    width: 40px;
    height: 50px;
  }
`;
const ListaDeOpcoes = styled.ul`
  display: flex;
  height: 100%;
  font-size: 15px;
  margin: 0 40px;

  li {
    display: flex;
    align-items: center;
    padding: 0 12px;
    gap: 6px;
    height: 100%;
    position: relative;
    &:hover {
      cursor: pointer;
      .icone {
        color: #fbff00;
      }
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #fbff09;
        box-shadow: 0px 0px 2px 0px #fbff00;
      }
    }
  }
`;
const IconeSair = styled(IoExitOutline)`
  cursor: pointer;
  font-size: 22px;
  color: #fc5d5d;
  &:hover {
    transition: 0.2s;
    transform: scale(1.09);
  }
`;
interface Props {
  show: boolean;
}

const SubMenu = styled.ul<Props>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--preto-padrao);
  padding: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  li {
    padding: 8px 10px;
    display: flex;
    justify-content: center;
    &:hover {
      cursor: pointer;
    }
  }
`;
const Cabecalho = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <Container>
      <img src={LogoMapni} alt="logo mapni" />

      <ListaDeOpcoes>
        <li onClick={() => setShowSubMenu(!showSubMenu)}>
          <HiOutlineChartBarSquare className="icone" fontSize={20} />
          Dashboard
          <SubMenu show={showSubMenu}>
            <li>Exemplo1</li>
            <li>Exemplo2</li>
            <li>Exemplo3</li>
          </SubMenu>
        </li>
        <li>
          <IoRocketOutline className="icone" fontSize={17} />
          Propostas
        </li>
        <li>
          <RiDonutChartFill className="icone" fontSize={17} />
          Analytics{" "}
        </li>
        <li>
          <GoGear className="icone" fontSize={17} />
          Operação
        </li>
        <li>
          <BsFolder className="icone" fontSize={17} />
          Administrativo
        </li>
        <li>
          <PiCurrencyCircleDollar className="icone" fontSize={19} />
          Financeiro{" "}
        </li>
      </ListaDeOpcoes>

      <Link to="/login">
        <IconeSair />
      </Link>
    </Container>
  );
};

export default Cabecalho;
