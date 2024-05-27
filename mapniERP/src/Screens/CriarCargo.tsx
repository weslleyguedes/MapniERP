import styled from "styled-components";
import Titulo from "../Components/Titulo";
import BotaoFechar from "../Components/BotaoFechar";
import CampoTexto from "../Components/CampoTexto";
import { FormEvent, useState } from "react";
import Botao from "../Components/Botao";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const BoxTituloBotaoFechar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const BoxForm = styled.form`
  input {
    margin-top: 8px;
  }
`;
const BoxBotoes = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  button {
    margin: 0;
    background-color: var(--cinza-padrao);
  }
  & button:last-child:hover {
    background-color: var(--vermelho-botao-cancelar);
    color: white;
  }
`;
const MsgErro = styled.span`
  color: var(--vermelho-erro);
`;
interface Props {
  funcaoFechaModalCargo: () => void;
  adicionarNovoCargo: (nome: string) => void;
}

const Cargo = ({ funcaoFechaModalCargo, adicionarNovoCargo }: Props) => {
  const [nomeCargo, setNomeCargo] = useState("");
  const [msgErro, setMsgErro] = useState(false);

  const aoSalvar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nomeCargo.trim() === "") {
      setMsgErro(true);
      return;
    }
    adicionarNovoCargo(nomeCargo);
    funcaoFechaModalCargo();
  };

  return (
    <Container>
      <BoxTituloBotaoFechar>
        <Titulo>Criar Cargo</Titulo>
        <BotaoFechar onClick={funcaoFechaModalCargo} />
      </BoxTituloBotaoFechar>

      <BoxForm noValidate autoComplete="off" onSubmit={aoSalvar}>
        <div>
          <label>Nome</label>
          <CampoTexto
            tipo="text"
            valor={nomeCargo}
            onChange={(e) => setNomeCargo(e.target.value)}
            maxCaracteres={30}
          />
        </div>
        {msgErro && <MsgErro>Campo Obrigatório</MsgErro>}
        <BoxBotoes>
          <Botao onClick={() => aoSalvar}>Salvar</Botao>
          <Botao onClick={funcaoFechaModalCargo}>Cancelar</Botao>
        </BoxBotoes>
      </BoxForm>
    </Container>
  );
};

export default Cargo;
