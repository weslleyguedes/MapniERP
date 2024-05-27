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
    margin:0;
  }
`;
const MsgErro = styled.span`
  color: var(--vermelho-erro);
`;
interface Props {
  fechalModalDepart: () => void;
  adicionarNovoDepartamento: (nome: string) => void;
}

const Departamento = ({
  fechalModalDepart,
  adicionarNovoDepartamento,
}: Props) => {
  const [nomeDepartamento, setNomeDepartamento] = useState("");
  const [msgErro, setMsgErro] = useState(false);

  const aoSalvar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nomeDepartamento.trim() === "") {
      setMsgErro(true);
      return;
    }
    adicionarNovoDepartamento(nomeDepartamento);
    fechalModalDepart(); // fecha a modal
  };

  const aoAlterar = (e: ChangeEvent<HTMLInputElement>) => {
    setNomeDepartamento(e.target.value);
    if (nomeDepartamento === "") {
      setMsgErro(false);
    }
  };

  return (
    <>
      <TituloBotao>
        <h1>Criar Departamento</h1>
        <BotaoFechar onClick={() => fechalModalDepart && fechalModalDepart()} />
      </TituloBotao>

      <ContainerForm noValidate autoComplete="off" onSubmit={aoSalvar}>
        <InputCSS>
          <label>Nome</label>
          <CampoTexto
            tipo="text"
            valor={nomeDepartamento}
            onChange={aoAlterar}
            maxCaracteres={35}
          />
          {msgErro && <MsgErro>Campo Obrigatório</MsgErro>}
        </InputCSS>

        <ContainerBotoes>
          <Botao onClick={() => aoSalvar}>Salvar</Botao>
          <Botao onClick={() => fechalModalDepart && fechalModalDepart()}>
            Cancelar
          </Botao>
        </ContainerBotoes>
      </ContainerForm>
    </>
  );
};

export default Departamento;
