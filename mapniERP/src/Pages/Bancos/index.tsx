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
import Banco from "../../Screens/Banco";

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
const FormEditarBanco = styled.div`
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
  codigo: string;
  status: string;
}

const Bancos = () => {
  const [abreModalBancos, setAbreModalBancos] = useState(false);
  const [bancos, setBancos] = useState<Dados[]>([]);
  const [bancoSearch, setBancoSearch] = useState("");
  const [statusBanco, setStatusBanco] = useState("");
  const [editarBanco, setEditarBanco] = useState(false);
  const [codigoBanco, setCodigoBanco] = useState("");

  const [provisorio, setProvisorio] = useState("");

  const FechaModalBancos = () => {
    setAbreModalBancos(false);
  };

  const adicionarNovoBanco = (nome: string, codigo: string) => {
    const novoBanco: Dados = {
      nome: nome,
      codigo: codigo,
      status: "Ativo",
    };
    setBancos([...bancos, novoBanco]);
  };

  const arquivarBanco = (index: number) => {
    const novosBancos = [...bancos];
    novosBancos.splice(index, 1);
    setBancos(novosBancos);
  };

  const headers: (string | JSX.Element)[] = [
    "Nome",
    "Código",
    "Status",
    "Ações",
  ];
  const rows: (string | JSX.Element)[][] = bancos.map(
    (banco, index: number) => [
      banco.nome,
      banco.codigo,
      banco.status,
      <BoxIcones key={index}>
        <IconeLapis onClick={() => setEditarBanco(true)} />
        <IconeArquivar onClick={() => arquivarBanco(index)} />
      </BoxIcones>,
    ]
  );

  return (
    <Container>
      <ContainerTituloBotoes>
        <Titulo>Bancos</Titulo>
        <ContainerBotoes>
          <Botao>
            <IconeReload />
          </Botao>
          <Botao onClick={() => setAbreModalBancos(!abreModalBancos)}>
            <FaPlus fontSize={12} />
            Novo
          </Botao>
        </ContainerBotoes>
        {abreModalBancos && (
          <Modal
            width="400px"
            overlay={() => setAbreModalBancos(!abreModalBancos)}
          >
            <Banco
              FechaModalBancos={FechaModalBancos}
              adicionarNovoBanco={adicionarNovoBanco}
            />
          </Modal>
        )}
      </ContainerTituloBotoes>

      <BoxInputPesquisa>
        <div>
          <CampoTexto
            tipo="text"
            valor={bancoSearch}
            onChange={(e) => setBancoSearch(e.target.value)}
            placeholder="Pesquisar Banco"
          />
        </div>
        <div>
          <CampoSelect
            valor={statusBanco}
            aoSelecionar={(e) => setStatusBanco(e.target.value)}
          >
            <option value="ativos">Ativos</option>
            <option value="arquivados">Arquivados</option>
            <option value="todos">Todos</option>
          </CampoSelect>
        </div>
      </BoxInputPesquisa>

      <div>
        <Tabela headers={headers} rows={rows} margin="20px 0" />
      </div>

      {editarBanco && (
        <Modal overlay={() => setEditarBanco(false)} width="400px">
          <BoxTituloEFechaEditar>
            <Titulo>Editar</Titulo>
            <BotaoFechar onClick={() => setEditarBanco(false)} />
          </BoxTituloEFechaEditar>

          <FormEditarBanco>
            <div>
              <label>Nome</label>
              <CampoTexto
                tipo="text"
                valor={provisorio}
                onChange={(e) => setProvisorio(e.target.value)}
              />
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

            <BoxBotoesEditarDepart>
              <div>
                <Botao>Salvar</Botao>
              </div>
              <div>
                <Botao onClick={() => setEditarBanco(false)}>Cancelar</Botao>
              </div>
            </BoxBotoesEditarDepart>
          </FormEditarBanco>
        </Modal>
      )}
    </Container>
  );
};

export default Bancos;
