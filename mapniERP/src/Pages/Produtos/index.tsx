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
import Produto from "../../Screens/Produto";

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

const Produtos = () => {
  const [abreModalProdutos, setAbreModalProdutos] = useState(false);
  const [produtos, setProdutos] = useState<Dados[]>([]);
  const [produtoSearch, setprodutoSearch] = useState("");
  const [statusProduto, setStatusProduto] = useState("");
  const [editarProduto, setEditarProduto] = useState(false);

  const [provisorio, setProvisorio] = useState("");

  const FechaModalProdutos = () => {
    setAbreModalProdutos(false);
  };

  const adicionarNovoProduto = (nome: string) => {
    const novoProduto: Dados = {
      nome: nome,
      status: "Ativo",
    };
    setProdutos([...produtos, novoProduto]);
  };

  const arquivarProduto = (index: number) => {
    const novosProduto = [...produtos];
    novosProduto.splice(index, 1);
    setProdutos(novosProduto);
  };

  const headers: (string | JSX.Element)[] = ["Nome", "Status", "Ações"];
  const rows: (string | JSX.Element)[][] = produtos.map(
    (produto, index: number) => [
      produto.nome,
      produto.status,
      <BoxIcones key={index}>
        <IconeLapis onClick={() => setEditarProduto(true)} />
        <IconeArquivar onClick={() => arquivarProduto(index)} />
      </BoxIcones>,
    ]
  );

  return (
    <Container>
      <ContainerTituloBotoes>
        <Titulo>Produtos</Titulo>
        <ContainerBotoes>
          <Botao>
            <IconeReload />
          </Botao>
          <Botao onClick={() => setAbreModalProdutos(!abreModalProdutos)}>
            <FaPlus fontSize={12} />
            Novo
          </Botao>
        </ContainerBotoes>
        {abreModalProdutos && (
          <Modal
            width="400px"
            overlay={() => setAbreModalProdutos(!abreModalProdutos)}
          >
            <Produto
              FechaModalProdutos={FechaModalProdutos}
              adicionarNovoProduto={adicionarNovoProduto}
            />
          </Modal>
        )}
      </ContainerTituloBotoes>

      <BoxInputPesquisa>
        <div>
          <CampoTexto
            tipo="text"
            valor={produtoSearch}
            onChange={(e) => setprodutoSearch(e.target.value)}
            placeholder="Pesquisar Produto"
          />
        </div>
        <div>
          <CampoSelect
            valor={statusProduto}
            aoSelecionar={(e) => setStatusProduto(e.target.value)}
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

      {editarProduto && (
        <Modal overlay={() => setEditarProduto(false)} width="400px">
          <BoxTituloEFechaEditar>
            <Titulo>Editar Produto</Titulo>
            <BotaoFechar onClick={() => setEditarProduto(false)} />
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
                <Botao onClick={() => setEditarProduto(false)}>Cancelar</Botao>
              </div>
            </BoxBotoesEditar>
          </FormEditar>
        </Modal>
      )}
    </Container>
  );
};

export default Produtos;
