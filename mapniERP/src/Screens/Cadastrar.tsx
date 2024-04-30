import { ChangeEvent, FormEvent, useState } from "react"
import styled from "styled-components"
import { IoPersonOutline } from "react-icons/io5";
import CampoTexto from "../Components/CampoTexto";
import { BsPersonExclamation } from "react-icons/bs";
import Botao from "../Components/Botao";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { LuTrash } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import CampoSelect from "../Components/CampoSelect";
import arrays from "../../arrays.json"
import useFetch from "../useFetch";

const TituloCSS = styled.h1`
margin-bottom:16px;
display:flex;
align-items:center;
gap:6px;
margin-bottom:20px;
`
const BoxTituloEBotao = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
button {
  margin:0;
  padding:3px 6px;
  margin-bottom:14px;
  background-color:transparent;
  color:var(--preto-padrao);
}
button:hover {
  background-color:#ea4b4b;
  color:white;
}
`
const ContainerForm = styled.form`
display:flex;
flex-direction:column;
input,select {
  border:1px solid var(--cinza-borda-input);
  margin:5px 0;
}

input:focus {
  border:1px solid var(--preto-hover-input);
}
input:hover {
  border:1px solid var(--preto-hover-input);
}
select:hover {
  border:1px solid var(--preto-hover-input);

}
select:focus {
  border:1px solid var(--preto-hover-input);
}
`
const ContainerDadosCliente = styled.div`
display:flex;
flex-wrap:wrap;
margin-bottom:20px;
`
const Linha1Cliente = styled.div`
display:flex;
width:100%;
gap:20px;
margin-bottom:12px;
& > div:nth-child(1) input {
  width:213px;
}
& > div:nth-child(2) input {
  width:313px;
}
& > div:nth-child(4) select {
  width:150px;
}
`
const Linha2Cliente = styled.div`
display:flex;
gap:20px;
margin-bottom:12px;
& > div:nth-child(1) select {
  width:160px;
}
& > div:nth-child(2) input {
    width:253px;
}
& > div:nth-child(3) input {
    width:263px;
}
`
const Linha3Cliente = styled.div`
display:flex;
gap:20px;
width:100%;
& > div:nth-child(2) select {
    width:81px;
}
& > div:nth-child(3) input {
    width:298px;
}
& > div:nth-child(4) input {
    width:298px;
}
`
const ContainerStatusCliente = styled.div`
display:flex;
margin-bottom:20px;
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
margin-bottom:20px;
gap:20px;
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
gap:20px;
margin-bottom:20px;
`
const ContainerEnderecoCliente = styled.div`
display:flex;
flex-wrap:wrap;
margin-bottom:20px;
`
const Linha1Endereco = styled.div`
display:flex;
gap:20px;
margin-bottom:12px;
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
gap:20px;
width:100%;
& > div:nth-child(1) {
  width:350px;
}
& > div:nth-child(2) input {
  width:350px;
}

`
const ContainerMatriculas = styled.div`
display:flex;
flex-wrap:wrap;
width:100%;
margin-bottom:20px;
`
const Linha1Matriculas = styled.div`
display:flex;
width:100%;
gap:20px;
margin-bottom:12px;
& > div:nth-child(1) input {
  width:100px;
}
& > div:nth-child(2) input {
  width:310px;
}
& > div:nth-child(3) input {
  width:212px;
}
& > div:nth-child(4) select {
  width:80px;
}
`
const Linha2Matriculas = styled.div`
display:flex;
gap:20px;
width:100%;
& > div:nth-child(1) select {
  width:200px;
}
& > div:nth-child(2) input {
  width:350px;
}
& > div:nth-child(3) input {
  width:150px;
}
`
const ContainerBotoesSalvarVoltar = styled.div`
display:flex;
gap:10px;
margin-top:4px;
button {
  background-color:transparent;
  padding:10px 12px !important;
  margin:0;
  border:1px solid var(--preto-padrao);
}
button:hover {
  background-color:var(--amarelo-padrao);
}
& div:last-child button:hover {
  background-color:#c14646;
  color:#ffffff;
}
`
//ESTILOS DOS ICONES

const TrashIcon = styled(LuTrash)`
 margin-top:15px;
 color:#cd6b6b;
 cursor:pointer;
 font-size:20px;
 transition:.2s;
 &:hover {
  color:red;
 }
`
const PersonIcon = styled(IoPersonOutline)`
color:var(--azul-icones);
font-size:17px;
`
const StatusClienteIcon = styled(BsPersonExclamation)`
color:var(--azul-icones);
font-size:19px;
`
const SetaDireitaIcon = styled(IoIosArrowDropdown)`
font-size:18px;
color:var(--azul-icones);
cursor:pointer;
transition:.3s;
&:hover {
  transform:scale(1.08);
}
`
const SetaBaixoIcon = styled(IoIosArrowDropright)`
font-size:18px;
color:var(--azul-icones);
cursor:pointer;
transition:.3s;
&:hover {
  transform:scale(1.08);
}
`
const AddIcon = styled(FiPlusCircle)`
 color:var(--azul-icones);
 font-size:16px;
 cursor:pointer;
 transition:.3s;
&:hover {
  transform:scale(1.08);
}
`

const Cadastrar = () => {

  // STATES DE DADOS CLIENTE

  const [clienteCPF, setClienteCPF] = useState<string>('')
  const [clienteNome, setClienteNome] = useState<string>('')
  const [clienteDataNasc, setClienteDataNasc] = useState<string>('')
  const [clienteEstadoCivil, setClienteEstadoCivil] = useState<string>('')
  const [clienteConjuge, setClienteConjuge] = useState<string>('')
  const [clienteSexo, setClienteSexo] = useState<string>('')
  const [clienteRG, setClienteRG] = useState<string>('')
  const [clienteDtExpedicao, setClienteDtExpedicao] = useState<string>('')
  const [clienteOrgao, setClienteOrgao] = useState<string>('')
  const [clienteUFRG, setClienteUFRG] = useState<string>('')
  const [clientePai, setClientePai] = useState<string>('')
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

  const [criaContato, setCriaContato] = useState<{ telefone: string; tipo: string; uso: string; }[]>([])

  // STATES DE ENDEREÇO CLIENTE

  const [abreEndereco, setAbreEndereco] = useState(false)
  const [clienteCEP, setClienteCEP] = useState<string>('')
  const [clienteLogradouro, setClienteLogradouro] = useState<string>('')
  const [clienteNum, setClienteNum] = useState<string>('')
  const [clienteComplemento, setClienteComplemento] = useState<string>('')
  const [clienteBairro, setClienteBairro] = useState<string>('')
  const [clienteCidade, setClienteCidade] = useState<string>('')
  const [clienteUF, setClienteUF] = useState<string>('')

  // STATES BENEFICIOS CLIENTE

  const [clienteMatricula, setClienteMatricula] = useState<{ especie: string; numero: string; salario: string; uf: string; senha: string; tipoConta: string; banco: string, agencia: string, conta: string }[]>([])

  // STATE FECHA MODAL

  const [modalAberta, setModalAberta] = useState(true)

  // HOOK REQUISICAO API CEP

    const {dados} = useFetch({cep: clienteCEP});

  /////////////////////////////////////////////////////////////////////////////

  // FUNCOES DE DADOS CLIENTE

  const salvarCliente = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setModalAberta(false)
    console.log('deu certo')
  }

  const toggleRepLegal = () => {
    setMostraRepLegal(!mostraRepLegal)
  }

  const toggleEndereco = () => {
    setAbreEndereco(!abreEndereco)
  }

  // FUNCOES DO CONTATO CLIENTE

  const addContato = () => {
    setCriaContato([...criaContato, { telefone: "", tipo: "", uso: "" }]);
  }

  const onChangeContato = (index: number, campo: string, event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const valor = event.target.value;
    const newContato = [...criaContato];
    newContato[index] = { ...newContato[index], [campo]: valor };
    setCriaContato(newContato)
  }

  const excluirContato = (index: number) => {
    const novosContatos = [...criaContato];
    novosContatos.splice(index, 1); // Remove o contato na posição do índice
    setCriaContato(novosContatos);
  }

  // FUNCOES DE MATRICULA DO CLIENTE

  const addMatricula = () => {
    setClienteMatricula([...clienteMatricula, { especie: "", numero: "", salario: "", uf: "", senha: "", tipoConta: "", banco: "", agencia: "", conta: "" }])
  }

  const onChangeMatricula = (index: number, campo: string, event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const valor = event.target.value;
    const newMatricula = [...clienteMatricula];
    newMatricula[index] = { ...newMatricula[index], [campo]: valor }
    setClienteMatricula(newMatricula)
  }

  const excluirMatricula = (index: number) => {
    const novasMatriculas = [...clienteMatricula];
    novasMatriculas.splice(index, 1);
    setClienteMatricula(novasMatriculas);
  }

  // FUNCOES ONCHANGE COM CONFIG DE MASCARA

  const onChangeClienteCPF = (event:ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g,'');
    const maskedValue = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4')
    setClienteCPF(maskedValue)
  }
  const onChangeClienteNome = (event:ChangeEvent<HTMLInputElement>) => {
      const valor = event.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
      setClienteNome(valor)
  }
  const onChangeClienteDtNascimento = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\^D/g,'');
    const maskedValue = value.replace(/^(\d{2})(\d{2})(\d{4}).*/, '$1/$2/$3');
    setClienteDataNasc(maskedValue)
  }
  const onChangeOrgaoEmissor = (event:ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    setClienteOrgao(valor)
  }
  const onChangeClienteDtExpedicao = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g,'')
    const maskedValue = value.replace(/^(\d{2})(\d{2})(\d{4}).*/, '$1/$2/$3');
    setClienteDtExpedicao(maskedValue)
  }
  const onChangeRepLegalCPF = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value.replace(/\D/g, "");
    const maskValor = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
    setRepLegalCPF(maskValor)
  }
  const onChangeConjugeCPF = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value.replace(/[^A-Za-z]/g,'');
      setClienteConjuge(valor)
  }
  const onChangeClientePai = (event: ChangeEvent<HTMLInputElement>) => {
      const valor = event.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
      setClientePai(valor)
  }
  const onChangeClienteMae = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    setClienteMae(valor)
  }
  const onChangeRepLegalNome = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    setRepLegalNome(valor)
  }
  const onChangeClienteCEP = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value.replace(/\D/g, "");
    const maskValor = valor.replace(/^(\d{5})(\d{3}).*/, '$1-$2');
    setClienteCEP(maskValor)
  }
  const onChangeClienteBairro = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    setClienteBairro(valor)
  }
  const onChangeClienteCidade = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    setClienteCidade(valor)
  }
  const onChangeClienteUF = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    setClienteUF(valor)
  }
  const onChangeClienteNumeroCasa = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value.replace(/\D/g, "");
    setClienteNum(valor)
  }


  return (
    <>
      {modalAberta && (
        <>
          <BoxTituloEBotao>
            <TituloCSS><PersonIcon /> Dados do Cliente</TituloCSS>
            <Botao onClick={() => setModalAberta(false)}><IoClose /></Botao>
          </BoxTituloEBotao>
          <ContainerForm noValidate autoComplete="off" onSubmit={salvarCliente} action="#" method="GET">
            <ContainerDadosCliente>
              <Linha1Cliente>
                <div>
                  <label>CPF</label>
                  <CampoTexto
                    tipo="text"
                    valor={clienteCPF}
                    onChange={onChangeClienteCPF}
                  />
                </div>

                <div>
                  <label>Nome</label>
                  <CampoTexto
                    tipo="text"
                    valor={clienteNome}
                    onChange={onChangeClienteNome}
                  />
                </div>

                <div>
                  <label>Data Nascimento</label>
                  <CampoTexto
                    tipo="text"
                    valor={clienteDataNasc}
                    onChange={onChangeClienteDtNascimento}
                    maxCaracteres={10}
                  />
                </div>

                <div>
                  <label>Sexo</label>
                  <CampoSelect
                    valor={clienteSexo}
                    aoSelecionar={(e) => setClienteSexo(e.target.value)}
                  ><option value="">Selecione...</option>
                    {arrays["Sexo"].map((item, index) => (
                      <option key={index} value={item}>{item}</option>))}
                  </CampoSelect>
                </div>

              </Linha1Cliente>
              <Linha2Cliente>

                <div>
                  <label>Estado Civil</label>
                  <CampoSelect
                    valor={clienteEstadoCivil}
                    aoSelecionar={(e) => setClienteEstadoCivil(e.target.value)}
                  ><option value="">Selecione...</option>
                    {arrays.EstadoCivil.map((opcao, index) => (
                      <option key={index} value={opcao}>{opcao}</option>
                    ))}
                  </CampoSelect>
                </div>

                <div>
                  <label>Nome Cônjuge</label>
                  <CampoTexto
                    tipo="text"
                    valor={clienteConjuge}
                    onChange={onChangeConjugeCPF}
                  />
                </div>

                <div>
                  <label>RG</label>
                  <CampoTexto
                    tipo="text"
                    valor={clienteRG}
                    onChange={(e) => setClienteRG(e.target.value)}
                  />
                </div>

                <div>
                  <label>Data Expedição</label>
                  <CampoTexto
                    tipo="text"
                    valor={clienteDtExpedicao}
                    onChange={onChangeClienteDtExpedicao}
                    maxCaracteres={10}
                  />
                </div>
              </Linha2Cliente>

              <Linha3Cliente>

                <div>
                  <label>Orgão Emissor</label>
                  <CampoTexto
                    tipo="text"
                    valor={clienteOrgao}
                    onChange={onChangeOrgaoEmissor}
                  />
                </div>

                <div>
                  <label>UF</label>
                  <CampoSelect
                    valor={clienteUFRG}
                    aoSelecionar={(e) => setClienteUFRG(e.target.value)}
                  ><option value=""></option>
                    {arrays.UF.map((uf, index) => (
                      <option key={index} value={uf}>{uf}</option>
                    ))}
                  </CampoSelect>
                </div>

                <div>
                  <label>Nome Pai</label>
                  <CampoTexto
                    tipo="text"
                    valor={clientePai}
                    onChange={onChangeClientePai}
                  />
                </div>

                <div>
                  <label>Nome Mãe</label>
                  <CampoTexto
                    tipo="text"
                    valor={clienteMae}
                    onChange={onChangeClienteMae}
                  />
                </div>

              </Linha3Cliente>

            </ContainerDadosCliente>
            <TituloCSS><StatusClienteIcon /> Status Cliente</TituloCSS>
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

            <TituloCSS>Representante Legal {mostraRepLegal ? (<SetaDireitaIcon onClick={toggleRepLegal} />) : (<SetaBaixoIcon onClick={toggleRepLegal} />)} </TituloCSS>
            {mostraRepLegal && (
              <ContainerRepLegal>

                <div>
                  <label>Nome</label>
                  <CampoTexto
                    tipo="text"
                    valor={repLegalNome}
                    onChange={onChangeRepLegalNome}
                  />
                </div>

                <div>
                  <label>CPF</label>
                  <CampoTexto
                    tipo="text"
                    valor={repLegalCPF}
                    onChange={onChangeRepLegalCPF}
                  />
                </div>

              </ContainerRepLegal>
            )}

            <TituloCSS>Endereço {abreEndereco ? (<SetaDireitaIcon onClick={toggleEndereco} />) : (<SetaBaixoIcon onClick={toggleEndereco} />)}</TituloCSS>
            {abreEndereco && (
              <ContainerEnderecoCliente>
                <Linha1Endereco>

                  <div>
                    <label>CEP</label>
                    <CampoTexto
                      tipo="text"
                      valor={clienteCEP}
                      onChange={onChangeClienteCEP}
                    />
                  </div>

                  <div>
                    <label>Logradouro</label>
                    <CampoTexto
                      tipo="text"
                      valor={dados?.logradouro ? dados?.logradouro : clienteLogradouro}
                      onChange={dados?.logradouro ? undefined : (e) => setClienteLogradouro(e.target.value)}
                    />
                  </div>

                  <div>
                    <label>Numero</label>
                    <CampoTexto
                      tipo="text"
                      valor={clienteNum}
                      onChange={onChangeClienteNumeroCasa}
                    />

                  </div>
                  <div>
                    <label>Complemento</label>
                    <CampoTexto
                      tipo="text"
                      valor={clienteComplemento}
                      onChange={(e) => setClienteComplemento(e.target.value)}
                    />
                  </div>

                </Linha1Endereco>

                <Linha2Endereco>

                  <div>
                    <label>Bairro</label>
                    <CampoTexto
                      tipo="text"
                      valor={dados?.bairro ? dados?.bairro : clienteBairro}
                      onChange={dados?.bairro ? undefined : onChangeClienteBairro}
                    />
                  </div>

                  <div>
                    <label>Cidade</label>
                    <CampoTexto
                      tipo="text"
                      valor={dados?.localidade ? dados?.localidade : clienteCidade}
                      onChange={dados?.localidade ? undefined : onChangeClienteCidade}
                    />
                  </div>

                  <div>
                    <label>Estado</label>
                    <CampoTexto
                      tipo="text"
                      valor={dados?.uf ? dados?.uf : clienteUF}
                      onChange={dados?.uf ? undefined : onChangeClienteUF}
                    />
                  </div>
                </Linha2Endereco>
              </ContainerEnderecoCliente>
            )}

            <TituloCSS>Contatos <AddIcon onClick={addContato} /></TituloCSS>
            {criaContato.map((contato, index) => (
              <ContainerContato key={index}>
                <div>
                  <label>Telefone</label>
                  <CampoTexto
                    tipo="tel"
                    valor={contato.telefone}
                    onChange={(event) => onChangeContato(index, 'telefone', event)}
                    maxCaracteres={11}
                  />
                </div>

                <div>
                  <label>Tipo</label>
                  <CampoSelect
                    valor={contato.tipo}
                    aoSelecionar={(event) => onChangeContato(index, 'tipo', event)}
                  ><option value=""></option>
                    {arrays.TipoDeContato.map((item, index) => (
                      <option key={index} value={item}>{item}</option>
                    ))}
                  </CampoSelect>
                </div>

                <div>
                  <label>Uso</label>
                  <CampoSelect
                    valor={contato.uso}
                    aoSelecionar={(event) => onChangeContato(index, 'uso', event)}
                  ><option value=""></option>
                    {arrays.UsoTelefone.map((uso, index) => (
                      <option key={index} value={uso}>{uso}</option>
                    ))}
                  </CampoSelect>
                </div>

                <div><TrashIcon onClick={() => excluirContato(index)} /></div>
              </ContainerContato>
            ))}

            <TituloCSS>Matriculas <AddIcon onClick={addMatricula} /></TituloCSS>
            {clienteMatricula.map((matricula, index) => (
              <ContainerMatriculas key={index}>
                <TrashIcon onClick={() => excluirMatricula(index)} />
                <Linha1Matriculas>

                  <div>
                    <label>Espécie</label>
                    <CampoTexto
                      tipo="text"
                      valor={matricula.especie}
                      onChange={(event) => onChangeMatricula(index, 'especie', event)}
                    />
                  </div>

                  <div>
                    <label>Nº Matricula</label>
                    <CampoTexto
                      tipo="text"
                      valor={matricula.numero}
                      onChange={(event) => onChangeMatricula(index, 'numero', event)}
                    />
                  </div>

                  <div>
                    <label>Salário</label>
                    <CampoTexto
                      tipo="number"
                      valor={matricula.salario}
                      onChange={(event) => onChangeMatricula(index, 'salario', event)}
                    />
                  </div>

                  <div>
                    <label>UF</label>
                    <CampoSelect
                      valor={matricula.uf}
                      aoSelecionar={(event) => onChangeMatricula(index, 'uf', event)}
                    ><option value=""></option>
                      {arrays.UF.map((uf, index) => (
                        <option key={index} value={uf}>{uf}</option>
                      ))}
                    </CampoSelect>
                  </div>

                  <div>
                    <label>Senha</label>
                    <CampoTexto
                      tipo="text"
                      valor={matricula.senha}
                      onChange={(event) => onChangeMatricula(index, 'senha', event)}
                    />
                  </div>

                </Linha1Matriculas>
                <Linha2Matriculas>

                  <div>
                    <label>Tipo Conta</label>
                    <CampoSelect
                      valor={matricula.tipoConta}
                      aoSelecionar={(event) => onChangeMatricula(index, 'tipoConta', event)}
                    ><option value="">Selecione...</option>
                      {arrays.TipoDeConta.map((conta, index) => (
                        <option key={index} value={conta}>{conta}</option>
                      ))}
                    </CampoSelect>
                  </div>

                  <div>
                    <label>Banco</label>
                    <CampoTexto
                      tipo="text"
                      valor={matricula.banco}
                      onChange={(event) => onChangeMatricula(index, 'banco', event)}
                    />
                  </div>

                  <div>
                    <label>Agência</label>
                    <CampoTexto
                      tipo="text"
                      valor={matricula.agencia}
                      onChange={(event) => onChangeMatricula(index, 'agencia', event)}
                    />
                  </div>

                  <div>
                    <label>Conta</label>
                    <CampoTexto
                      tipo="text"
                      valor={matricula.conta}
                      onChange={(event) => onChangeMatricula(index, 'conta', event)}
                    />
                  </div>

                </Linha2Matriculas>
              </ContainerMatriculas>
            ))}

            <ContainerBotoesSalvarVoltar>
              <div>
                <Botao onClick={() => salvarCliente}>Salvar</Botao>
              </div>
              <div>
                <Botao onClick={() => setModalAberta(!modalAberta)}>Voltar</Botao>
              </div>
            </ContainerBotoesSalvarVoltar>
          </ContainerForm>
        </>
      )}
    </>

  )
}

export default Cadastrar
