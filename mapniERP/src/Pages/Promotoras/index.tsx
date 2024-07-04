import styled from "styled-components";
import Titulo from "../../Components/Titulo";
import Botao from "../../Components/Botao";
import { useState } from "react";
import Modal from "../../Components/Modal";
import Tabela from "../../Components/Tabela";
import CampoTexto from "../../Components/CampoTexto";
import { GoPencil } from "react-icons/go";
import { TbReload } from "react-icons/tb";
import { RiProhibitedLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import CampoSelect from "../../Components/CampoSelect";
import BotaoFechar from "../../Components/BotaoFechar";
import Promotora from "../../Screens/Promotora";

const Container = styled.div`
  margin: 20px 200px;
`;
const ContainerTituloBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: var(--cinza-padrao);
    margin: 0;
  }
`;
const ContainerBotoes = styled.div`
  display: flex;
  gap: 10px;
  & button:last-child {
    display: flex;
    align-items: baseline;
    gap: 5px;
  }
`;
const BoxInputPesquisa = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  input {
    background-color: #8e8e8e1c;
    margin: 0;
    border: 1px solid var(--cinza-borda-input);
    width: 250px;
  }
  select {
    margin: 0;
    width: 150px;
  }
`;
const BoxIcones = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
const IconeLapis = styled(GoPencil)`
  font-size: 18px;
  cursor: pointer;
  padding: 5px;
  transition: 0.2s;
  color: var(--azul-icones);
  &:hover {
    background-color: #dadada88;
    border-radius: 50%;
    transform: scale(1.05);
  }
`;
const IconeArquivar = styled(RiProhibitedLine)`
  font-size: 18px;
  cursor: pointer;
  padding: 5px;
  transition: 0.2s;
  color: var(--vermelho-botao-cancelar);
  &:hover {
    background-color: #dadada88;
    border-radius: 50%;
    transform: scale(1.05);
  }
`;
const IconeReload = styled(TbReload)`
  transform: scale(1.15);
`;
const BoxTituloEFechaEditar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const FormEditar = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-top: 8px;
  }
`;
const BoxBotoesEditar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-top: 15px;
  button {
    background-color: var(--cinza-padrao);
  }
  & div:last-child button:hover {
    background-color: var(--vermelho-botao-cancelar);
    color: white;
  }
`;

interface Dados {
  nome: string;
  status: string;
}

const Promotoras = () => {
  const [abreModalPromotoras, setAbreModalPromotoras] = useState(false);
  const [promotoras, setPromotoras] = useState<Dados[]>([]);
  const [promotoraSearch, setPromotoraSearch] = useState("");
  const [statusPromotora, setStatusPromotora] = useState("");
  const [editarPromotora, setEditarPromotora] = useState(false);

  const [provisorio, setProvisorio] = useState("");

  const FechaModalPromotora = () => {
    setAbreModalPromotoras(false);
  };

  const adicionarNovaPromotora = (nome: string) => {
    const novaPromotora: Dados = {
      nome: nome,
      status: "Ativo",
    };
    setPromotoras([...promotoras, novaPromotora]);
  };

  const arquivarPromotora = (index: number) => {
    const novasPromotoras = [...promotoras];
    novasPromotoras.splice(index, 1);
    setPromotoras(novasPromotoras);
  };

  const headers: (string | JSX.Element)[] = ["Nome", "Status", "Ações"];
  const rows: (string | JSX.Element)[][] = promotoras.map(
    (promotora, index: number) => [
      promotora.nome,
      promotora.status,
      <BoxIcones key={index}>
        <IconeLapis onClick={() => setEditarPromotora(true)} />
        <IconeArquivar onClick={() => arquivarPromotora(index)} />
      </BoxIcones>,
    ]
  );

  return (
    <Container>
      <ContainerTituloBotoes>
        <Titulo>Promotoras</Titulo>
        <ContainerBotoes>
          <Botao>
            <IconeReload />
          </Botao>
          <Botao onClick={() => setAbreModalPromotoras(!abreModalPromotoras)}>
            <FaPlus fontSize={12} />
            Novo
          </Botao>
        </ContainerBotoes>
        {abreModalPromotoras && (
          <Modal
            width="400px"
            overlay={() => setAbreModalPromotoras(!abreModalPromotoras)}
          >
            <Promotora
              FechaModalPromotora={FechaModalPromotora}
              adicionarNovaPromotora={adicionarNovaPromotora}
            />
          </Modal>
        )}
      </ContainerTituloBotoes>

      <BoxInputPesquisa>
        <div>
          <CampoTexto
            tipo="text"
            valor={promotoraSearch}
            onChange={(e) => setPromotoraSearch(e.target.value)}
            placeholder="Pesquisar Promotora"
          />
        </div>
        <div>
          <CampoSelect
            valor={statusPromotora}
            aoSelecionar={(e) => setStatusPromotora(e.target.value)}
          >
            <option value="ativos">Ativas</option>
            <option value="arquivados">Arquivadas</option>
            <option value="todos">Todas</option>
          </CampoSelect>
        </div>
      </BoxInputPesquisa>

      <div>
        <Tabela headers={headers} rows={rows} margin="20px 0" />
      </div>

      {editarPromotora && (
        <Modal overlay={() => setEditarPromotora(false)} width="400px">
          <BoxTituloEFechaEditar>
            <Titulo>Editar Promotora</Titulo>
            <BotaoFechar onClick={() => setEditarPromotora(false)} />
          </BoxTituloEFechaEditar>

          <FormEditar>
            <div>
              <label>Nome</label>
              <CampoTexto
                tipo="text"
                valor={provisorio}
                onChange={(e) => setProvisorio(e.target.value)}
              />
            </div>

            <BoxBotoesEditar>
              <div>
                <Botao>Salvar</Botao>
              </div>
              <div>
                <Botao onClick={() => setEditarPromotora(false)}>
                  Cancelar
                </Botao>
              </div>
            </BoxBotoesEditar>
          </FormEditar>
        </Modal>
      )}
    </Container>
  );
};

export default Promotoras;
