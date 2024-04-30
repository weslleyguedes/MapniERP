import styled from "styled-components"
import CampoTexto from "../Components/CampoTexto"
import { IoNewspaperOutline } from "react-icons/io5";
import { ChangeEvent, useState } from "react";
import Botao from "../Components/Botao";
import { IoClose } from "react-icons/io5";
import CampoSelect from "../Components/CampoSelect";
import { LuFileBarChart } from "react-icons/lu";
import { PiHandshakeLight } from "react-icons/pi";

const ContainerForm = styled.div`
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
const BoxTituloEBotao = styled.div`
  display:flex;
  justify-content:space-between;
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
const TituloCSS = styled.h1`
  display:flex;
  align-items:center;
  gap:6px;
  margin-bottom:20px;
`
const ContainerProposta = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  margin-bottom:20px;
`
const PropostaLinha1 = styled.div`
  margin-bottom:12px;
  display:flex;
  gap:20px;

  & > div:last-child input {
    width:380px;
  }
`
const PropostaLinha2 = styled.div`
  margin-bottom:12px;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  gap: 20px;
  width:100%;
`
const PropostaLinha3 = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(0, 1fr));
  gap:20px;
  margin-bottom:12px;
`
const PropostaLinha4 = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(0,1fr));
gap: 20px;
width:100%;
`
const ContainerPortabilidade = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin-bottom:20px;
  width:100%;
`
const PortLinha1 = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(0, 1fr));
  margin-bottom:12px;
  width:100%;
`
const PortLinha2 = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(0,1fr));
  gap: 20px;
  width:100%;
  margin-bottom:12px;
`
const PortLinha3 = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(0,1fr));
  gap: 20px;
  width:100%;
`
const ContainerOrigem = styled.div`
display:flex;
flex-wrap:wrap;
width:100%;
margin-bottom:20px;
`
const OrigemLinha1 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  gap: 20px;
  width: 100%;
  margin-bottom:12px;
  & div select {
    width: 100%;
    max-width: 435px; /* Definindo uma largura máxima para evitar que o select ultrapasse este valor */
  }
`
const ContainerBotoes = styled.div`
display:flex;
gap:10px;
button {
  background-color:transparent;
  padding:10px 12px !important;
  margin:0;
  border:1px solid var(--preto-padrao);
}
button:hover {
  background-color:var(--amarelo-padrao);
}
& button:last-child:hover {
  background-color:#c14646;
  color:#ffffff;
}
`
//ESTILIZACAO DOS ICONES

const PapelIcon = styled(IoNewspaperOutline)`
color:var(--azul-icones);
font-size:15px;
`
const PortIcon = styled(LuFileBarChart)`
font-size:15px;
color:var(--azul-icones);
`
const OrigemIcon = styled(PiHandshakeLight)`
color:var(--azul-icones);
font-size:18px;
`

const Proposta = () => {

    // DADOS DA PROPOSTA

    const [valorData, setValorData] = useState('')
    const [matriculaTeste, setMatriculaTeste] = useState('')
    const [bancoProposta, setBancoProposta] = useState('')
    const [promotora, setPromotora] = useState('')
    const [orgaoProposta, setOrgaoProposta] = useState('')
    const [operacao, setOperacao] = useState('')
    const [tabela, setTabela] = useState('')
    const [numeroContrato, setNumeroContrato] = useState('')
    const [confirmaPort, setConfirmaPort] = useState('')
    const [valorParcela, setValorParcela] = useState('')
    const [valorLiberado, setValorLiberado] = useState('')
    const [totalFinanciado, setTotalFinanciado] = useState('')

    // DADOS PORTABILIDADE

    const [abreCampoPort, setAbreCampoPort] = useState(false) // abrir o campo de port
    const [bancoPort, setBancoPort] = useState('')
    const [numeroContratoPort, setNumeroContratoPort] = useState('')
    const [parcelaPort, setParcelaPort] = useState('')
    const [saldoDevedor, setSaldoDevedor] = useState('')
    const [taxaContratoPort, setTaxaContratoPort] = useState('')
    const [prazoOriginalPort, setPrazoOriginalPort] = useState('')
    const [parcelasPagasPort, setParcelasPagasPort] = useState('')
    const [parcelasRestantesPort, setParcelasRestantesPort] = useState('')

    // ORIGEM PROPOSTA

    const [equipe, setEquipe] = useState('')
    const [vendedor, setVendedor] = useState('')
    const [origemVenda, setOrigemVenda] = useState('')

    // FUNCOES

    const abrirCampoPort = (e:ChangeEvent<HTMLSelectElement>) => {
      setConfirmaPort(e.target.value);
      if (e.target.value === "Sim") {
        setAbreCampoPort(true)
      } else {
        setAbreCampoPort(false)
      }
    }


  return (
        <>
        <BoxTituloEBotao>
        <TituloCSS><PapelIcon />Proposta</TituloCSS>
        <Botao><IoClose/></Botao>
        </BoxTituloEBotao>

      <ContainerForm>

        <ContainerProposta>
          <PropostaLinha1>
          <div>
              <label>Data</label>
              <CampoTexto
              tipo="text"
              valor={valorData}
              onChange={(e) => setValorData(e.target.value)}
              />
            </div>

              <div>
                <label>Matrícula</label>
                <CampoTexto
                tipo="text"
                valor={matriculaTeste}
                onChange={(e) => setMatriculaTeste(e.target.value)}
                />
              </div>
          </PropostaLinha1>

          <PropostaLinha2>
              <div>
                <label>Banco</label>
                <CampoSelect
                valor={bancoProposta}
                aoSelecionar={(e) => setBancoProposta(e.target.value)}
                ><option value="">banco proposta</option>
                </CampoSelect>
              </div>

              <div>
                <label>Promotora</label>
                <CampoSelect
                valor={promotora}
                aoSelecionar={(e) => setPromotora(e.target.value)}
                ><option value="">promotora</option>
                </CampoSelect>
              </div>

              <div>
                <label>Orgão</label>
                <CampoSelect
                valor={orgaoProposta}
                aoSelecionar={(e) => setOrgaoProposta(e.target.value)}
                ><option value="">orgao</option>
                </CampoSelect>
              </div>

              <div>
                <label>Operação</label>
                <CampoSelect
                valor={operacao}
                aoSelecionar={(e) => setOperacao(e.target.value)}
                ><option value="">Operacao</option>
                </CampoSelect>
              </div>

          </PropostaLinha2>

          <PropostaLinha3>
            <div>
                <label>Tabela</label>
                <CampoSelect
                valor={tabela}
                aoSelecionar={(e) => setTabela(e.target.value)}
                ><option value="">tabela</option>
                </CampoSelect>
              </div>

            <div>
              <label>Nº Contrato</label>
              <CampoTexto
              tipo="text"
              valor={numeroContrato}
              onChange={(e) => setNumeroContrato(e.target.value)}
              />
            </div>

          </PropostaLinha3>

          <PropostaLinha4>
            <div>
              <label>Portabilidade?</label>
              <CampoSelect
              valor={confirmaPort}
              aoSelecionar={abrirCampoPort}
              ><option value="Nao">Não</option>
                <option value="Sim">Sim</option>
              </CampoSelect>
            </div>

            <div>
              <label>Parcela</label>
              <CampoTexto
              tipo="text"
              valor={valorParcela}
              onChange={(e) => setValorParcela(e.target.value)}
              />
            </div>

            <div>
              <label>Valor Liberado</label>
              <CampoTexto
              tipo="text"
              valor={valorLiberado}
              onChange={(e) => setValorLiberado(e.target.value)}
              />
            </div>

            <div>
              <label>Total Financiado</label>
              <CampoTexto
              tipo="text"
              valor={totalFinanciado}
              onChange={(e) => setTotalFinanciado(e.target.value)}
              />
            </div>
          </PropostaLinha4>
        </ContainerProposta>

        {abreCampoPort && (
          <>
        <TituloCSS><PortIcon />Dados da Portabilidade</TituloCSS>
        <ContainerPortabilidade>
          <PortLinha1>
            <div>
              <label>Banco</label>
              <CampoSelect
              valor={bancoPort}
              aoSelecionar={(e) => setBancoPort(e.target.value)}
              ><option value="">BANCO MERCANTIL DO BRASIL</option>
              </CampoSelect>
            </div>
          </PortLinha1>

          <PortLinha2>
          <div>
              <label>Nº Contrato</label>
              <CampoTexto
              tipo="text"
              valor={numeroContratoPort}
              onChange={(e) => setNumeroContratoPort(e.target.value)}
              />
            </div>

            <div>
              <label>Parcela</label>
              <CampoTexto
              tipo="text"
              valor={parcelaPort}
              onChange={(e) => setParcelaPort(e.target.value)}
              />
            </div>

            <div>
              <label>Saldo Devedor</label>
              <CampoTexto
              tipo="text"
              valor={saldoDevedor}
              onChange={(e) => setSaldoDevedor(e.target.value)}
              />
            </div>
          </PortLinha2>

          <PortLinha3>
            <div>
              <label>Taxa Contrato</label>
              <CampoTexto
              tipo="text"
              valor={taxaContratoPort}
              onChange={(e) => setTaxaContratoPort(e.target.value)}
              />
            </div>

            <div>
              <label>Prazo Original</label>
              <CampoTexto
              tipo="text"
              valor={prazoOriginalPort}
              onChange={(e) => setPrazoOriginalPort(e.target.value)}
              />
            </div>

            <div>
              <label>Parcelas Pagas</label>
              <CampoTexto
              tipo="text"
              valor={parcelasPagasPort}
              onChange={(e) => setParcelasPagasPort(e.target.value)}
              />
            </div>

            <div>
              <label>Parcelas Restantes</label>
              <CampoTexto
              tipo="text"
              valor={parcelasRestantesPort}
              onChange={(e) => setParcelasRestantesPort(e.target.value)}
              />
            </div>
          </PortLinha3>

        </ContainerPortabilidade>
        </>
        )}


        <TituloCSS><OrigemIcon />Detalhes Venda</TituloCSS>
          <ContainerOrigem>
            <OrigemLinha1>
              <div>
                  <label>Equipe</label>
                  <CampoSelect
                  valor={equipe}
                  aoSelecionar={(e) => setEquipe(e.target.value)}
                  ><option value=""></option>
                  </CampoSelect>
              </div>

              <div>
                  <label>Vendedor</label>
                  <CampoSelect
                  valor={vendedor}
                  aoSelecionar={(e) => setVendedor(e.target.value)}
                  >
                    <option value="">vendedor</option>
                  </CampoSelect>
              </div>

              <div>
                <label>Origem</label>
                <CampoSelect
                valor={origemVenda}
                aoSelecionar={(e) => setOrigemVenda(e.target.value)}
                ><option value="">origem venda</option>
                </CampoSelect>
              </div>
            </OrigemLinha1>

          </ContainerOrigem>

          <ContainerBotoes>
            <Botao>Salvar</Botao>
            <Botao>Cancelar</Botao>
          </ContainerBotoes>


      </ContainerForm>
      </>
      )
}

export default Proposta
