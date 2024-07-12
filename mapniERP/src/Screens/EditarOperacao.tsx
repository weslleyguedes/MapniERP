import styled from "styled-components";
import Titulo from "../Components/Titulo";
import BotaoFechar from "../Components/BotaoFechar";
import CampoTexto from "../Components/CampoTexto";
import Botao from "../Components/Botao";
import { FormEvent, useState } from "react";

const Container = styled.form``;

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

interface Dados {
  nome: string;
  status: string;
}

interface Props {
  funcaoFechaModalEditarOperacao: () => void;
  operacoes: Dados[];
  setOperacoes: React.Dispatch<React.SetStateAction<Dados[]>>;
  operacaoIndex: number;
}

const EditarOperacao = ({
  funcaoFechaModalEditarOperacao,
  operacoes,
  setOperacoes,
  operacaoIndex,
}: Props) => {
  const [nomeOperacao, setNomeOperacao] = useState<string>(
    operacoes[operacaoIndex].nome
  );

  const aoSalvar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const operacaoAtualizada = [...operacoes];
    operacaoAtualizada[operacaoIndex] = {
      ...operacoes[operacaoIndex],
      nome: nomeOperacao,
    };
    setOperacoes(operacaoAtualizada);
    funcaoFechaModalEditarOperacao();
  };

  return (
    <>
      <BoxTituloBotao>
        <Titulo>Editar Operação</Titulo>
        <BotaoFechar onClick={() => funcaoFechaModalEditarOperacao()} />
      </BoxTituloBotao>
      <Container noValidate autoComplete="off" onSubmit={aoSalvar}>
        <InputCSS>
          <label>Nome</label>
          <CampoTexto
            tipo="text"
            valor={nomeOperacao}
            onChange={(e) => setNomeOperacao(e.target.value)}
            maxCaracteres={40}
          />
        </InputCSS>

        <BoxBotoes>
          <Botao onClick={() => aoSalvar}>Salvar</Botao>
          <Botao onClick={() => funcaoFechaModalEditarOperacao()}>
            Cancelar
          </Botao>
        </BoxBotoes>
      </Container>
    </>
  );
};

export default EditarOperacao;
