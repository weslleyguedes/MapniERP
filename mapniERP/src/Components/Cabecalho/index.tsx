import styled from "styled-components"
import LogoMapni from "../../imagens/logoMapni.png"
import { IoIosArrowDown } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";


const Container = styled.div`
height:70px;
padding:0 30px;
background-color:var(--preto-padrao);
display:flex;
justify-content:center;
align-items:center;
color:#FFFFFF;
font-family:"poppins";
img {
  width:40px;
  height:50px;
}
`
const ListaDeOpcoes = styled.ul`
display:flex;
font-size:15px;
gap:20px;
align-items:center;
margin:0 40px;
*:hover {
  cursor:pointer;
  font-weight:bold;
}

li {
  display:flex;
  align-items:center;
  gap:3px;
  transition:150ms;
  height:60px;
}
`
const BotaoSair = styled.div`
*:hover{
cursor:pointer;
color:#FFFFFF;
transition:300ms;
font-weight:bold;
transform:scale(1.08);

}
`

const Cabecalho = () => {
  return (
    <Container>

        <img src={LogoMapni} alt="logo mapni" />

        <ListaDeOpcoes>
          <li>Dashboard</li>
          <li>Propostas</li>
          <li>Analytics <IoIosArrowDown color="#FBC105" /></li>
          <li>Administrativo <IoIosArrowDown color="#FBC105" /></li>
          <li>Financeiro <IoIosArrowDown color="#FBC105" /></li>
        </ListaDeOpcoes>


      <BotaoSair>
        <IoExitOutline fontSize="25" title="Sair" color="#dedcdc"/>
      </BotaoSair>


    </Container>
  )
}

export default Cabecalho
