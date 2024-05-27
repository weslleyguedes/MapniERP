import { ChangeEvent } from "react";
import styled from "styled-components"

const Container = styled.div`
input {
width:100%;
border-radius:4px;
padding:12px;
margin:15px 0 5px 0;
border:1px solid var(--cinza-borda-input);
&:hover {
  border:1px solid var(--preto-padrao);
}
&:focus {
  border:1px solid var(--preto-padrao);
}}
`
interface Props {
  label?:string;
  checked?:boolean;
  tipo:string;
  placeholder?:string;
  valor?:string | number;
  obrigatorio?: boolean;
  onChange?:(e:ChangeEvent<HTMLInputElement>) => void;
  minCaracteres?:number;
  maxCaracteres?:number;
  readOnly?:boolean;
  onFocus?:() => void;
  onClick?:(event:React.MouseEvent<HTMLInputElement>) => void ;
}

const CampoTexto = ({label,readOnly,checked,tipo,placeholder,valor,obrigatorio,onChange,onFocus,minCaracteres,maxCaracteres,onClick} : Props) => {


  return (
    <Container>
        <label>{label}</label>
            <input
            readOnly={readOnly}
            checked={checked}
            type={tipo}
            onFocus={onFocus}
            placeholder={placeholder}
            value={valor}
            required={obrigatorio}
            onChange={onChange}
            minLength={minCaracteres}
            maxLength={maxCaracteres}
            onClick={onClick}
            />
    </Container>
  )
}

export default CampoTexto
