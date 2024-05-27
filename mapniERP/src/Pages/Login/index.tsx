import styled from "styled-components"
import FundoLogin from "../../imagens/fundoLogin.jpg"
import CampoTexto from "../../Components/CampoTexto"
import { FormEvent, useState } from "react"
import Formulario from "../../Components/Formulario"
import LogoMapni from "../../imagens/logoMapni.png"
import Botao from "../../Components/Botao"
import { GoAlert } from "react-icons/go";
import { Link } from "react-router-dom"

const ImagemDeFundo = styled.div`
height:100vh;
background-image:url(${FundoLogin});
background-size:cover;
background-position:center;
`
const Logomapni = styled.div`
img {
  width:60px;
  height:70px;
  margin-bottom:40px;
}
`
const Container = styled.form`

input {
  width:240px;
  background-color:#0000004c;
  color:#FFFFFF;
}

button {
  width:100%;
  font-weight:bold;
}

a {
  color:red;

}
`

const MensagemDeErro = styled.span`
color:#FBC105;
font-size:11px;
display:flex;
`
const LinkCSS = styled(Link)`
color:#ffffff6d;
font-size:12px;
margin-top:5px;
transition:.2s;
&:hover {
  color:#FFFFFF;
}
`

const Login = () => {

  const AoEnviar = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!usuario.trim()){
        setUsuarioErro('Informe o usuário');
    }else {
      setUsuarioErro('')
    }

    if (!senha.trim()) {
      setSenhaErro("Informe a senha")
    } else {
      setSenhaErro ('')
    }
    console.log('enviado')
  }

  const [usuario,setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [usuarioErro, setUsuarioErro] = useState('')
  const [senhaErro,setSenhaErro] = useState('')

  return (
      <ImagemDeFundo>
            <Formulario>
                <Logomapni><img src={LogoMapni} alt="logo" /></Logomapni>
                  <Container onSubmit={AoEnviar} noValidate>
                      <CampoTexto
                      tipo="text"
                      obrigatorio={true}
                      valor={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                      placeholder="Usuário"
                      />
                     {usuarioErro && <MensagemDeErro><GoAlert style={{marginRight:"6px"}} color="#FBC105"/>{usuarioErro}</MensagemDeErro>}
                      <CampoTexto
                      tipo="password"
                      obrigatorio={true}
                      valor={senha}
                      onChange={(e) => setSenha (e.target.value)}
                      placeholder="Senha"
                      />
                     {senhaErro && <MensagemDeErro><GoAlert style={{marginRight:"6px"}} color="#FBC105"/>{senhaErro}</MensagemDeErro>}

                      <Botao>Entrar</Botao>

                  </Container>
                  <LinkCSS to="/dashboard">Esqueci minha senha</LinkCSS>
            </Formulario>
      </ImagemDeFundo>
  )
}

export default Login
