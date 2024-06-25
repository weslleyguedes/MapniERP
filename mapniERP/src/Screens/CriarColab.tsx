import styled from "styled-components";
import BotaoFechar from "../Components/BotaoFechar";
import CampoTexto from "../Components/CampoTexto";
// import Botao from "../Components/Botao";
import arrays from "../../arrays.json";
import CampoSelect from "../Components/CampoSelect";
import useFetch from "../useFetch";
import { FormEvent, useState } from "react";
import { FaRegAddressCard } from "react-icons/fa6";
import { BsHouseDoor } from "react-icons/bs";
import { FaSquarePhone } from "react-icons/fa6";
import { TbCashBanknote } from "react-icons/tb";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { GrSchedule } from "react-icons/gr";
import { BsStopwatch } from "react-icons/bs";
import { TbLock } from "react-icons/tb";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { TbLogin2 } from "react-icons/tb";
import Botao from "../Components/Botao";

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
const ContainerForm = styled.form``;
const ContainerDados = styled.div`
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 15px;
`;
const Linha3Colab = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 15px;
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
const ContainerDadosProf = styled.form`
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
  label {
    cursor: pointer;
  }
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
    display: flex;
    gap: 5px;
  }
`;
const ContainerHoras = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  input {
    width: 180px;
    text-align: center;
    cursor: pointer;
  }
  h2 {
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 5px;
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
const IconeAgenda = styled(GrSchedule)`
  color: var(--azul-icones);
`;
const IconeRelogio = styled(BsStopwatch)`
  color: var(--azul-icones);
`;
const IconeCadeado = styled(TbLock)`
  color: var(--azul-icones);
  font-size: 15px;
`;
const IconeInform = styled(HiOutlineInformationCircle)`
  color: var(--azul-icones);
  font-size: 15px;
`;
const IconeLogin = styled(TbLogin2)`
  color: var(--azul-icones);
  font-size: 16px;
`;
const ContainerBotoes = styled.div`
  display: flex;
  gap: 20px;
  button {
    background-color: var(--cinza-padrao);
  }
  & button:nth-child(2):hover {
    background-color: var(--vermelho-botao-cancelar);
    color: white;
  }
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
  dadosColaborador: (
    nomeColaborador: string,
    cpfColaborador: string,
    loginColab: string,
    cargoColab: string,
    departamentoColab: string,
    colabCidade: string
  ) => void;
}

const CriarColab = ({
  funcaoFechaModalCriarColab,
  dadosColaborador,
}: Props) => {
  // MODAIS DE SHOW CONTEUDO
  const [showDadosPessoais, setShowDadosPessoais] = useState<boolean>(true);
  const [showDadosProfissionais, setShowDadosProfissionais] =
    useState<boolean>(false);

  // MODAIS DE VALORES E MANIPULACOES

  // DADOS COLABORADOR
  const [nomeColaborador, setNomeColaborador] = useState<string>("");
  const [cpfColaborador, setCpfColaborador] = useState<string>("");
  const [rgColaborador, setRgColaborador] = useState<string>("");
  const [dtExpRgColab, setDtExpRgColab] = useState<string>("");
  const [orgaoEmissorColab, setOrgaoEmissorColab] = useState<string>("");
  const [nomeConjugeColab, setNomeConjugeColab] = useState<string>("");
  const [nomeMaeColab, setNomeMaeColab] = useState<string>("");
  const [nomePaiColab, setNomePaiColab] = useState<string>("");

  // ENDEREÇO COLABORADOR
  const [colabCEP, setColabCEP] = useState<string>("");
  const [colabRua, setColabRua] = useState<string>("");
  const [numeroCasaColab, setNumeroCasaColab] = useState<string>("");
  const [complementoColab, setComplementoColab] = useState<string>("");
  const [colabBairro, setColabBairro] = useState<string>("");
  const [colabCidade, setColabCidade] = useState<string>("");
  const [colabUF, setColabUF] = useState<string>("");

  // DADOS BANCARIOS COLAB
  const [tipoContaColab, setTipoContaColab] = useState<string>("");
  const [bancoColab, setBancoColab] = useState<string>("");
  const [agenciaColab, setAgenciaColab] = useState<string>("");
  const [contaColab, setContaColab] = useState<string>("");
  const [chavePixColab, setChavePixColab] = useState<string>("");
  const [tipoChavePixColab, setTipoChavePixColab] = useState<string>("");

  // DADOS PROFISSIONAIS
  // LOGIN
  const [loginColab, setLoginColab] = useState<string>("");
  const [senhaColab, setSenhaColab] = useState<string>("");
  const [repeteSenha, setRepeteSenha] = useState<string>("");
  const [nomeUtilizado, setNomeUtilizado] = useState<string>("");

  //  INFORMACOES PROFISSIONAIS
  const [cargoColab, setCargoColab] = useState<string>("");
  const [departamentoColab, setDepartamentoColab] = useState<string>("");
  const [salarioColab, setSalarioColab] = useState<string>("");
  const [emailColab, setEmailColab] = useState<string>("");
  const [dataAdmissao, setDataAdmissao] = useState<string>("");
  const [dataDemissao, setDataDemissao] = useState<string>("");
  const [numeroPIS, setNumeroPIS] = useState<string>("");
  const [numeroCTPS, setNumeroCTPS] = useState<string>("");

  // CONFIGURACOES DE ACESSO

  // DIAS DA SEMANA
  const [segundaFeira, setSegundaFeira] = useState<boolean>(false);
  const [tercaFeira, setTercaFeira] = useState<boolean>(false);
  const [quartaFeira, setQuartaFeira] = useState<boolean>(false);
  const [quintaFeira, setQuintaFeira] = useState<boolean>(false);
  const [sextaFeira, setSextaFeira] = useState<boolean>(false);
  const [sabado, setSabado] = useState<boolean>(false);
  const [domingo, setDomingo] = useState<boolean>(false);

  // HORARIOS
  // SEG A SEXTA
  const [inicio, setInicio] = useState<string>("");
  const [fim, setFim] = useState<string>("");

  // fins de semana
  const [inicioFDS, setInicioFDS] = useState<string>("");
  const [fimFDS, setFimFDS] = useState<string>("");
  // HOOK REQUISICAO API CEP

  const { dados } = useFetch({ cep: colabCEP });

  const aoSalvar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("enviado");

    dadosColaborador(
      nomeColaborador,
      cpfColaborador,
      loginColab,
      cargoColab,
      departamentoColab,
      colabCidade
    );
    funcaoFechaModalCriarColab();
  };

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

      <ContainerForm noValidate onSubmit={aoSalvar} autoComplete="off">
        {showDadosPessoais && (
          <ContainerDados>
            <ContainerDadosColab>
              <TituloCSS>
                <IconeRG />
                Dados Colaborador
              </TituloCSS>
              <Linha1Colab>
                <div>
                  <label htmlFor="nomecolab">Nome</label>
                  <CampoTexto
                    tipo="text"
                    valor={nomeColaborador}
                    onChange={(e) => setNomeColaborador(e.target.value)}
                    id="nomecolab"
                  />
                </div>
                <div>
                  <label htmlFor="cpfcolab">CPF</label>
                  <CampoTexto
                    tipo="text"
                    valor={cpfColaborador}
                    onChange={(e) => setCpfColaborador(e.target.value)}
                    id="cpfcolab"
                  />
                </div>
                <div>
                  <label htmlFor="rgcolab">RG</label>
                  <CampoTexto
                    tipo="text"
                    valor={rgColaborador}
                    onChange={(e) => setRgColaborador(e.target.value)}
                    id="rgcolab"
                  />
                </div>
                <div>
                  <label htmlFor="dataexpcolab">Data Expedição</label>
                  <CampoTexto
                    tipo="text"
                    valor={dtExpRgColab}
                    onChange={(e) => setDtExpRgColab(e.target.value)}
                    id="dataexpcolab"
                  />
                </div>
              </Linha1Colab>
              <Linha2Colab>
                <div>
                  <label htmlFor="orgaoemissor">Orgão Emissor</label>
                  <CampoTexto
                    tipo="text"
                    valor={orgaoEmissorColab}
                    onChange={(e) => setOrgaoEmissorColab(e.target.value)}
                    id="orgaoemissor"
                  />
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
                  <label htmlFor="nomeconjuge">Nome Cônjuge</label>
                  <CampoTexto
                    tipo="text"
                    valor={nomeConjugeColab}
                    onChange={(e) => setNomeConjugeColab(e.target.value)}
                    id="nomeconjuge"
                  />
                </div>
                <div>
                  <label htmlFor="nomemae">Nome Mãe</label>
                  <CampoTexto
                    tipo="text"
                    valor={nomeMaeColab}
                    onChange={(e) => setNomeMaeColab(e.target.value)}
                    id="nomemae"
                  />
                </div>
                <div>
                  <label htmlFor="nomepai">Nome Pai</label>
                  <CampoTexto
                    tipo="text"
                    valor={nomePaiColab}
                    onChange={(e) => setNomePaiColab(e.target.value)}
                    id="nomepai"
                  />
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
                  <label htmlFor="cep">CEP</label>
                  <CampoTexto
                    tipo="text"
                    valor={colabCEP}
                    onChange={(e) => setColabCEP(e.target.value)}
                    id="cep"
                  />
                </div>
                <div>
                  <label htmlFor="rua">Logradouro</label>
                  <CampoTexto
                    valor={dados?.logradouro ? dados?.logradouro : colabRua}
                    onChange={
                      dados?.logradouro
                        ? undefined
                        : (e) => setColabRua(e.target.value)
                    }
                    tipo="text"
                    id="rua"
                  />
                </div>
                <div>
                  <label htmlFor="numerocasa">Nº</label>
                  <CampoTexto
                    valor={numeroCasaColab}
                    onChange={(e) => setNumeroCasaColab(e.target.value)}
                    tipo="text"
                    id="numerocasa"
                  />
                </div>
              </Linha1Endereco>
              <Linha2Endereco>
                <div>
                  <label htmlFor="complemento">Complemento</label>
                  <CampoTexto
                    tipo="text"
                    valor={complementoColab}
                    onChange={(e) => setComplementoColab(e.target.value)}
                    id="complemento"
                  />
                </div>
                <div>
                  <label htmlFor="bairro">Bairro</label>
                  <CampoTexto
                    tipo="text"
                    valor={dados?.bairro ? dados?.bairro : colabBairro}
                    onChange={
                      dados?.bairro
                        ? undefined
                        : (e) => setColabBairro(e.target.value)
                    }
                    id="bairro"
                  />
                </div>
                <div>
                  <label htmlFor="cidade">Cidade</label>
                  <CampoTexto
                    tipo="text"
                    valor={dados?.localidade ? dados?.localidade : colabCidade}
                    onChange={
                      dados?.localidade
                        ? undefined
                        : (e) => setColabCidade(e.target.value)
                    }
                    id="cidade"
                  />
                </div>
                <div>
                  <label htmlFor="estado">Estado</label>
                  <CampoTexto
                    valor={dados?.uf ? dados?.uf : colabUF}
                    onChange={
                      dados?.uf ? undefined : (e) => setColabUF(e.target.value)
                    }
                    tipo="text"
                    id="estado"
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
                  <label htmlFor="telefone">Telefone</label>
                  <CampoTexto tipo="text" id="telefone" />
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
                  <CampoSelect
                    valor={tipoContaColab}
                    aoSelecionar={(e) => setTipoContaColab(e.target.value)}
                  >
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
                  <CampoSelect
                    valor={bancoColab}
                    aoSelecionar={(e) => setBancoColab(e.target.value)}
                  >
                    <option value="" disabled selected hidden>
                      Selecione...
                    </option>
                  </CampoSelect>
                </div>
                <div>
                  <label htmlFor="agenciacolab">Agência</label>
                  <CampoTexto
                    tipo="text"
                    valor={agenciaColab}
                    onChange={(e) => setAgenciaColab(e.target.value)}
                    id="agenciacolab"
                  />
                </div>
                <div>
                  <label htmlFor="conta">Conta</label>
                  <CampoTexto
                    tipo="text"
                    valor={contaColab}
                    onChange={(e) => setContaColab(e.target.value)}
                    id="conta"
                  />
                </div>
              </LinhaDadosBancarios>
              <LinhaChavePix>
                <div>
                  <label>Tipo Chave</label>
                  <CampoSelect
                    valor={tipoChavePixColab}
                    aoSelecionar={(e) => setTipoChavePixColab(e.target.value)}
                  >
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
                  <label htmlFor="chave">Chave</label>
                  <CampoTexto
                    tipo="text"
                    valor={chavePixColab}
                    onChange={(e) => setChavePixColab(e.target.value)}
                    id="chave"
                  />
                </div>
              </LinhaChavePix>
            </ContainerDadosBancarios>
            <ContainerBotoes>
              <Botao onClick={() => aoSalvar}>Salvar</Botao>
              <Botao onClick={() => funcaoFechaModalCriarColab()}>
                Cancelar
              </Botao>
            </ContainerBotoes>
          </ContainerDados>
        )}

        {showDadosProfissionais && (
          <ContainerDadosProf>
            <BoxDadosAcesso>
              <TituloCSS>
                <IconeLogin />
                Acesso
              </TituloCSS>
              <Linha1Acesso>
                <div>
                  <label htmlFor="login">Login</label>
                  <CampoTexto
                    tipo="text"
                    valor={loginColab}
                    onChange={(e) => setLoginColab(e.target.value)}
                    id="login"
                  />
                </div>
                <div>
                  <label htmlFor="senha">Senha</label>
                  <CampoTexto
                    tipo="password"
                    valor={senhaColab}
                    onChange={(e) => setSenhaColab(e.target.value)}
                    id="senha"
                  />
                </div>
                <div>
                  <label htmlFor="repitasenha">Repita a Senha</label>
                  <CampoTexto
                    tipo="password"
                    valor={repeteSenha}
                    onChange={(e) => setRepeteSenha(e.target.value)}
                    id="repitasenha"
                  />
                </div>
                <div>
                  <label htmlFor="nomeutilizado">Nome Utilizado</label>
                  <CampoTexto
                    tipo="text"
                    valor={nomeUtilizado}
                    onChange={(e) => setNomeUtilizado(e.target.value)}
                    id="nomeutilizado"
                  />
                </div>
              </Linha1Acesso>
            </BoxDadosAcesso>
            <BoxDadosProf>
              <TituloCSS>
                <IconeInform />
                Informações Profissionais
              </TituloCSS>
              <Linha1DadosProf>
                <div>
                  <label>Cargo</label>
                  <CampoSelect
                    valor={cargoColab}
                    aoSelecionar={(e) => setCargoColab(e.target.value)}
                  >
                    <option value="" disabled selected hidden>
                      Selecione...
                    </option>
                    <option value="teste">teste</option>
                  </CampoSelect>
                </div>
                <div>
                  <label>Departamento</label>
                  <CampoSelect
                    valor={departamentoColab}
                    aoSelecionar={(e) => setDepartamentoColab(e.target.value)}
                  >
                    <option value="" disabled selected hidden>
                      Selecione...
                    </option>
                    <option value="teste">teste</option>
                  </CampoSelect>
                </div>
              </Linha1DadosProf>
              <Linha2DadosProf>
                <div>
                  <label htmlFor="salario">Salário</label>
                  <CampoTexto
                    tipo="text"
                    valor={salarioColab}
                    onChange={(e) => setSalarioColab(e.target.value)}
                    id="salario"
                  />
                </div>
                <div>
                  <label htmlFor="email">E-mail</label>
                  <CampoTexto
                    tipo="text"
                    valor={emailColab}
                    onChange={(e) => setEmailColab(e.target.value)}
                    id="email"
                  />
                </div>
                <div>
                  <label htmlFor="dataadmissao">Data Admissão</label>
                  <CampoTexto
                    tipo="text"
                    valor={dataAdmissao}
                    onChange={(e) => setDataAdmissao(e.target.value)}
                    id="dataadmissao"
                  />
                </div>
              </Linha2DadosProf>
              <Linha3DadosProf>
                <div>
                  <label htmlFor="datademissao">Data Demissão</label>
                  <CampoTexto
                    tipo="text"
                    valor={dataDemissao}
                    onChange={(e) => setDataDemissao(e.target.value)}
                    id="datademissao"
                  />
                </div>
                <div>
                  <label htmlFor="numeropispasep">Numero PIS/PASEP</label>
                  <CampoTexto
                    tipo="text"
                    valor={numeroPIS}
                    onChange={(e) => setNumeroPIS(e.target.value)}
                    id="numeropispasep"
                  />
                </div>
                <div>
                  <label htmlFor="nseriectps">Nº Série CTPS</label>
                  <CampoTexto
                    tipo="text"
                    valor={numeroCTPS}
                    onChange={(e) => setNumeroCTPS(e.target.value)}
                    id="nseriectps"
                  />
                </div>
              </Linha3DadosProf>
            </BoxDadosProf>
            <TituloCSS>
              <IconeCadeado />
              Configuração de Acesso
            </TituloCSS>
            <BoxHorarioAcesso>
              <BoxDiasSemana>
                <h2>
                  <IconeAgenda />
                  Dias da Semana
                </h2>
                <div>
                  <CampoTexto
                    tipo="checkbox"
                    checked={segundaFeira}
                    onChange={(e) => setSegundaFeira(e.target.checked)}
                    id="segunda"
                  />
                  <label htmlFor="segunda">Segunda-Feira</label>
                </div>
                <div>
                  <CampoTexto
                    tipo="checkbox"
                    checked={tercaFeira}
                    onChange={(e) => setTercaFeira(e.target.checked)}
                    id="terca"
                  />
                  <label htmlFor="terca">Terça-Feira</label>
                </div>
                <div>
                  <CampoTexto
                    tipo="checkbox"
                    checked={quartaFeira}
                    onChange={(e) => setQuartaFeira(e.target.checked)}
                    id="quarta"
                  />
                  <label htmlFor="quarta">Quarta-Feira</label>
                </div>
                <div>
                  <CampoTexto
                    tipo="checkbox"
                    checked={quintaFeira}
                    onChange={(e) => setQuintaFeira(e.target.checked)}
                    id="quinta"
                  />
                  <label htmlFor="quinta">Quinta-Feira</label>
                </div>
                <div>
                  <CampoTexto
                    tipo="checkbox"
                    checked={sextaFeira}
                    onChange={(e) => setSextaFeira(e.target.checked)}
                    id="sexta"
                  />
                  <label htmlFor="sexta">Sexta-Feira</label>
                </div>
                <div>
                  <CampoTexto
                    tipo="checkbox"
                    checked={sabado}
                    onChange={(e) => setSabado(e.target.checked)}
                    id="sabado"
                  />
                  <label htmlFor="sabado">Sábado</label>
                </div>
                <div>
                  <CampoTexto
                    tipo="checkbox"
                    checked={domingo}
                    onChange={(e) => setDomingo(e.target.checked)}
                    id="domingo"
                  />
                  <label htmlFor="domingo">Domingo</label>
                </div>
              </BoxDiasSemana>
              <ContainerHoras>
                <h2>
                  <IconeRelogio />
                  Horas de Acesso
                </h2>
                <h3>Segunda à Sexta</h3>
                <BoxHorasSemana>
                  <div>
                    <label htmlFor="inicio1">Inicio</label>
                    <CampoTexto
                      tipo="time"
                      valor={inicio}
                      onChange={(e) => setInicio(e.target.value)}
                      id="inicio1"
                    />
                  </div>
                  <div>
                    <label htmlFor="fim1">Fim</label>
                    <CampoTexto
                      tipo="time"
                      valor={fim}
                      onChange={(e) => setFim(e.target.value)}
                      id="fim1"
                    />
                  </div>
                </BoxHorasSemana>
                <h3>Fim de Semana</h3>
                <BoxHorasFimSemana>
                  <div>
                    <label htmlFor="inicio2">Inicio</label>
                    <CampoTexto
                      tipo="time"
                      valor={inicioFDS}
                      onChange={(e) => setInicioFDS(e.target.value)}
                      id="inicio2"
                    />
                  </div>
                  <div>
                    <label htmlFor="fim2">Fim</label>
                    <CampoTexto
                      tipo="time"
                      valor={fimFDS}
                      onChange={(e) => setFimFDS(e.target.value)}
                      id="fim2"
                    />
                  </div>
                </BoxHorasFimSemana>
              </ContainerHoras>
            </BoxHorarioAcesso>
          </ContainerDadosProf>
        )}
      </ContainerForm>
    </Container>
  );
};

export default CriarColab;
