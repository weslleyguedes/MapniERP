import styled from "styled-components"

const Container = styled.div<Props>`
  position: fixed;
  top:${(props) => props.top || "50%"};
  left: ${(props) => props.left || "50%"};
  transform: translate(-50%, -50%);
  background-color: #F9FAFB;
  padding: ${(props) => props.padding || "40px"};
  border:1px solid ${(props) => props.borda || "none"};
  border-radius: 8px;
  z-index: 2;
  width:${(props) => props.width || "800px"};
  height:${(props) => props.height || ''};
  max-height:550px;
  overflow-y:auto;
  text-align:${(props) => props.textalign || 'left'};
`
const Overlay = styled.div<Props>`
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  z-index:1;
  background-color:${(props) => props.overlaycolor ||"#00000043"};
`
interface Props {
  children?:React.ReactNode;
  overlay?:() => void;
  borda?:string;
  width?:string;
  overlaycolor?:string;
  top?: string;
  left?:string;
  padding?:string;
  textalign?:string;
  height?:string;
}

const Modal = ({children, overlay,width,overlaycolor,borda,top,left,padding,textalign,height}:Props) => {

  return (
    <>
      <Overlay onClick={overlay} overlaycolor={overlaycolor}/>
      <Container width={width} borda={borda} top={top} left={left} padding={padding} textalign={textalign} height={height}>
        {children}
      </Container>
    </>

    )
  }


export default Modal
