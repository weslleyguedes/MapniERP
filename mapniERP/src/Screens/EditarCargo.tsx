import styled from "styled-components";
import Titulo from "../Components/Titulo";
import BotaoFechar from "../Components/BotaoFechar";
import CampoTexto from "../Components/CampoTexto";
import Botao from "../Components/Botao";

const Container = styled.div``;

const BoxTituloBotao = styled.div`
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputCSS = styled.div`
  input {
    margin-top: 8px;
  }
`;

const BoxBotoes = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  button {
    background-color: var(--cinza-padrao);
    margin: 0;
  }
  & button:last-child:hover {
    background-color: var(--vermelho-botao-cancelar);
    color: white;
  }
`;

interface Props {
  funcaoFechaModalEditarCargos: () => void;
}

const EditarCargo = ({ funcaoFechaModalEditarCargos }: Props) => {
  return (
    <Container>
      <BoxTituloBotao>
        <Titulo>Editar Cargo</Titulo>
        <BotaoFechar onClick={() => funcaoFechaModalEditarCargos()} />
      </BoxTituloBotao>

      <InputCSS>
        <label>Nome</label>
        <CampoTexto tipo="text" />
      </InputCSS>

      <BoxBotoes>
        <Botao>Salvar</Botao>
        <Botao onClick={() => funcaoFechaModalEditarCargos()}>Cancelar</Botao>
      </BoxBotoes>
    </Container>
  );
};

export default EditarCargo;
