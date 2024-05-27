import styled from "styled-components";
import CampoTexto from "../../Components/CampoTexto";
import { useState } from "react";
import Botao from "../../Components/Botao";
import { IoFilterOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { TbColumns3 } from "react-icons/tb";
import { TbFileExport } from "react-icons/tb";
import Modal from "../../Components/Modal";
import Titulo from "../../Components/Titulo";
import Cliente from "../../Screens/Cliente";
import { TbReload } from "react-icons/tb";
import Proposta from "../../Screens/Proposta";

const Container = styled.div`
  margin: 20px 30px;
  & > h1 {
    margin-bottom: 5px;
  }
`;
const ContainerInputBotao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    padding: 8px 12px;
    margin: 0;
    font-size: 12px;
  }
`;
const BoxInputFiltro = styled.div`
  margin: 10px 0 0 0;
  display: flex;
  gap: 5px;
  input {
    background-color: var(--background-input-cinza);
    width: 300px;
    padding: 8px;
    margin: 0;
  }
  button {
    background-color: var(--cinza-padrao);
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
const Tooltip = styled.div`
  position: relative;
  display: inline-block;
`;
const TooltipText = styled.span`
  visibility: hidden;
  width: 70px;
  background-color: #ffffff;
  color: #1f1f1f;
  box-shadow: 0px 0px 5px 0px #1f1f1f69;
  text-align: center;
  font-size: 9px;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  bottom: calc(100% + 18px);
  margin-left: -50px; /* centraliza a caixa de dica */
  &::after {
    content: "";
    position: absolute;
    bottom: 0; /* posiciona a ponta acima do tooltip */
    top: 100%;
    left: 50%;
    transform: translateX(-40%);
    border-width: 3px;
    border-style: solid;
    border-color: #ffffff transparent transparent transparent;
  }
`;
const ContainerBotoes = styled.div`
  margin: 10px 0 0 0;
  display: flex;
  gap: 5px;
  button:hover {
    ${TooltipText} {
      visibility: visible;
    }
  }
  button {
    background-color: var(--cinza-padrao);
    display: flex;
    align-items: center;
  }
  button:nth-child(2) {
    gap: 5px;
  }
`;
const Propostas = () => {
  const [valorDados, setvalorDados] = useState(""); //STATE BARRA DE PESQUISA
  const [modalFiltro, setModalFiltro] = useState(false); // STATE MODAL DO FILTRO
  const [modalCliente, setModalCliente] = useState(false); // STATE MODAL CLIENTE
  const [modalProposta, setModalProposta] = useState(false); // STATE MODAL PROPOSTA

  const abreModalFiltro = () => {
    setModalFiltro(!modalFiltro);
  };

  const abreModalCliente = () => {
    // state que abre a modal cliente
    setModalCliente(true);
  };

  const funcaoFechaModalCliente = () => {
    // state que fecha a modal cliente
    setModalCliente(false);
  };

  function funcaoFechaModalProposta() {
    setModalProposta(false);
  }

  const funcaoAbreModalProposta = () => {
    setModalProposta(true);
  };

  return (
    <Container>
      <Titulo>Propostas</Titulo>
      <ContainerInputBotao>
        <BoxInputFiltro>
          <CampoTexto
            tipo="text"
            valor={valorDados}
            onChange={(e) => setvalorDados(e.target.value)}
            placeholder="Pesquisar"
          />
          <Botao onClick={abreModalFiltro}>
            <IoFilterOutline fontSize={12} />
            Filtro
          </Botao>
        </BoxInputFiltro>

        <ContainerBotoes>
          <Botao>
            <TbReload fontSize={14} />
          </Botao>
          <Botao onClick={abreModalCliente}>
            <FaPlus fontSize={10} />
            Cadastrar
          </Botao>
          <Botao>
            <TbFileExport fontSize={14} />
            <Tooltip>
              <TooltipText>Exportar dados</TooltipText>
            </Tooltip>
          </Botao>
          <Botao>
            <TbColumns3 fontSize={13} />
            <Tooltip>
              <TooltipText>Editar colunas</TooltipText>
            </Tooltip>
          </Botao>
        </ContainerBotoes>
      </ContainerInputBotao>

      {modalFiltro && (
        <Modal overlay={abreModalFiltro}>
          <p>teste</p>
        </Modal>
      )}
      {modalCliente && (
        <Modal  overlay={funcaoFechaModalCliente}>
          <Cliente
            fechaModalCliente={funcaoFechaModalCliente}
            abreModalProposta={funcaoAbreModalProposta}
          />
        </Modal>
      )}
      {modalProposta && (
        <Modal overlay={funcaoFechaModalProposta}>
          <Proposta
            fechaModalProposta={funcaoFechaModalProposta}
            modalClienteAberto={abreModalCliente}
          />
        </Modal>
      )}
    </Container>
  );
};

export default Propostas;
