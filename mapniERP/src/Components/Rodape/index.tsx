import styled from "styled-components"

const Container = styled.footer`
height:32px;
background-color:#1F1F1F;
font-size:0.8em;
position:fixed;
width:100%;
bottom:0;
color:#FFFFFF;
display:flex;
justify-content:space-between;
align-items:center;
div,h3{
  margin: 0 30px;
  font-weight:200;
}

h2 > a {
  color:#FFFFFF;
  font-weight:200;
}

h2 > a:hover {
  text-decoration:underline;
}
`

const Rodape = () => {
  return (
    <Container>
      <div>
        <p>2024 Versão: 1.0.0</p>
      </div>

      <h2><a href="#">Sugestão de melhorias</a></h2>

      <h3>WSL</h3>
    </Container>
  )
}

export default Rodape
