import styled from "styled-components"

const Button = styled.button`
background-color:#ba9009;
border-radius:5px;
border:none;
color:#000000;
font-family:"inter";
font-weight:bold;
padding:10px 15px;
margin-top:15px;
transition:.2s;
&:hover {
  cursor:pointer;
  background-color:#FBC105;
}
`
interface Props {
  children:React.ReactNode,
  tipo?:string;
  title?:string;
  class?:string;
  onClick?:() => void;
}

const Botao = ({children,onClick} : Props) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  )
}

export default Botao
