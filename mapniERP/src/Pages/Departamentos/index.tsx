import styled from "styled-components";
import Titulo from "../../Components/Titulo";
import Botao from "../../Components/Botao";
import { useState } from "react";
import Modal from "../../Components/Modal";
import Departamento from "../../Screens/Departamento";
import Tabela from "../../Components/Tabela";
import CampoTexto from "../../Components/CampoTexto";
import { GoPencil } from "react-icons/go";
import { TbReload } from "react-icons/tb";
import { RiProhibitedLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import CampoSelect from "../../Components/CampoSelect";
import BotaoFechar from "../../Components/BotaoFechar";

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
const FormEditarDepartamento = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-top: 8px;
  }
`;
const BoxBotoesEditarDepart = styled.div`
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
  acoes: JSX.Element;
}

const Departamentos = () => {
  const [abreModalDepart, setAbreModalDepart] = useState(false);
  const [departamentos, setDepartamentos] = useState<Dados[]>([]);
  const [departSearch, setDepartSearch] = useState("");
  const [statusDepartamento, setStatusDepartamento] = useState("");
  const [editarDepartamento, setEditarDepartamento] = useState(false);

  const [provisorio, setProvisorio] = useState("");

  const funcaoFechaModalDepart = () => {
    setAbreModalDepart(false);
  };

  const adicionarNovoDepartamento = (nome: string) => {
    const novoDepartamento: Dados = {
      nome: nome,
      status: "Ativo",
      acoes: <span>{icones}</span>,
    };
    setDepartamentos([...departamentos, novoDepartamento]);
  };

  const icones = departamentos.map((_, index) => (
    <BoxIcones key={index}>
      <IconeLapis onClick={() => setEditarDepartamento(true)} />
      <IconeArquivar onClick={() => arquivarDepartamento(index)} />
    </BoxIcones>
  ));

  const arquivarDepartamento = (index: number) => {
    const novosDepartamentos = [...departamentos];
    novosDepartamentos.splice(index, 1);
    setDepartamentos(novosDepartamentos);
  };

  const headers: (string | JSX.Element)[] = ["Nome", "Status", "Ações"];
  const rows: (string | JSX.Element)[][] = departamentos.map(
    (departamento, index: number) => [
      departamento.nome,
      departamento.status,
      <div key={index}>{icones[index]}</div>,
    ]
  );

  return (
    <Container>
      <ContainerTituloBotoes>
        <Titulo>Departamentos</Titulo>
        <ContainerBotoes>
          <Botao>
            <IconeReload />
          </Botao>
          <Botao onClick={() => setAbreModalDepart(!abreModalDepart)}>
            <FaPlus fontSize={12} />
            Novo Departamento
          </Botao>
        </ContainerBotoes>
        {abreModalDepart && (
          <Modal
            width="400px"
            overlay={() => setAbreModalDepart(!abreModalDepart)}
          >
            {" "}
            <Departamento
              fechalModalDepart={funcaoFechaModalDepart}
              adicionarNovoDepartamento={adicionarNovoDepartamento}
            />
          </Modal>
        )}
      </ContainerTituloBotoes>

      <BoxInputPesquisa>
        <div>
          <CampoTexto
            tipo="text"
            valor={departSearch}
            onChange={(e) => setDepartSearch(e.target.value)}
            placeholder="Pesquisar Departamento"
          />
        </div>
        <div>
          <CampoSelect
            valor={statusDepartamento}
            aoSelecionar={(e) => setStatusDepartamento(e.target.value)}
          >
            <option value="ativos">Ativos</option>
            <option value="arquivados">Arquivados</option>
            <option value="todos">Todos</option>
          </CampoSelect>
        </div>
      </BoxInputPesquisa>

      <div>
        <Tabela headers={headers} rows={rows} />
      </div>

      {editarDepartamento && (
        <Modal overlay={() => setEditarDepartamento(false)} width="400px">
          <BoxTituloEFechaEditar>
            <Titulo>Editar Departamento</Titulo>
            <BotaoFechar onClick={() => setEditarDepartamento(false)} />
          </BoxTituloEFechaEditar>

          <FormEditarDepartamento>
            <div>
              <label>Nome</label>
              <CampoTexto
                tipo="text"
                valor={provisorio}
                onChange={(e) => setProvisorio(e.target.value)}
              />
            </div>

            <BoxBotoesEditarDepart>
              <div>
                <Botao>Salvar</Botao>
              </div>
              <div>
                <Botao onClick={() => setEditarDepartamento(false)}>
                  Cancelar
                </Botao>
              </div>
            </BoxBotoesEditarDepart>
          </FormEditarDepartamento>
        </Modal>
      )}
    </Container>
  );
};

export default Departamentos;
