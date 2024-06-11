import styled from "styled-components";
import Botao from "../../Components/Botao";
import { FaPlus } from "react-icons/fa6";
import CampoTexto from "../../Components/CampoTexto";
import CampoSelect from "../../Components/CampoSelect";
import Tabela from "../../Components/Tabela";
import { useState } from "react";
import Modal from "../../Components/Modal";
import CriarColab from "../../Screens/CriarColab";

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

const headers = ["Nome", "CPF", "Login", "Cargo", "Departamento", "Cidade"];
const rows = [
  [
    "WESLLEY GUEDES RIBEIRO",
    "425.515.648-40",
    "weslley.guedes",
    "Operacional",
    "Administratrivo",
    "São Bernardo do Campo - SP",
  ],
];

const Colaboradores = () => {
  const [showModalColab, setShowModalColab] = useState<boolean>(false);

  const funcaoFechaModalCriarColab = () => {
    setShowModalColab(false);
  };

  return (
    <Container>
      <TituloBotoes>
        <h1>Recursos Humanos</h1>
        <div>
          <Botao>up</Botao>
          <Botao onClick={() => setShowModalColab(true)}>
            <FaPlus />
            Novo Colaborador
          </Botao>
        </div>
      </TituloBotoes>
      {showModalColab && (
        <Modal overlay={() => setShowModalColab(false)}>
          <CriarColab funcaoFechaModalCriarColab={funcaoFechaModalCriarColab} />
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
