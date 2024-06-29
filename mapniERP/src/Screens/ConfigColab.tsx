import styled from "styled-components";
import BotaoFechar from "../Components/BotaoFechar";

const Container = styled.div``;
const ContainerTituloBotao = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:20px;
`;
interface Props {
  fechaModalConfigColab: () => void;
}

const ConfigColab = ({ fechaModalConfigColab }: Props) => {
  return (
    <Container>
      <ContainerTituloBotao>
        <h1>Configuração - {}</h1>
        <BotaoFechar onClick={() => fechaModalConfigColab()} />
      </ContainerTituloBotao>
        
    </Container>
  );
};

export default ConfigColab;
