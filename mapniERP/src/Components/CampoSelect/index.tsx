import { ChangeEvent } from "react";
import styled from "styled-components";

const Container = styled.div`
  select {
    width: 100%;
    border-radius: 4px;
    border: none;
    padding: 9.5px;
    margin: 15px 0 5px 0;
    border: 1px solid var(--cinza-borda-input);
    &:hover {
      border: 1px solid var(--preto-padrao);
    }
    &:focus {
      border: 1px solid var(--preto-padrao);
    }
  }
  label {
  color:red;
}
`;
interface Props {
  children?: React.ReactNode;
  valor?: string;
  aoSelecionar?: (e: ChangeEvent<HTMLSelectElement>) => void;
  label?:string;
}

const CampoSelect = ({ children, valor, aoSelecionar,label}: Props) => {
  return (
    <Container>
      <label>{label}</label>
      <select value={valor} onChange={aoSelecionar}>
        {children}
      </select>
    </Container>
  );
};

export default CampoSelect;
