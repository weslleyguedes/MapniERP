import styled from "styled-components";
import Titulo from "../../Components/Titulo";
import Botao from "../../Components/Botao";
import CampoTexto from "../../Components/CampoTexto";
import CampoSelect from "../../Components/CampoSelect";
import { TbReload } from "react-icons/tb";
import Tabela from "../../Components/Tabela";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import Modal from "../../Components/Modal";
import CriarCargo from "../../Screens/CriarCargo";
import { RiProhibitedLine } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import { GoGear } from "react-icons/go";
import ConfigCargo from "../../Screens/ConfigCargo";
import EditarCargo from "../../Screens/EditarCargo";

const Container = styled.div`
  margin: 20px 200px;
`;
const BoxTituloBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    margin: 0;
    background-color: var(--cinza-padrao);
  }
  & div:last-child {
    display: flex;
    gap: 10px;
  }
  & div button:last-child {
    display: flex;
    gap: 5px;
    align-items: baseline;
  }
`;
const BoxInputSelect = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  input,
  select {
    margin: 0;
  }
  input {
    width: 250px;
    background-color: var(--background-input-cinza);
  }
  select {
    width: 150px;
  }
`;
const IconeReload = styled(TbReload)`
  transform: scale(1.2);
`;
const BoxIcones = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
const IconeEditar = styled(GoPencil)`
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
const IconeConfig = styled(GoGear)`
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

interface Dados {
  nome: string;
  status: string;
}

const Cargos = () => {
  const [abreModalCriarCargos, setAbreModalCriarCargos] =
    useState<boolean>(false);
  const [abreModalConfigCargos, setAbreModalConfigCargos] =
    useState<boolean>(false);
  const [AbreModalEditarCargos, setAbreModalEditarCargos] =
    useState<boolean>(false);
  const [cargos, setCargos] = useState<Dados[]>([]);
  const [cargoIndex, setCargoIndex] = useState<number>(0);

  const funcaoFechaModalCriarCargo = () => {
    setAbreModalCriarCargos(false);
  };
  const funcaoFechaModalEditarCargos = () => {
    setAbreModalEditarCargos(false);
  };
  const funcaoFechaModalConfigCargo = () => {
    setAbreModalConfigCargos(false);
  };
  const adicionarNovoCargo = (nome: string) => {
    const novoCargo: Dados = {
      nome: nome,
      status: "Ativo",
    };
    setCargos([...cargos, novoCargo]);
  };
  const editarCargo = (index: number) => {
    setCargoIndex(index);
    setAbreModalEditarCargos(true);
  };
  const arquivarCargo = (index: number) => {
    const novosCargos = [...cargos];
    novosCargos.splice(index, 1);
    setCargos(novosCargos);
  };

  const headers: (string | JSX.Element)[] = ["Nome", "Status", "Ações"];
  const rows: (string | JSX.Element)[][] = cargos.map(
    (cargo, index: number) => [
      cargo.nome,
      cargo.status,
      <BoxIcones key={index}>
        <IconeEditar onClick={() => editarCargo(index)} />
        <IconeArquivar onClick={() => arquivarCargo(index)} />
        <IconeConfig onClick={() => setAbreModalConfigCargos(true)} />
      </BoxIcones>,
    ]
  );

  return (
    <Container>
      <BoxTituloBotoes>
        <div>
          <Titulo>Cargos</Titulo>
        </div>
        <div>
          <Botao>
            <IconeReload />
          </Botao>
          <Botao onClick={() => setAbreModalCriarCargos(true)}>
            <FaPlus fontSize={12} />
            Novo
          </Botao>
        </div>
      </BoxTituloBotoes>
      {abreModalCriarCargos && (
        <Modal width="400px" overlay={() => setAbreModalCriarCargos(false)}>
          <CriarCargo
            adicionarNovoCargo={adicionarNovoCargo}
            funcaoFechaModalCargo={funcaoFechaModalCriarCargo}
          />
        </Modal>
      )}
      <BoxInputSelect>
        <div>
          <CampoTexto tipo="text" placeholder="Pesquisar Cargo" />
        </div>
        <div>
          <CampoSelect>
            <option value="Ativos">Ativos</option>
            <option value="Inativos">Inativos</option>
            <option value="Todos">Todos</option>
          </CampoSelect>
        </div>
      </BoxInputSelect>

      <div>
        <Tabela headers={headers} rows={rows} margin="20px 0" />
      </div>

      {AbreModalEditarCargos && (
        <Modal width="400px">
          <EditarCargo
            funcaoFechaModalEditarCargos={funcaoFechaModalEditarCargos}
            cargos={cargos}
            setCargos={setCargos}
            cargoIndex={cargoIndex}
          />
        </Modal>
      )}

      {abreModalConfigCargos && (
        <Modal
          width="500px"
          height="500px"
          overlay={() => setAbreModalConfigCargos(false)}
        >
          <ConfigCargo
            funcaoFechaModalConfigCargo={funcaoFechaModalConfigCargo}
          />
        </Modal>
      )}
    </Container>
  );
};

export default Cargos;
