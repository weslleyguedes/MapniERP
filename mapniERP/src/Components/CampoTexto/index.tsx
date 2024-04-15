import styled from "styled-components"

const Container = styled.div`
input {
width:100%;
border-radius:4px;
border:none;
padding:12px;
margin:15px 0 5px 0;
}
`

interface Props {
  label?:string;
  checked?:boolean;
  tipo:string;
  placeholder?:string;
  valor?:string | number;
  obrigatorio?: boolean;
  onChange:(value:string) => void;
  minCaracteres?:number;
  maxCaracteres?:number;
  readOnly?:boolean;
}

const CampoTexto = ({label,readOnly,checked,tipo,placeholder,valor,obrigatorio,onChange,minCaracteres,maxCaracteres} : Props) => {

  return (
    <Container>
        <label>{label}</label>
        <input
        readOnly={readOnly}
        checked={checked}
        type={tipo}
        placeholder={placeholder}
        value={valor}
        required={obrigatorio}
        onChange={(e) => onChange(e.target.value)}
        minLength={minCaracteres}
        maxLength={maxCaracteres}
        />
    </Container>
  )
}

export default CampoTexto
