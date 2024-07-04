import BotaoFechar from "../Components/BotaoFechar";
import styled from "styled-components";
import CampoTexto from "../Components/CampoTexto";
import { ChangeEvent, FormEvent, useState } from "react";
import Botao from "../Components/Botao";

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const TituloBotao = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const InputCSS = styled.div`
  margin-bottom: 25px;
  input {
    margin-top: 8px;
    border: 1px solid var(--cinza-borda-input);
    &:hover {
      border: 1px solid var(--preto-padrao);
    }
    &:focus {
      border: 1px solid var(--preto-padrao);
    }
  }
`;
const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  & > button:last-child:hover {
    color: white;
    background-color: var(--vermelho-botao-cancelar);
  }
  button {
    margin: 0;
  }
`;
const MsgErro = styled.span`
  color: var(--vermelho-erro);
`;
interface Props {
  FechaModalPromotora: () => void;
  adicionarNovaPromotora: (nome: string) => void;
}

const Promotora = ({ FechaModalPromotora, adicionarNovaPromotora }: Props) => {
  const [nomePromotora, setNomePromotora] = useState("");
  const [msgErro, setMsgErro] = useState(false);

  const aoSalvar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nomePromotora.trim() === "") {
      setMsgErro(true);
      return;
    }
    adicionarNovaPromotora(nomePromotora);
    FechaModalPromotora(); // fecha a modal
  };

  const aoAlterar = (e: ChangeEvent<HTMLInputElement>) => {
    setNomePromotora(e.target.value);
    if (nomePromotora === "") {
      setMsgErro(false);
    }
  };

  return (
    <>
      <TituloBotao>
        <h1>Adicionar Promotora</h1>
        <BotaoFechar onClick={() => FechaModalPromotora()} />
      </TituloBotao>

      <ContainerForm noValidate autoComplete="off" onSubmit={aoSalvar}>
        <InputCSS>
          <label>Nome</label>
          <CampoTexto
            tipo="text"
            valor={nomePromotora}
            onChange={aoAlterar}
            maxCaracteres={35}
          />
          {msgErro && <MsgErro>Campo Obrigatório</MsgErro>}
        </InputCSS>

        <ContainerBotoes>
          <Botao onClick={() => aoSalvar}>Salvar</Botao>
          <Botao onClick={() => FechaModalPromotora()}>Cancelar</Botao>
        </ContainerBotoes>
      </ContainerForm>
    </>
  );
};

export default Promotora;
