import styled from "styled-components";
import BotaoFechar from "../Components/BotaoFechar";
import CampoTexto from "../Components/CampoTexto";
// import Botao from "../Components/Botao";
import arrays from "../../arrays.json";
import CampoSelect from "../Components/CampoSelect";
import useFetch from "../useFetch";
import { useState } from "react";
import { FaRegAddressCard } from "react-icons/fa6";
import { BsHouseDoor } from "react-icons/bs";
import { FaSquarePhone } from "react-icons/fa6";
import { TbCashBanknote } from "react-icons/tb";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContainerCabecalho = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    bottom: 0;
    background-color: #0000002f;
    position: absolute;
  }
`;
const IconePessoa = styled(MdOutlinePersonOutline)`
  font-size: 16px;
  margin-bottom: 3px;
`;
const IconeTrabalhador = styled(GrUserWorker)`
  margin-bottom: 2px;
  font-size: 12px;
`;
const BoxCabecalho = styled.div`
  display: flex;
  justify-content: center;
  & h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    position: relative;
    cursor: pointer;
    padding: 0px 25px 5px 0px;
    border-radius: 5px;
    &:hover {
      color: var(--azul-icones);
      &::after {
        content: "";
        width: 100%;
        height: 0.5px;
        bottom: 0;
        background-color: var(--azul-icones);
        position: absolute;
        z-index: 1;
        transition: width 0.2s ease-in-out;
      }
    }
    &::after {
      content: "";
      width: 0;
      height: 0.5px;
      bottom: 0;
      background-color: var(--azul-icones);
      position: absolute;
      z-index: 1;
    }
  }
`;
const TituloCSS = styled.h1`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
`;
const IconeRG = styled(FaRegAddressCard)`
  font-size: 15px;
  color: var(--azul-icones);
`;
const IconeCasa = styled(BsHouseDoor)`
  font-size: 15px;
  color: var(--azul-icones);
`;
const IconeTel = styled(FaSquarePhone)`
  font-size: 16px;
  color: var(--azul-icones);
`;
const IconeDolar = styled(TbCashBanknote)`
  color: var(--azul-icones);
  font-size: 20px;
`;
const BoxForm = styled.form`
  display: flex;
  flex-direction: column;
  select {
    margin-top: 8px;
  }
  input {
    margin-top: 8px;
  }
`;
const ContainerDadosColab = styled.div`
  margin-bottom: 25px;
  h1 {
    margin-top: 6px;
  }
`;
const Linha1Colab = styled.div`
  display: flex;
  gap: 20px;
  & div:nth-child(1) {
    width: 300px;
  }
`;
const Linha2Colab = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
  & div:nth-child(1) input {
    width: 100px;
  }
  & div:nth-child(4) select {
    width: 165px;
  }
  & div:nth-child(5) select {
    width: 165px;
  }
`;
const Linha3Colab = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
  & > div:nth-child(2) input {
    width: 290px;
  }
  & > div:nth-child(3) input {
    width: 290px;
  }
`;
const ContainerEnderecoColab = styled.div`
  margin-bottom: 25px;
`;
const Linha1Endereco = styled.div`
  display: flex;
  gap: 20px;
  & > div:nth-child(2) input {
    width: 460px;
  }
  & > div:nth-child(3) input {
    width: 120px;
  }
`;
const Linha2Endereco = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
  & > div:nth-child(3) input {
    width: 280px;
  }
  & > div:nth-child(4) input {
    width: 100px;
  }
`;
const ContainerContatosColab = styled.div`
  margin-bottom: 25px;
`;
const LinhaContatos = styled.div`
  display: flex;
  gap: 20px;
`;
const ContainerDadosBancarios = styled.div`
  margin-bottom: 25px;
  h1 {
    margin-bottom: 20px;
  }
`;
const LinhaDadosBancarios = styled.div`
  display: flex;
  gap: 20px;
  & > div:nth-child(1) select {
    width: 160px;
  }
  & > div:nth-child(2) select {
    width: 260px;
  }
`;
const LinhaChavePix = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 20px;
  & > div:nth-child(1) select {
    width: 160px;
  }
  & > div:nth-child(2) input {
    width: 432px;
  }
`;
const ContainerDadosProf = styled.div`
  input,
  select {
    margin-top: 8px;
  }
`;
const BoxDadosAcesso = styled.div`
  margin-bottom: 25px;
`;
const Linha1Acesso = styled.div`
  display: flex;
  gap: 20px;
  & > div:last-child input {
    width: 200px;
  }
`;
const BoxDadosProf = styled.div`
  margin-bottom: 25px;
`;
const Linha1DadosProf = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
const Linha2DadosProf = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;
const Linha3DadosProf = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;
const BoxHorarioAcesso = styled.div`
  display: flex;
`;
const BoxDiasSemana = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8em;
  & > div {
    display: flex;
    gap: 5px;
    margin: 7px 0;
  }
  input {
    margin: 0px;
  }
  h2 {
    margin-bottom: 10px;
  }
`;
const ContainerHoras = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  h2 {
    text-align: center;
  }
  h3 {
    font-size: 0.8rem;
  }
`;
const BoxHorasSemana = styled.div`
  display: flex;
  gap: 20px;
`;
const BoxHorasFimSemana = styled.div`
  display: flex;
  gap: 20px;
`;
// const BoxBotoes = styled.div`
//   margin-top: 25px;
//   display: flex;
//   justify-content: space-between;
//   button {
//     margin: 0;
//     background-color: var(--cinza-padrao);
//   }
//   & button:last-child:hover {
//     background-color: var(--vermelho-botao-cancelar);
//     color: white;
//   }
// `;

interface Props {
  funcaoFechaModalCriarColab: () => void;
}

const CriarColab = ({ funcaoFechaModalCriarColab }: Props) => {
  const [showDadosPessoais, setShowDadosPessoais] = useState(true);
  const [showDadosProfissionais, setShowDadosProfissionais] = useState(false);

  const [colabCEP, setColabCEP] = useState("");
  const [colabRua, setColabRua] = useState("");
  const [colabBairro, setColabBairro] = useState("");
  const [colabCidade, setColabCidade] = useState("");
  const [colabUF, setColabUF] = useState("");

  // HOOK REQUISICAO API CEP

  const { dados } = useFetch({ cep: colabCEP });

  const funcaoDadosPessoais = () => {
    setShowDadosProfissionais(false);
    setShowDadosPessoais(true);
  };
  const funcaoDadosProfissionais = () => {
    setShowDadosPessoais(false);
    setShowDadosProfissionais(true);
  };

  return (
    <Container>
      <ContainerCabecalho>
        <div></div>
        <BoxCabecalho>
          <h1 onClick={funcaoDadosPessoais}>
            <IconePessoa />
            Dados Pessoais
          </h1>
          <h1 onClick={funcaoDadosProfissionais}>
            <IconeTrabalhador />
            Acesso Profissional
          </h1>
        </BoxCabecalho>
        <div>
          <BotaoFechar onClick={() => funcaoFechaModalCriarColab()} />
        </div>
      </ContainerCabecalho>

      {showDadosPessoais && (
        <BoxForm noValidate autoComplete="off">
          <ContainerDadosColab>
            <TituloCSS>
              <IconeRG />
              Dados Colaborador
            </TituloCSS>
            <Linha1Colab>
              <div>
                <label>Nome</label>
                <CampoTexto tipo="text" />
              </div>
              <div>
                <label>CPF</label>
                <CampoTexto tipo="text" />
              </div>
              <div>
                <label>RG</label>
                <CampoTexto tipo="text" />
              </div>
              <div>
                <label>Data Expedição</label>
                <CampoTexto tipo="text" />
              </div>
            </Linha1Colab>
            <Linha2Colab>
              <div>
                <label>Orgão Emissor</label>
                <CampoTexto tipo="text" />
              </div>
              <div>
                <label>Estado</label>
                <CampoSelect>
                  <option value="" disabled selected hidden>
                    Selecione...
                  </option>
                  {arrays.UF.map((uf, index) => (
                    <option value={uf} key={index}>
                      {uf}
                    </option>
                  ))}
                </CampoSelect>
              </div>
              <div>
                <label>RG</label>
                <CampoTexto tipo="text" />
              </div>
              <div>
                <label>Sexo</label>
                <CampoSelect>
                  <option value="" disabled selected hidden>
                    Selecione...
                  </option>
                  {arrays.Sexo.map((sexo, index) => (
                    <option value={sexo} key={index}>
                      {sexo}
                    </option>
                  ))}
                </CampoSelect>
              </div>
              <div>
                <label>Estado Civil</label>
                <CampoSelect>
                  <option value="" disabled selected hidden>
                    Selecione...
                  </option>
                  {arrays.EstadoCivil.map((civil, index) => (
                    <option value={civil} key={index}>
                      {civil}
                    </option>
                  ))}
                </CampoSelect>
              </div>
            </Linha2Colab>
            <Linha3Colab>
              <div>
                <label>Nome Cônjuge</label>
                <CampoTexto tipo="text" />
              </div>
              <div>
                <label>Nome Mãe</label>
                <CampoTexto tipo="text" />
              </div>
              <div>
                <label>Nome Pai</label>
                <CampoTexto tipo="text" />
              </div>
            </Linha3Colab>
          </ContainerDadosColab>

          <ContainerEnderecoColab>
            <TituloCSS>
              <IconeCasa />
              Endereço
            </TituloCSS>
            <Linha1Endereco>
              <div>
                <label>CEP</label>
                <CampoTexto
                  tipo="text"
                  valor={colabCEP}
                  onChange={(e) => setColabCEP(e.target.value)}
                />
              </div>
              <div>
                <label>Logradouro</label>
                <CampoTexto
                  valor={dados?.logradouro ? dados?.logradouro : colabRua}
                  onChange={
                    dados?.logradouro
                      ? undefined
                      : (e) => setColabRua(e.target.value)
                  }
                  tipo="text"
                />
              </div>
              <div>
                <label>Nº</label>
                <CampoTexto tipo="text" />
              </div>
            </Linha1Endereco>
            <Linha2Endereco>
              <div>
                <label>Complemento</label>
                <CampoTexto tipo="text" />
              </div>
              <div>
                <label>Bairro</label>
                <CampoTexto
                  tipo="text"
                  valor={dados?.bairro ? dados?.bairro : colabBairro}
                  onChange={
                    dados?.bairro
                      ? undefined
                      : (e) => setColabBairro(e.target.value)
                  }
                />
              </div>
              <div>
                <label>Cidade</label>
                <CampoTexto
                  tipo="text"
                  valor={dados?.localidade ? dados?.localidade : colabCidade}
                  onChange={
                    dados?.localidade
                      ? undefined
                      : (e) => setColabCidade(e.target.value)
                  }
                />
              </div>
              <div>
                <label>Estado</label>
                <CampoTexto
                  valor={dados?.uf ? dados?.uf : colabUF}
                  onChange={
                    dados?.uf ? undefined : (e) => setColabUF(e.target.value)
                  }
                  tipo="text"
                />
              </div>
            </Linha2Endereco>
          </ContainerEnderecoColab>

          <ContainerContatosColab>
            <TituloCSS>
              <IconeTel />
              Contatos
            </TituloCSS>
            <LinhaContatos>
              <div>
                <label>Telefone</label>
                <CampoTexto tipo="text" />
              </div>
              <div>
                <label>Tipo</label>
                <CampoSelect>
                  <option value="" disabled selected hidden>
                    Selecione...
                  </option>
                  <option value="Whatsapp e Telefone">
                    WhatsApp e Telefone
                  </option>
                  <option value="Telefone">Apenas Telefone</option>
                  <option value="WhatsApp">Apenas WhatsApp</option>
                </CampoSelect>
              </div>
              <div>
                <label>Uso</label>
                <CampoSelect>
                  <option value="" disabled selected hidden>
                    Selecione...
                  </option>
                  <option value="Ativo">Ativo</option>
                  <option value="Pouco Ativo">Pouco Ativo</option>
                  <option value="Apenas Recado">Apenas Recado</option>
                </CampoSelect>
              </div>
            </LinhaContatos>
          </ContainerContatosColab>
          <ContainerDadosBancarios>
            <TituloCSS>
              <IconeDolar />
              Dados Bancários
            </TituloCSS>
            <LinhaDadosBancarios>
              <div>
                <label>Tipo Conta</label>
                <CampoSelect>
                  <option value="" disabled selected hidden>
                    Selecione...
                  </option>
                  <option value="Chave PIX">Chave PIX</option>
                  <option value="Conta Salário">Conta Salário</option>
                  <option value="Conta Corrente">Conta Corrente</option>
                  <option value="Conta Poupanca">Conta Poupança</option>
                </CampoSelect>
              </div>
              <div>
                <label>Banco</label>
                <CampoSelect>
                  <option value="" disabled selected hidden>
                    Selecione...
                  </option>
                </CampoSelect>
              </div>
              <div>
                <label>Agência</label>
                <CampoTexto tipo="text" />
              </div>
              <div>
                <label>Conta</label>
                <CampoTexto tipo="text" />
              </div>
            </LinhaDadosBancarios>
            <LinhaChavePix>
              <div>
                <label>Tipo Chave</label>
                <CampoSelect>
                  <option value="" disabled selected hidden>
                    Selecione...
                  </option>
                  <option value="CPF/CNPJ">CPF/CNPJ</option>
                  <option value="E-mail">E-mail</option>
                  <option value="Celular">Celular</option>
                  <option value="Chave Aleatória">Chave Aleatória</option>
                </CampoSelect>
              </div>
              <div>
                <label>Chave</label>
                <CampoTexto tipo="text" />
              </div>
            </LinhaChavePix>
          </ContainerDadosBancarios>
        </BoxForm>
      )}

      {showDadosProfissionais && (
        <ContainerDadosProf>
          <BoxDadosAcesso>
            <TituloCSS>Acesso</TituloCSS>
            <Linha1Acesso>
              <div>
                <label htmlFor="login">Login</label>
                <CampoTexto tipo="text" id="login" />
              </div>
              <div>
                <label htmlFor="senha">Senha</label>
                <CampoTexto tipo="password" id="senha" />
              </div>
              <div>
                <label htmlFor="repitasenha">Repita a Senha</label>
                <CampoTexto tipo="password" id="repitasenha" />
              </div>
              <div>
                <label htmlFor="nomeutilizado">Nome Utilizado</label>
                <CampoTexto tipo="text" id="nomeutilizado" />
              </div>
            </Linha1Acesso>
          </BoxDadosAcesso>
          <BoxDadosProf>
            <TituloCSS>Informações Profissionais</TituloCSS>
            <Linha1DadosProf>
              <div>
                <label>Cargo</label>
                <CampoSelect>
                  <option value="" disabled selected hidden>
                    Selecione...
                  </option>
                </CampoSelect>
              </div>
              <div>
                <label>Departamento</label>
                <CampoSelect>
                  <option value="" disabled selected hidden>
                    Selecione...
                  </option>
                </CampoSelect>
              </div>
            </Linha1DadosProf>
            <Linha2DadosProf>
              <div>
                <label htmlFor="salario">Salário</label>
                <CampoTexto tipo="text" id="salario" />
              </div>
              <div>
                <label htmlFor="email">E-mail</label>
                <CampoTexto tipo="text" id="email" />
              </div>
              <div>
                <label htmlFor="dataadmissao">Data Admissão</label>
                <CampoTexto tipo="text" id="dataadmissao" />
              </div>
            </Linha2DadosProf>
            <Linha3DadosProf>
              <div>
                <label htmlFor="datademissao">Data Demissão</label>
                <CampoTexto tipo="text" id="datademissao" />
              </div>
              <div>
                <label htmlFor="numeropispasep">Numero PIS/PASEP</label>
                <CampoTexto tipo="text" id="numeropispasep" />
              </div>
              <div>
                <label htmlFor="nseriectps">Nº Série CTPS</label>
                <CampoTexto tipo="text" id="nseriectps" />
              </div>
            </Linha3DadosProf>
          </BoxDadosProf>
          <TituloCSS>Configuração de Acesso</TituloCSS>
          <BoxHorarioAcesso>
            <BoxDiasSemana>
              <h2>Dias da Semana</h2>
              <div>
                <CampoTexto tipo="checkbox" id="segunda" />
                <label htmlFor="segunda">Segunda-Feira</label>
              </div>
              <div>
                <CampoTexto tipo="checkbox" id="terca" />
                <label htmlFor="terca">Terça-Feira</label>
              </div>
              <div>
                <CampoTexto tipo="checkbox" id="quarta" />
                <label htmlFor="quarta">Quarta-Feira</label>
              </div>
              <div>
                <CampoTexto tipo="checkbox" id="quinta" />
                <label htmlFor="quinta">Quinta-Feira</label>
              </div>
              <div>
                <CampoTexto tipo="checkbox" id="sexta" />
                <label htmlFor="sexta">Sexta-Feira</label>
              </div>
              <div>
                <CampoTexto tipo="checkbox" id="sabado" />
                <label htmlFor="sabado">Sábado</label>
              </div>
              <div>
                <CampoTexto tipo="checkbox" id="domingo" />
                <label htmlFor="domingo">Domingo</label>
              </div>
            </BoxDiasSemana>
            <ContainerHoras>
              <h2>Horas de Acesso</h2>
              <h3>Segunda à Sexta</h3>
              <BoxHorasSemana>
                <div>
                  <label htmlFor="inicio1">Inicio</label>
                  <CampoTexto tipo="text" id="inicio1" />
                </div>
                <div>
                  <label htmlFor="fim1">Fim</label>
                  <CampoTexto tipo="text" id="fim1" />
                </div>
              </BoxHorasSemana>
              <h3>Fim de Semana</h3>
              <BoxHorasFimSemana>
                <div>
                  <label htmlFor="inicio2">Inicio</label>
                  <CampoTexto tipo="text" id="inicio2" />
                </div>
                <div>
                  <label htmlFor="fim2">Fim</label>
                  <CampoTexto tipo="text" id="fim2" />
                </div>
              </BoxHorasFimSemana>
            </ContainerHoras>
          </BoxHorarioAcesso>
        </ContainerDadosProf>
      )}
    </Container>
  );
};

export default CriarColab;
