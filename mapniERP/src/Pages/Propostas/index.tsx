import styled from "styled-components"
import CampoTexto from "../../Components/CampoTexto"
import { useState } from "react"
import Botao from "../../Components/Botao"
import { IoFilterOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { TbColumns3 } from "react-icons/tb";
import { TbFileExport } from "react-icons/tb";
import Modal from "../../Components/Modal";
import {Tooltip, TooltipText} from "../../Components/Tooltip";
import Titulo from "../../Components/Titulo";
import Cadastrar from "../../Screens/Cadastrar";

const Container = styled.div`
margin: 20px 30px;
`
const ContainerInputBotao = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  button {
  padding:8px 12px;
  margin:0;
  font-size:12px;
}
`
const BoxInputFiltro = styled.div`
margin:10px 0 0 0;
display:flex;
gap:5px;
input {
  background-color:var(--cinza-padrao);
  width:300px;
  padding:8px;
  margin:0;
}
button {
 background-color:var(--cinza-padrao);
 display:flex;
 align-items:center;
 gap:5px;
}
`
const ContainerBotoes = styled.div`
margin:10px 0 0 0;
display:flex;
gap:5px;
button:hover {
    ${TooltipText} {
      visibility: visible;
    }}
button {
background-color:var(--cinza-padrao);
display:flex;
align-items:center;
}
button:first-child {
  gap:5px;
}
`
const TituloCSS = styled.h1`
margin-bottom:16px;
display:flex;
gap:5px;
`

const Propostas = () => {

  const [valorDados,setvalorDados] = useState('') //STATE BARRA DE PESQUISA
  const [modalFiltro,setModalFiltro] = useState(false) // STATE MODAL DO FILTRO
  const [modalCadastrar, setModalCadastrar] = useState(false) // STATE MODAL CADASTRAR

  const toggleModalFiltro = () => {
    setModalFiltro(!modalFiltro)
  }

  const toggleModalCadastrar = () => {
    setModalCadastrar(!modalCadastrar)
  }

  return (
    <Container>
      <Titulo>Propostas</Titulo>
      <ContainerInputBotao>
          <BoxInputFiltro>
            <CampoTexto
              tipo="text"
              valor={valorDados}
              onChange={setvalorDados}
              placeholder="Pesquisar"
              />
            <Botao onClick={toggleModalFiltro}><IoFilterOutline fontSize={12}/>Filtro</Botao>
          </BoxInputFiltro>

        <ContainerBotoes>
            <Botao onClick={toggleModalCadastrar}><FaPlus fontSize={10} />Cadastrar</Botao>
            <Botao><TbFileExport fontSize={14} /><Tooltip><TooltipText>Exportar dados</TooltipText></Tooltip></Botao>
            <Botao><TbColumns3 fontSize={13}/><Tooltip><TooltipText>Editar colunas</TooltipText></Tooltip></Botao>
        </ContainerBotoes>
      </ContainerInputBotao>

      {modalFiltro &&
      <Modal alteraModal={toggleModalFiltro}>
        <TituloCSS>Filtro</TituloCSS>
      </Modal>
      }
      {modalCadastrar &&
      <Modal alteraModal={toggleModalCadastrar}>
        <Cadastrar/>
      </Modal>
      }

    </Container>
  )
}

export default Propostas
