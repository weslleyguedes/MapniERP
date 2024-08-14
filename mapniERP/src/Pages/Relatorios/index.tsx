import styled from "styled-components";
import Botao from "../../Components/Botao";
import CampoTexto from "../../Components/CampoTexto";
import { useState } from "react";

const Container = styled.div`
  display: flex;

  margin-left: 0.8%;
`;

const BlocoEsquerdo = styled.div`
  width: 85%;
  border: 1px solid red;
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
  display: flex;
  flex-direction: column;
  button {
    margin-top: 10px;
  }
`;
const SideBar = styled.div`
  padding: 15px;
  border-top-left-radius: 10px;
  box-sizing: border-box;
  background-color: var(--preto-padrao);
  color: white;
  margin-top: 10px;
  border: 1px solid red;
`;

const Relatorios = () => {
  const [buscaRelatorio, setBuscaRelatorio] = useState("");

  return (
    <>
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
        <BlocoDireito>
          <div>
            <Botao>INCLUIR</Botao>
          </div>
          <SideBar>
            <span>teste</span>
          </SideBar>
        </BlocoDireito>
      </Container>
    </>
  );
};

export default Relatorios;
