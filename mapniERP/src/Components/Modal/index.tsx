import styled from "styled-components"
import { IoMdClose } from "react-icons/io";
import Botao from "../Botao";

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 35px;
  border-radius: 8px;
  z-index: 2;
  width:900px;
  max-height:550px;
  overflow-y:auto;
  button {
    background-color:transparent;
    color:black;
    padding:4px 6px !important;
    position:absolute;
    top:15px;
    right:16px;
    margin-right:20px;
    z-index:1;
  }
  button:hover {
    background-color:var(--vermelho-erro);
    color:white;
  }
`
const Overlay = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  z-index:1;
  background-color:#00000086;
`
interface Props {
  children:React.ReactNode;
  open?:boolean;
  alteraModal:() => void;
}

const Modal = ({children, alteraModal}:Props) => {

  return (
    <>
      <Overlay onClick={alteraModal}/>
      <Container>
          <Botao onClick={alteraModal}><IoMdClose fontSize={15}/></Botao>
          {children}
      </Container>
    </>

    )
  }


export default Modal
