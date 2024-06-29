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
  funcaoFechaModalEditarCargos: () => void;
  cargos: Dados[];
  setCargos: React.Dispatch<React.SetStateAction<Dados[]>>;
  cargoIndex: number;
}

const EditarCargo = ({
  funcaoFechaModalEditarCargos,
  cargos,
  setCargos,
  cargoIndex,
}: Props) => {
  const [nomeCargo, setNomeCargo] = useState<string>(cargos[cargoIndex].nome);

  const aoSalvar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cargosAtualizados = [...cargos];
    cargosAtualizados[cargoIndex] = { ...cargos[cargoIndex], nome: nomeCargo };
    setCargos(cargosAtualizados);
    funcaoFechaModalEditarCargos();
  };

  return (
    <>
      <BoxTituloBotao>
        <Titulo>Editar Cargo</Titulo>
        <BotaoFechar onClick={() => funcaoFechaModalEditarCargos()} />
      </BoxTituloBotao>
      <Container noValidate autoComplete="off" onSubmit={aoSalvar}>
        <InputCSS>
          <label>Nome</label>
          <CampoTexto
            tipo="text"
            valor={nomeCargo}
            onChange={(e) => setNomeCargo(e.target.value)}
          />
        </InputCSS>

        <BoxBotoes>
          <Botao onClick={() => aoSalvar}>Salvar</Botao>
          <Botao onClick={() => funcaoFechaModalEditarCargos()}>Cancelar</Botao>
        </BoxBotoes>
      </Container>
    </>
  );
};

export default EditarCargo;
