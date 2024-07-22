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
  & div > span {
    display: block;
    margin-bottom: 5px;
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
  FechaModalBancos: () => void;
  adicionarNovoBanco: (nome: string, codigo: string) => void;
}

const Banco = ({ FechaModalBancos, adicionarNovoBanco }: Props) => {
  const [nomeBanco, setNomeBanco] = useState<string>("");
  const [codigoBanco, setCodigoBanco] = useState<string>("");
  const [bancoEmpty, setBancoEmpty] = useState(false);

  const aoSalvar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nomeBanco.trim() === "") {
      setBancoEmpty(true);
      return;
    }

    adicionarNovoBanco(nomeBanco, codigoBanco);
    FechaModalBancos(); // fecha a modal
  };

  const onChangeBanco = (e: ChangeEvent<HTMLInputElement>) => {
    setNomeBanco(e.target.value);
    if (nomeBanco === "") {
      setBancoEmpty(false);
    }
  };

  return (
    <>
      <TituloBotao>
        <h1>Adicionar Banco</h1>
        <BotaoFechar onClick={() => FechaModalBancos()} />
      </TituloBotao>

      <ContainerForm noValidate autoComplete="off" onSubmit={aoSalvar}>
        <InputCSS>
          <div>
            <label>Nome</label>
            <CampoTexto
              tipo="text"
              valor={nomeBanco}
              onChange={onChangeBanco}
              maxCaracteres={35}
            />
            <span>{bancoEmpty && <MsgErro>Campo Obrigatório</MsgErro>}</span>
          </div>
          <div>
            <label>Código</label>
            <CampoTexto
              tipo="text"
              valor={codigoBanco}
              onChange={(e) => setCodigoBanco(e.target.value)}
              maxCaracteres={35}
            />
          </div>
        </InputCSS>

        <ContainerBotoes>
          <Botao onClick={() => aoSalvar}>Salvar</Botao>
          <Botao onClick={() => FechaModalBancos()}>Cancelar</Botao>
        </ContainerBotoes>
      </ContainerForm>
    </>
  );
};

export default Banco;
