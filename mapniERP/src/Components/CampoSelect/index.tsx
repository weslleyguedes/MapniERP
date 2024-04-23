import { ChangeEvent } from "react";
import styled from "styled-components"

const Container = styled.div`
select {
  width:100%;
  border-radius:4px;
  border:none;
  padding:9.5px;
  margin:15px 0 5px 0;
}
`
interface Props {
  children:React.ReactNode;
  valor:string;
  aoSelecionar:(e:ChangeEvent<HTMLSelectElement>) => void;
}

const CampoSelect = ({children,valor,aoSelecionar} : Props) => {
  return (
    <Container>
      <select value={valor} onChange={aoSelecionar}>
        {children}
      </select>
    </Container>
  )
}

export default CampoSelect
