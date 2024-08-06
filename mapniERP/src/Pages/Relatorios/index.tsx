import styled from "styled-components";
import Botao from "../../Components/Botao";
import CampoTexto from "../../Components/CampoTexto";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
`;

const BlocoEsquerdo = styled.div`
  margin-top: 10px;
  button,
  input {
    margin: 0;
  }
`;
const Cabecalho = styled.div`
  display: flex;
`;

const BlocoDireito = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  border-top-left-radius: 10px;
  box-sizing: border-box;
  background-color: var(--preto-padrao);
  color: white;
  width: 210px;
  height: calc(-80px + 100vh);
  margin-top: 10px;
  border: 1px solid red;
`;

const Relatorios = () => {
  const [buscaRelatorio, setBuscaRelatorio] = useState("");

  return (
    <Container>
      <BlocoEsquerdo>
        <Cabecalho>
          <Botao>FILTRO</Botao>
          <CampoTexto
            tipo="text"
            valor={buscaRelatorio}
            onChange={(e) => setBuscaRelatorio(e.target.value)}
          />
          <Botao>CALENDARIO</Botao>
        </Cabecalho>
      </BlocoEsquerdo>
      <BlocoDireito>teste</BlocoDireito>
    </Container>
  );
};

export default Relatorios;
