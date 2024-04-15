import { FormEvent, useState } from "react"
import styled from "styled-components"
import { IoPersonOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CampoTexto from "../../Components/CampoTexto";
import { BsPersonExclamation } from "react-icons/bs";
import Botao from "../../Components/Botao";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { LuTrash } from "react-icons/lu";

const TituloCSS = styled.h1`
margin-bottom:16px;
display:flex;
align-items:center;
gap:6px;
margin-bottom:20px;
`
const ContainerForm = styled.form`
display:flex;
flex-direction:column;

input {
  border:1px solid var(--cinza-borda-input);
  margin:5px 0;
}
input:focus {
  border:1px solid var(--preto-hover-input);
}
input:hover {
  border:1px solid var(--preto-hover-input);
}
`
const ContainerDadosCliente = styled.div`
display:flex;
flex-wrap:wrap;
gap:10px;
margin-bottom:25px;
`
const Linha1Cliente = styled.div`
display:flex;
gap:10px;
width:100%;
& > div:nth-child(1) input {
  width:200px;
}
& > div:nth-child(2) input {
  width:320px;
}
& > div:nth-child(3) input {
  width:160px;
}
`
const Linha2Cliente = styled.div`
display:flex;
gap:10px;
width:100%;
& > div:nth-child(1) input {
    width:200px;
}
& > div:nth-child(2) input {
    width:300px;
}
& > div:nth-child(3) input {
    width:231px;
}
`
const Linha3Cliente = styled.div`
display:flex;
gap:10px;
width:100%;
& > div:nth-child(3) input {
    width:330px;
}
& > div:nth-child(4) input {
    width:330px;
}
`
const ContainerStatusCliente = styled.div`
display:flex;
margin-bottom:30px;

div {
  display:inline-block;
  vertical-align:middle;
  margin-right:5px;

}

& div:nth-child(n+2) {
  margin-left:30px;
}
`
const ContainerRepLegal = styled.div`
display:flex;
gap:10px;
margin-bottom:25px;
& > div:nth-child(1) input {
  width:350px;
}
& > div:nth-child(2) input {
  width:250px;
}
`
const ContainerContato = styled.div`
display:flex;
align-items:center;
gap:10px;
margin-bottom:25px;
`
const ContainerEnderecoCliente = styled.div`
display:flex;
flex-wrap:wrap;
gap:10px;
margin-bottom:25px;
`
const Linha1Endereco = styled.div`
display:flex;
gap:10px;
width:100%;
& > div:nth-child(1) input {
  width:152px;
}
& > div:nth-child(2) input {
  width:400px;
}
& > div:nth-child(4) input {
  width:200px;
}

`
const Linha2Endereco = styled.div`
display:flex;
gap:10px;
width:100%;
& > div:nth-child(1) input {
  width:400px;
}
& > div:nth-child(2) input {
  width:400px;
}

`
const ContainerMatriculas = styled.div`
display:flex;
flex-wrap:wrap;
gap:10px;
width:100%;
margin-bottom:25px;

`
const Linha1Matriculas = styled.div`
display:flex;
gap:10px;
width:100%;
& > div:nth-child(1) input {
  width:100px;
}
& > div:nth-child(2) input {
  width:350px;
}
& > div:nth-child(3) input {
  width:212px;
}
& > div:nth-child(4) input {
  width:80px;
}
`
const Linha2Matriculas = styled.div`
display:flex;
gap:10px;
width:100%;
& > div:nth-child(1) input {
  width:200px;
}
& > div:nth-child(2) input {
  width:300px;
}
& > div:nth-child(3) input {
  width:205px;
}
`
const ContainerBotoesSalvarVoltar =styled.div`
display:flex;
gap:10px;
button {
  position:static;
  background-color:var(--cinza-padrao);
  padding:10px 12px !important;
  margin:0;
  border:1px solid var(--preto-padrao);
}
button:hover {
  background-color:var(--amarelo-hover);
  color:var(--preto-padrao);
}
& > div:last-child button:hover {
  background-color:#c9eff9;
}
`
//ESTILOS DOS ICONES

const TrashIcon = styled(LuTrash)`
 margin-top:15px;
 color:#cd6b6b;
 cursor:pointer;
 font-size:20px;
 &:hover {
  color:red;
 }
`
const PersonIcon = styled(IoPersonOutline)`
color:#004b79;
font-size:17px;
`
const StatusClienteIcon = styled(BsPersonExclamation)`
color:#004b79;
font-size:19px;
`
const RepLegalIcon = styled(BsPeople)`
 color:#004b79;
 font-size:18px;
`

const Cadastrar = () =>  {

  const salvarCliente = (event:FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('deu certo')
  }

  const toggleRepLegal = () => {
    setMostraRepLegal(!mostraRepLegal)
  }

  const addContato = () => {
    setCriaContato([...criaContato, {telefone:"", tipo:"", uso:""}]);
  }

  const onChangeContato = (index: number, campo: string, valor: string) => {
    const newContato = [...criaContato];
    newContato[index] = { ...newContato[index], [campo]: valor };
    setCriaContato(newContato);
}

  // STATES DE DADOS CLIENTE

  const [clienteCPF,setClienteCPF] = useState<string>('')
  const [clienteNome, setClienteNome] = useState<string>('')
  const [clienteDataNasc, setClienteDataNasc] = useState<string>('')
  const [clienteEstadoCivil, setClienteEstadoCivil] = useState<string>('')
  const [clienteConjuge, setClienteConjuge] = useState<string>('')
  const [clienteSexo, setClienteSexo] = useState<string>('')
  const [clienteRG, setClienteRG] = useState<string>('')
  const [clienteDtExpedicao, setClienteDtExpedicao] = useState<string>('')
  const [clienteOrgao,setClienteOrgao] = useState<string>('')
  const [clienteUFRG, setClienteUFRG] = useState<string>('')
  const [clientePai,setClientePai] = useState<string>('')
  const [clienteMae, setClienteMae] = useState<string>('')

  // STATS DE STATUS CLIENTE

  const [clienteAnalfabeto, setClienteAnalfabeto] = useState(false)
  const [clienteFalecido, setClienteFalecido] = useState(false)
  const [clienteBlacklist, setClienteBlacklist] = useState(false)

  // STATES REP LEGAL

  const [mostraRepLegal, setMostraRepLegal] = useState(false)
  const [repLegalCPF, setRepLegalCPF] = useState<string>('')
  const [repLegalNome, setRepLegalNome] = useState<string>("")

  // STATES DE CONTATO CLIENTE

  const [criaContato, setCriaContato] = useState<{telefone:string; tipo:string; uso:string;}[]>([])

  // STATES DE ENDEREÇO CLIENTE

  const [clienteCEP, setClienteCEP] = useState<string>('')
  const [clienteLogradouro, setClienteLogradouro] = useState<string>('')
  const [clienteNum, setClienteNum] = useState<string>('')
  const [clienteComplemento, setClienteComplemento] = useState<string>('')
  const [clienteBairro, setClienteBairro] = useState<string>('')
  const [clienteCidade, setClienteCidade] = useState<string>('')
  const [clienteUF, setClienteUF] = useState<string>('')

  // STATES BENEFICIOS CLIENTE

  const [clienteEspecie, setClienteEspecie] = useState<string>('')
  const [clienteMatricula, setClienteMatricula] = useState<string>('')
  const [clienteSalario, setClienteSalario] = useState<string>('')
  const [clienteMatriculaUF, setClienteMatriculaUF] = useState<string>('')
  const [clienteMatriculaSenha, setClienteMatriculaSenha] = useState<string>('')
  const [clienteTipoConta, setClienteTipoConta] = useState<string>('')
  const [clienteBanco, setClienteBanco] = useState<string>('')
  const [clienteAgencia, setClienteAgencia] = useState<string>('')
  const [clienteConta, setClienteConta] = useState<string>('')

  // STATE FECHA MODAL

  const [modalAberta, setModalAberta] = useState(true)

  return (
    <>
    {modalAberta && (
      <>
      <TituloCSS><PersonIcon/> Dados do Cliente</TituloCSS>
        <ContainerForm noValidate autoComplete="off" onSubmit={salvarCliente}>
          <ContainerDadosCliente>
            <Linha1Cliente>
              <div>
                <label>CPF</label>
                <CampoTexto
                tipo="text"
                valor={clienteCPF}
                onChange={setClienteCPF}
                maxCaracteres={14}
                minCaracteres={14}
                />
              </div>
              <div>
              <label>Nome</label>
                <CampoTexto
                tipo="text"
                valor={clienteNome}
                onChange={setClienteNome}
                />
              </div>
              <div>
              <label>Data Nascimento</label>
                <CampoTexto
                tipo="text"
                valor={clienteDataNasc}
                onChange={setClienteDataNasc}
                maxCaracteres={10}
                />
              </div>
              <div>
              <label>Sexo</label>
                <CampoTexto
                tipo="text"
                valor={clienteSexo}
                onChange={setClienteSexo}
                />
              </div>
            </Linha1Cliente>
            <Linha2Cliente>
              <div>
              <label>Estado Civil</label>
                <CampoTexto
                tipo="text"
                valor={clienteEstadoCivil}
                onChange={setClienteEstadoCivil}
                />
              </div>
              <div>
              <label>Nome Cônjuge</label>
                <CampoTexto
                tipo="text"
                valor={clienteConjuge}
                onChange={setClienteConjuge}
                />
              </div>
              <div>
              <label>RG</label>
                <CampoTexto
                tipo="text"
                valor={clienteRG}
                onChange={setClienteRG}
                />
              </div>
              <div>
              <label>Data Expedição</label>
                <CampoTexto
                tipo="text"
                valor={clienteDtExpedicao}
                onChange={setClienteDtExpedicao}
                />
              </div>
            </Linha2Cliente>
            <Linha3Cliente>
              <div>
              <label>Orgão Emissor</label>
                <CampoTexto
                tipo="text"
                valor={clienteOrgao}
                onChange={setClienteOrgao}
                />
              </div>
              <div>
              <label>UF</label>
                <CampoTexto
                tipo="text"
                valor={clienteUFRG}
                onChange={setClienteUFRG}
                />
              </div>
              <div>
              <label>Nome Pai</label>
                <CampoTexto
                tipo="text"
                valor={clientePai}
                onChange={setClientePai}
                />
              </div>
              <div>
              <label>Nome Mãe</label>
                <CampoTexto
                tipo="text"
                valor={clienteMae}
                onChange={setClienteMae}
                />
              </div>
            </Linha3Cliente>
          </ContainerDadosCliente>
          <TituloCSS><StatusClienteIcon/> Status Cliente</TituloCSS>
          <ContainerStatusCliente>
            <div>
              <CampoTexto
              tipo="checkbox"
              checked={clienteAnalfabeto}
              onChange={() => setClienteAnalfabeto(!clienteAnalfabeto)}
              />
              <label>Cliente Analfabeto</label>
            </div>
            <div>
              <CampoTexto
              tipo="checkbox"
              checked={clienteFalecido}
              onChange={() => setClienteFalecido(!clienteFalecido)}
              />
              <label>Cliente Falecido</label>
            </div>
            <div>
              <CampoTexto
              tipo="checkbox"
              checked={clienteBlacklist}
              onChange={() => setClienteBlacklist(!clienteBlacklist)}
              />
              <label>Cliente está na Blacklist</label>
            </div>

            </ContainerStatusCliente>

          <TituloCSS><RepLegalIcon/>Representante Legal {mostraRepLegal ? (<IoIosArrowDropdown onClick={toggleRepLegal} fontSize={19} color="#004b79"/>) : (<IoIosArrowDropright color="#004b79" fontSize={19} onClick={toggleRepLegal}/>)} </TituloCSS>
          {mostraRepLegal && (
          <ContainerRepLegal>
            <div>
              <label>Nome</label>
              <CampoTexto
              tipo="text"
              valor={repLegalNome}
              onChange={setRepLegalNome}
              />
            </div>
            <div>
              <label>CPF</label>
              <CampoTexto
              tipo="text"
              valor={repLegalCPF}
              onChange={setRepLegalCPF}
              />
            </div>
          </ContainerRepLegal>
        )}

          <TituloCSS><BsPhone color="#004b79" fontSize={18}/>Contatos <FiPlusCircle onClick={addContato} color="#004b79" fontSize={18}/></TituloCSS>
          {criaContato.map((contato,index) => (
          <ContainerContato key={index}>
                <div>
                  <label>Telefone</label>
                  <CampoTexto
                  tipo="tel"
                  valor={contato.telefone}
                  onChange={(valor) => onChangeContato(index,'telefone', valor)}
                  />
                </div>
                <div>
                  <label>Tipo</label>
                  <CampoTexto
                  tipo="text"
                  valor={contato.tipo}
                  onChange={(valor)=> onChangeContato(index,'tipo', valor)}
                  />
                </div>
                <div>
                  <label>Uso</label>
                  <CampoTexto
                  tipo="text"
                  valor={contato.uso}
                  onChange={(valor) => onChangeContato(index, 'uso', valor)}
                  />
                </div>
                <div><TrashIcon /></div>
          </ContainerContato>
        ))}

          <TituloCSS><IoLocationOutline color="#004b79" fontSize={18}/>Endereço</TituloCSS>
          <ContainerEnderecoCliente>
            <Linha1Endereco>
              <div>
              <label>CEP</label>
              <CampoTexto
              tipo="text"
              valor={clienteCEP}
              onChange={setClienteCEP}
              />
              </div>
              <div>
              <label>Logradouro</label>
              <CampoTexto
              tipo="text"
              valor={clienteLogradouro}
              onChange={setClienteLogradouro}
              />
              </div>
              <div>
              <label>Numero</label>
              <CampoTexto
              tipo="text"
              valor={clienteNum}
              onChange={setClienteNum}
              />
              </div>
              <div>
              <label>Complemento</label>
              <CampoTexto
              tipo="text"
              valor={clienteComplemento}
              onChange={setClienteComplemento}
              />
              </div>
            </Linha1Endereco>
            <Linha2Endereco>
              <div>
              <label>Bairro</label>
              <CampoTexto
              tipo="text"
              valor={clienteBairro}
              onChange={setClienteBairro}
              />
              </div>
              <div>
              <label>Cidade</label>
              <CampoTexto
              tipo="text"
              valor={clienteCidade}
              onChange={setClienteCidade}
              />
              </div>
              <div>
              <label>Estado</label>
              <CampoTexto
              tipo="text"
              valor={clienteUF}
              onChange={setClienteUF}
              />
              </div>
            </Linha2Endereco>
          </ContainerEnderecoCliente>

          <TituloCSS><MdKeyboardDoubleArrowRight color="#004b79" fontSize={18}/> Matriculas</TituloCSS>
          <ContainerMatriculas>
            <Linha1Matriculas>
              <div>
                <label>Espécie</label>
                <CampoTexto
                tipo="text"
                valor={clienteEspecie}
                onChange={setClienteEspecie}
                />
              </div>
              <div>
                <label>Nº Matricula</label>
                <CampoTexto
                tipo="text"
                valor={clienteMatricula}
                onChange={setClienteMatricula}
                />
              </div>

              <div>
                <label>Salário</label>
                <CampoTexto
                tipo="text"
                valor={clienteSalario}
                onChange={setClienteSalario}
                />
              </div>
              <div>
                <label>UF</label>
                <CampoTexto
                tipo="text"
                valor={clienteMatriculaUF}
                onChange={setClienteMatriculaUF}
                />
              </div>
              <div>
                <label>Senha</label>
                <CampoTexto
                tipo="text"
                valor={clienteMatriculaSenha}
                onChange={setClienteMatriculaSenha}
                />
              </div>
            </Linha1Matriculas>
            <Linha2Matriculas>
              <div>
                <label>Tipo Conta</label>
                <CampoTexto
                tipo="text"
                valor={clienteTipoConta}
                onChange={setClienteTipoConta}
                />
              </div>
              <div>
              <label>Banco</label>
                <CampoTexto
                tipo="text"
                valor={clienteBanco}
                onChange={setClienteBanco}
                />
              </div>
              <div>
              <label>Agência</label>
                <CampoTexto
                tipo="text"
                valor={clienteAgencia}
                onChange={setClienteAgencia}
                />
              </div>
              <div>
              <label>Conta</label>
                <CampoTexto
                tipo="text"
                valor={clienteConta}
                onChange={setClienteConta}
                />
              </div>
            </Linha2Matriculas>
          </ContainerMatriculas>

          <ContainerBotoesSalvarVoltar>
          <div>
            <Botao>Salvar</Botao>
          </div>
          <div>
            <Botao onClick={() => setModalAberta(false)}>Voltar</Botao>
          </div>
          </ContainerBotoesSalvarVoltar>
        </ContainerForm>
        </>
        )}
    </>

  )
}

export default Cadastrar
