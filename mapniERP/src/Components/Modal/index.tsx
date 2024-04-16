import styled from "styled-components"

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
          {children}
      </Container>
    </>

    )
  }


export default Modal
