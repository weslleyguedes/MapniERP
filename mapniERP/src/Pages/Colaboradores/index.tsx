import styled from "styled-components";
import Botao from "../../Components/Botao";
import { FaPlus } from "react-icons/fa6";
import CampoTexto from "../../Components/CampoTexto";
import CampoSelect from "../../Components/CampoSelect";
import Tabela from "../../Components/Tabela";
import { useState } from "react";
import Modal from "../../Components/Modal";
import CriarColab from "../../Screens/CriarColab";
import { RiProhibitedLine } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import { GrUpdate } from "react-icons/gr";

const Container = styled.div`
  margin: 20px 200px;
`;

const TituloBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div {
    display: flex;
    gap: 10px;
  }
  & div button {
    margin: 0;
    background-color: var(--cinza-padrao);
  }
  & div button:nth-child(2) {
    display: flex;
    gap: 5px;
  }
`;
const BoxInput = styled.div`
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
const IconeEngrenagem = styled(GoGear)`
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
const IconeUpdate = styled(GrUpdate)`
  transform: scale(0.95);
`;

interface Colabs {
  nome: string;
  cpf: string;
  login: string;
  cargo: string;
  departamento: string;
  cidade: string;
  acoes: JSX.Element;
}

const Colaboradores = () => {
  const [showModalColab, setShowModalColab] = useState<boolean>(false);
  const [colaboradores, setColaboradores] = useState<Colabs[]>([]);

  const funcaoFechaModalCriarColab = () => {
    setShowModalColab(false);
  };

  const arquivarColaborador = (index: number) => {
    const novoColab = [...colaboradores];
    novoColab.splice(index, 1); // remove um unico item do indice em questao
    setColaboradores(novoColab);
    // wdqwdqwdqwdqwdqwdqwdqwdqwdwq teste
  };

  const acoes = colaboradores.map((_, index) => (
    <BoxIcones key={index}>
      <IconeArquivar onClick={() => arquivarColaborador(index)} />
      <IconeEngrenagem />
    </BoxIcones>
  ));

  const criarColaborador = (
    nomeColaborador: string,
    cpfColaborador: string,
    loginColab: string,
    cargoColab: string,
    departamentoColab: string,
    colabCidade: string
  ) => {
    const novoColaborador: Colabs = {
      nome: nomeColaborador,
      cpf: cpfColaborador,
      login: loginColab,
      cargo: cargoColab,
      departamento: departamentoColab,
      cidade: colabCidade,
      acoes: <span>{acoes}</span>,
    };
    setColaboradores([...colaboradores, novoColaborador]);
  };

  const headers: string[] = [
    "Nome",
    "CPF",
    "Login",
    "Cargo",
    "Departamento",
    "Cidade",
    "Ações",
  ];
  const rows: (string | JSX.Element)[][] = colaboradores.map(
    (colaborador, index: number) => [
      colaborador.nome,
      colaborador.cpf,
      colaborador.login,
      colaborador.cargo,
      colaborador.departamento,
      colaborador.cidade,
      <div key={index}>{acoes[index]}</div>,
    ]
  );

  return (
    <Container>
      <TituloBotoes>
        <h1>Colaboradores</h1>
        <div>
          <Botao>
            <IconeUpdate />
          </Botao>
          <Botao onClick={() => setShowModalColab(true)}>
            <FaPlus />
            Novo
          </Botao>
        </div>
      </TituloBotoes>
      {showModalColab && (
        <Modal overlay={() => setShowModalColab(false)}>
          <CriarColab
            funcaoFechaModalCriarColab={funcaoFechaModalCriarColab}
            criarColaborador={criarColaborador}
          />
        </Modal>
      )}
      <BoxInput>
        <CampoTexto tipo="text" placeholder="Pesquisar Colaborador" />
        <CampoSelect>
          <option value="Ativos">Ativos</option>
          <option value="Inativos">Inativos</option>
          <option value="Todos">Todos</option>
        </CampoSelect>
      </BoxInput>

      <div>
        <Tabela headers={headers} rows={rows} margin="20px 0" />
      </div>
    </Container>
  );
};

export default Colaboradores;
