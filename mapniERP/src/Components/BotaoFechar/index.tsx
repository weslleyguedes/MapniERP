import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const Container = styled.div`
  button {
    border: none;
    padding: 3px 6px;
    border-radius: 5px;
    background-color: transparent;
    
  }
  button:hover {
    background-color: #ea4b4b;
    color: white;
  }
`;
interface Props {
  onClick?: () => void;
}

const BotaoFechar = ({ onClick }: Props) => {
  return (
    <Container>
      <button onClick={onClick}>
        <IoClose />
      </button>
    </Container>
  );
};

export default BotaoFechar;
