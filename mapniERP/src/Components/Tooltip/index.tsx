import styled from "styled-components";

const Tooltip = styled.div`
  position: relative;
  display: inline-block;
`
const TooltipText = styled.span`
  visibility: hidden;
  width: 70px;
  background-color: #FFFFFF;
  color: #1F1F1F;
  box-shadow:0px 0px 5px 0px #1f1f1f69;
  text-align: center;
  font-size:9px;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  bottom: calc(100% + 18px);
  margin-left: -50px; /* centraliza a caixa de dica */
  &::after {
    content: '';
    position: absolute;
    bottom: 0; /* posiciona a ponta acima do tooltip */
    top:100%;
    left: 50%;
    transform: translateX(-40%);
    border-width: 3px;
    border-style: solid;
    border-color: #FFFFFF transparent transparent transparent;
    }
`
export { Tooltip, TooltipText };

