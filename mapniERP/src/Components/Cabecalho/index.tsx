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
import { AiOutlineLineChart } from "react-icons/ai";
import { LuFileBarChart } from "react-icons/lu";
import { IoPieChartOutline } from "react-icons/io5";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { AiOutlineGlobal } from "react-icons/ai";
import { PiTargetDuotone } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiOfficeChair } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { BsPersonVcard } from "react-icons/bs";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdOutlinePayments } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";

const Container = styled.header`
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
  font-size: 14px;
  li {
    display: flex;
    align-items: center;
    padding: 0 22px;
    gap: 8px;
    height: 100%;
    position: relative;
    &:hover {
      cursor: pointer;
      .icone {
        color: #fbff00;
      }
      &::after {
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
const IconeDash = styled(HiOutlineChartBarSquare)`
  font-size: 20px;
`;
const IconeFoguete = styled(IoRocketOutline)`
  font-size: 17px;
`;
const IconeRosca = styled(RiDonutChartFill)`
  font-size: 17px;
`;
const IconeEngrenagem = styled(GoGear)`
  font-size: 17px;
`;
const IconePasta = styled(BsFolder)`
  font-size: 17px;
`;
const IconeDolar = styled(PiCurrencyCircleDollar)`
  font-size: 19px;
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
const LinkCSS = styled(Link)`
  color: white;
`;
interface Props {
  show: boolean;
}

const SubMenu = styled.ul<Props>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  width: 130%;
  top: 100%;
  left: -14%;
  background-color: var(--preto-padrao);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 2;
  p {
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 12px 0;
    margin: 0;
    &:hover {
      background-color: #00000049;
      border-radius: 5px;
      color: white;
      .subicone {
        color: #fbff00;
      }
    }
  }
`;

const Cabecalho = () => {
  const [showAnalytics, setShowAnalytics] = useState<boolean>(false);
  const [showOperacao, setShowOperacao] = useState<boolean>(false);
  const [showAdm, setShowAdm] = useState<boolean>(false);
  const [showFinanceiro, setShowFinanceiro] = useState(false);

  return (
    <Container>
      <img src={LogoMapni} alt="logo mapni" />
      <ListaDeOpcoes>
        <LinkCSS to="/dashboard">
          <li>
            <IconeDash className="icone" />
            Dashboard
          </li>
        </LinkCSS>
        <LinkCSS to="/propostas">
          <li>
            <IconeFoguete className="icone" />
            Propostas
          </li>
        </LinkCSS>
        <li
          onMouseEnter={() => setShowAnalytics(true)}
          onMouseLeave={() => setShowAnalytics(false)}
        >
          <IconeRosca className="icone" />
          Analytics
          <SubMenu show={showAnalytics}>
            <p>
              <LuFileBarChart className="subicone" />
              Metas
            </p>
            <p>
              <AiOutlineLineChart className="subicone" />
              Produção
            </p>
            <p>
              <IoPieChartOutline className="subicone" />
              Desempenho
            </p>
          </SubMenu>
        </li>
        <li
          onMouseEnter={() => setShowOperacao(true)}
          onMouseLeave={() => setShowOperacao(false)}
        >
          <IconeEngrenagem className="icone" />
          Operação
          <SubMenu show={showOperacao}>
            <p>
              <HiOutlineBuildingLibrary className="subicone" fontSize={15} />
              Bancos
            </p>
            <p>
              <AiOutlineGlobal className="subicone" />
              Produtos
            </p>
            <p>
              <PiTargetDuotone className="subicone" />
              Operações
            </p>
            <p>
              <FaRegHandshake className="subicone" />
              Promotoras
            </p>
            <p>
              <TbReportAnalytics className="subicone" />
              Config. de Metas
            </p>
            <p>
              <FaRegLightbulb className="subicone" />
              Origem de Vendas
            </p>
          </SubMenu>
        </li>
        <li
          onMouseEnter={() => setShowAdm(true)}
          onMouseLeave={() => setShowAdm(false)}
        >
          <IconePasta className="icone" />
          Administrativo
          <SubMenu show={showAdm}>
            <p>
              <BsPersonVcard className="subicone" />
              RH
            </p>
            <LinkCSS to="/cargos">
              <p onClick={() => setShowAdm(false)}>
                <PiOfficeChair className="subicone" />
                Cargos
              </p>
            </LinkCSS>
            <p>
              <GoPeople className="subicone" />
              Equipes
            </p>
            <LinkCSS to="/colaboradores">
              <p onClick={() => setShowAdm(false)}>
                <IoPersonCircleOutline fontSize={16} className="subicone" />
                Colaboradores
              </p>
            </LinkCSS>
            <LinkCSS to="/departamentos">
              <p onClick={() => setShowAdm(false)}>
                <HiOutlineOfficeBuilding className="subicone" />
                Departamentos
              </p>
            </LinkCSS>
          </SubMenu>
        </li>
        <li
          onMouseEnter={() => setShowFinanceiro(true)}
          onMouseLeave={() => setShowFinanceiro(false)}
        >
          <IconeDolar className="icone" />
          Financeiro
          <SubMenu show={showFinanceiro}>
            <p>
              <HiOutlineClipboardDocumentList className="subicone" />
              Relatórios
            </p>
            <p>
              <MdOutlinePayments className="subicone" />
              Contas a Pagar
            </p>
            <p>
              <FaHandHoldingDollar className="subicone" />
              Contas a Receber
            </p>
            <p>
              <BsBank className="subicone" />
              Contas Bancárias
            </p>
            <p>
              <BsCurrencyDollar className="subicone" />
              Comissões Pagas
            </p>
            <p>
              <FaSackDollar className="subicone" />
              Comissionamento
            </p>
          </SubMenu>
        </li>
      </ListaDeOpcoes>

      <Link to="/login">
        <IconeSair />
      </Link>
    </Container>
  );
};

export default Cabecalho;
