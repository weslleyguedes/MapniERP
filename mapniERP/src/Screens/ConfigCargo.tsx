import styled from "styled-components";
import Titulo from "../Components/Titulo";
import BotaoFechar from "../Components/BotaoFechar";
import CampoTexto from "../Components/CampoTexto";
import { ChangeEvent, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import { RiDonutChartFill } from "react-icons/ri";
import { BsFolder } from "react-icons/bs";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { GoGear } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const Container = styled.div``;
const BoxTituloBotao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const BoxSelectAll = styled.div`
  & div {
    display: flex;
    align-items: center;
  }
  input {
    margin: 0;
    margin-right: 8px;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;
const IconeDash = styled(HiOutlineChartBarSquare)`
  transform: scale(1.5);
  margin-bottom: 2px;
`;
const IconeRocket = styled(IoRocketOutline)`
  transform: scale(1.3);
  margin-bottom: 1px;
`;
const IconeRosca = styled(RiDonutChartFill)`
  transform: scale(1.4);
  margin-bottom: 2px;
`;
const IconeConfig = styled(GoGear)`
  transform: scale(1.4);
  margin-bottom: 1px;
`;
const IconePasta = styled(BsFolder)`
  transform: scale(1.25);
  margin-bottom: 2px;
`;
const IconeDolar = styled(PiCurrencyCircleDollar)`
  transform: scale(1.4);
  margin-bottom: 2px;
`;
const IconeSetaBaixo = styled(IoIosArrowDown)``;
const IconeSetaDir = styled(IoIosArrowForward)``;
const ContainerPermissoes = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  & > div {
    cursor: pointer;
    width: 100%;
    padding: 15px 0;
    border: 1px solid var(--preto-padrao);
    border-radius: 15px;
    font-weight: bold;
    margin-top: 10px;
  }
  input {
    margin: 0;
    margin-right: 8px;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;
const BoxDashboard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    ${IconeDash},${IconeSetaBaixo},${IconeSetaDir} {
      color: var(--amarelo-padrao);
    }
    color: var(--amarelo-padrao);
    background-color: var(--preto-padrao);
    color: white;
  }
  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-left: 10px;
    span {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  & > div:last-child {
    margin-right: 10px;
  }
  input {
    padding: 0;
    border: none;
    margin: 0;
    margin-top: 2px;
  }
`;
const Content = styled.section`
  border: 1px solid var(--preto-padrao);
  border-top: none;
  border-radius: 0px 0px 15px 15px;
  margin-top: 15px;
  & section {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
  }
  input {
    margin: 0;
    margin-left: 10px;
  }
`;
const BoxPropostas = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    ${IconeRocket},${IconeSetaBaixo}, ${IconeSetaDir} {
      color: var(--amarelo-padrao);
    }
    color: var(--amarelo-padrao);
    background-color: var(--preto-padrao);
    color: white;
  }
  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-left: 10px;
    span {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  & > div:last-child {
    margin-right: 10px;
  }
  input {
    padding: 0;
    border: none;
    margin: 0;
    margin-top: 2px;
  }
`;
const BoxAnalytics = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    ${IconeRosca},${IconeSetaBaixo},${IconeSetaDir} {
      color: var(--amarelo-padrao);
    }
    color: var(--amarelo-padrao);
    background-color: var(--preto-padrao);
    color: white;
  }
  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-left: 10px;
    span {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  & > div:last-child {
    margin-right: 10px;
  }
  input {
    padding: 0;
    border: none;
    margin: 0;
    margin-top: 2px;
  }
`;
const BoxOperacao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    ${IconeConfig},${IconeSetaBaixo},${IconeSetaDir} {
      color: var(--amarelo-padrao);
    }
    color: var(--amarelo-padrao);
    background-color: var(--preto-padrao);
    color: white;
  }
  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-left: 10px;
    span {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  & > div:last-child {
    margin-right: 10px;
  }
  input {
    padding: 0;
    border: none;
    margin: 0;
    margin-top: 2px;
  }
`;
const BoxAdm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    ${IconePasta},${IconeSetaBaixo},${IconeSetaDir} {
      color: var(--amarelo-padrao);
    }
    color: var(--amarelo-padrao);
    background-color: var(--preto-padrao);
    color: white;
  }
  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-left: 10px;
    span {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  & > div:last-child {
    margin-right: 10px;
  }
  input {
    padding: 0;
    border: none;
    margin: 0;
    margin-top: 2px;
  }
`;
const BoxFinanceiro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    ${IconeDolar},${IconeSetaBaixo},${IconeSetaDir} {
      color: var(--amarelo-padrao);
    }
    color: var(--amarelo-padrao);
    background-color: var(--preto-padrao);
    color: white;
  }
  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-left: 10px;
    span {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  & > div:last-child {
    margin-right: 10px;
  }
  input {
    padding: 0;
    border: none;
    margin: 0;
    margin-top: 2px;
  }
`;

interface Props {
  funcaoFechaModalConfigCargo: () => void;
}

const ConfigCargo = ({ funcaoFechaModalConfigCargo }: Props) => {
  // INPUTS CHECKBOX

  const [selecionaTodos, setSelecionaTodos] = useState<boolean>(false);

  const [dashValue, setDashValue] = useState<boolean>(false);
  const [propostasCadastradas, setPropostasCadastradas] =
    useState<boolean>(false);
  const [rankingVendas, setRankingVendas] = useState<boolean>(false);
  const [filtro, setFiltro] = useState<boolean>(false);
  const [graficoPizza, setGraficoPizza] = useState<boolean>(false);

  const [propostasValue, setPropostasValue] = useState<boolean>(false);
  const [statusProposta, setStatusProposta] = useState<boolean>(false);
  const [comissionamento, setComissionamento] = useState<boolean>(false);
  const [filtroPropostas, setFiltroPropostas] = useState<boolean>(false);
  const [cadastrarPropostas, setCadastrarPropostas] = useState<boolean>(false);
  const [editarColunas, setEditarColunas] = useState<boolean>(false);
  const [exportarPropostas, setExportarPropostas] = useState<boolean>(false);

  const [analyticsValue, setAnalyticsValue] = useState<boolean>(false);
  const [producao, setProducao] = useState<boolean>(false);
  const [metas, setMetas] = useState<boolean>(false);
  const [desempenho, setDesempenho] = useState<boolean>(false);

  const [operacaoValue, setOperacaoValue] = useState<boolean>(false);
  const [operacoes, setOperacoes] = useState<boolean>(false);
  const [bancos, setBancos] = useState<boolean>(false);
  const [promotoras, setPromotoras] = useState<boolean>(false);
  const [origemVendas, setOrigemVendas] = useState<boolean>(false);
  const [produtos, setProdutos] = useState<boolean>(false);
  const [configMetas, setConfigMetas] = useState<boolean>(false);

  const [admValue, setAdmValue] = useState<boolean>(false);
  const [departamentos, setDepartamentos] = useState<boolean>(false);
  const [cargos, setCargos] = useState<boolean>(false);
  const [equipes, setEquipes] = useState<boolean>(false);
  const [RH, setRH] = useState<boolean>(false);

  const [financeiroValue, setFinanceiroValue] = useState<boolean>(false);
  const [repasseComissao, setRepasseComissao] = useState<boolean>(false);
  const [comissaoRepassada, setComissaoRepassada] = useState<boolean>(false);
  const [contasAPagar, setContasAPagar] = useState<boolean>(false);
  const [contasAReceber, setContasAReceber] = useState<boolean>(false);
  const [relatorios, setRelatorios] = useState<boolean>(false);
  const [contasBancarias, setContasBancarias] = useState<boolean>(false);

  const [showContentDash, setShowContentDash] = useState<boolean>(false);
  const [showContentPropostas, setShowContentPropostas] =
    useState<boolean>(false);
  const [showContentAnalytics, setShowContentAnalytics] =
    useState<boolean>(false);
  const [showContentOperacao, setShowContentOperacao] =
    useState<boolean>(false);
  const [showContentAdm, setShowContentAdm] = useState<boolean>(false);
  const [showContentFinanceiro, setShowContentFinanceiro] =
    useState<boolean>(false);

  const onChangeSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    setSelecionaTodos(isChecked);
    // TITULO DASHBOARD
    setDashValue(isChecked);
    setPropostasCadastradas(isChecked);
    setRankingVendas(isChecked);
    setFiltro(isChecked);
    setGraficoPizza(isChecked);
    // TITULO PROPOSTAS
    setPropostasValue(isChecked);
    setStatusProposta(isChecked);
    setComissionamento(isChecked);
    setFiltroPropostas(isChecked);
    setCadastrarPropostas(isChecked);
    setEditarColunas(isChecked);
    setExportarPropostas(isChecked);
    //TITULO ANALYTICS
    setAnalyticsValue(isChecked);
    setProducao(isChecked);
    setMetas(isChecked);
    setDesempenho(isChecked);
    // TITULO OPERACAO
    setOperacaoValue(isChecked);
    setOperacoes(isChecked);
    setBancos(isChecked);
    setPromotoras(isChecked);
    setOrigemVendas(isChecked);
    setProdutos(isChecked);
    setConfigMetas(isChecked);
    //TITULO ADMINISTRATIVO
    setAdmValue(isChecked);
    setDepartamentos(isChecked);
    setCargos(isChecked);
    setEquipes(isChecked);
    setRH(isChecked);
    //TITULO FINANCEIRO
    setFinanceiroValue(isChecked);
    setRepasseComissao(isChecked);
    setComissaoRepassada(isChecked);
    setContasAPagar(isChecked);
    setContasAReceber(isChecked);
    setRelatorios(isChecked);
    setContasBancarias(isChecked);
  };
  const onChangeDash = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setDashValue(isChecked);
    setPropostasCadastradas(isChecked);
    setRankingVendas(isChecked);
    setFiltro(isChecked);
    setGraficoPizza(isChecked);
  };
  const onChangePropostas = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setPropostasValue(isChecked);
    setStatusProposta(isChecked);
    setComissionamento(isChecked);
    setFiltroPropostas(isChecked);
    setCadastrarPropostas(isChecked);
    setEditarColunas(isChecked);
    setExportarPropostas(isChecked);
  };
  const onChangeAnalytics = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setAnalyticsValue(isChecked);
    setProducao(isChecked);
    setMetas(isChecked);
    setDesempenho(isChecked);
  };
  const onChangeOperacao = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setOperacaoValue(isChecked);
    setOperacoes(isChecked);
    setBancos(isChecked);
    setPromotoras(isChecked);
    setOrigemVendas(isChecked);
    setProdutos(isChecked);
    setConfigMetas(isChecked);
  };
  const onChangeAdm = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setAdmValue(isChecked);
    setDepartamentos(isChecked);
    setCargos(isChecked);
    setEquipes(isChecked);
    setRH(isChecked);
  };
  const onChangeFinanceiro = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setFinanceiroValue(isChecked);
    setRepasseComissao(isChecked);
    setComissaoRepassada(isChecked);
    setContasAPagar(isChecked);
    setContasAReceber(isChecked);
    setRelatorios(isChecked);
    setContasBancarias(isChecked);
  };

  return (
    <Container>
      <BoxTituloBotao>
        <Titulo>Permissões</Titulo>
        <BotaoFechar onClick={() => funcaoFechaModalConfigCargo()} />
      </BoxTituloBotao>

      <BoxSelectAll>
        <div>
          <CampoTexto
            tipo="checkbox"
            checked={selecionaTodos}
            onChange={onChangeSelectAll}
            id="selecionatodos"
          />
          <label htmlFor="selecionatodos">Selecionar Todos</label>
        </div>
      </BoxSelectAll>

      <ContainerPermissoes>
        <BoxDashboard onClick={() => setShowContentDash(!showContentDash)}>
          <div>
            <CampoTexto
              tipo="checkbox"
              checked={dashValue}
              onChange={onChangeDash}
              onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                event.stopPropagation()
              }
            />
            <span>
              <IconeDash />
              Dashboard
            </span>
          </div>
          <div>{showContentDash ? <IconeSetaBaixo /> : <IconeSetaDir />}</div>
        </BoxDashboard>

        {showContentDash && (
          <Content>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={propostasCadastradas}
                onChange={(e) => setPropostasCadastradas(e.target.checked)}
              />
              <span>Propostas Cadastradas</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={rankingVendas}
                onChange={(e) => setRankingVendas(e.target.checked)}
              />
              <span>Ranking de Vendas</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={filtro}
                onChange={(e) => setFiltro(e.target.checked)}
              />
              <span>Filtro</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={graficoPizza}
                onChange={(e) => setGraficoPizza(e.target.checked)}
              />
              <span>Gráfico Pizza</span>
            </section>
          </Content>
        )}

        <BoxPropostas
          onClick={() => setShowContentPropostas(!showContentPropostas)}
        >
          <div>
            <CampoTexto
              tipo="checkbox"
              checked={propostasValue}
              onChange={onChangePropostas}
              onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                event.stopPropagation()
              }
            />
            <span>
              <IconeRocket />
              Propostas
            </span>
          </div>
          <div>
            {showContentPropostas ? <IconeSetaBaixo /> : <IconeSetaDir />}
          </div>
        </BoxPropostas>

        {showContentPropostas && (
          <Content>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={statusProposta}
                onChange={(e) => setStatusProposta(e.target.checked)}
              />
              <span>Status de propostas</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={comissionamento}
                onChange={(e) => setComissionamento(e.target.checked)}
              />
              <span>Comissionamento</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={filtroPropostas}
                onChange={(e) => setFiltroPropostas(e.target.checked)}
              />
              <span>Filtros</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={cadastrarPropostas}
                onChange={(e) => setCadastrarPropostas(e.target.checked)}
              />
              <span>Cadastrar</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={editarColunas}
                onChange={(e) => setEditarColunas(e.target.checked)}
              />
              <span>Editar Colunas</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={exportarPropostas}
                onChange={(e) => setExportarPropostas(e.target.checked)}
              />
              <span>Exportar Propostas</span>
            </section>
          </Content>
        )}
        <BoxAnalytics
          onClick={() => setShowContentAnalytics(!showContentAnalytics)}
        >
          <div>
            <CampoTexto
              tipo="checkbox"
              checked={analyticsValue}
              onChange={onChangeAnalytics}
              onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                event.stopPropagation()
              }
            />
            <span>
              <IconeRosca />
              Analytics
            </span>
          </div>
          <div>
            {showContentAnalytics ? <IconeSetaBaixo /> : <IconeSetaDir />}
          </div>
        </BoxAnalytics>
        {showContentAnalytics && (
          <Content>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={producao}
                onChange={(e) => setProducao(e.target.checked)}
              />
              <span>Produção</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={metas}
                onChange={(e) => setMetas(e.target.checked)}
              />
              <span>Metas</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={desempenho}
                onChange={(e) => setDesempenho(e.target.checked)}
              />
              <span>Desempenho</span>
            </section>
          </Content>
        )}

        <BoxOperacao
          onClick={() => setShowContentOperacao(!showContentOperacao)}
        >
          <div>
            <CampoTexto
              tipo="checkbox"
              checked={operacaoValue}
              onChange={onChangeOperacao}
              onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                event.stopPropagation()
              }
            />
            <span>
              <IconeConfig />
              Operação
            </span>
          </div>
          <div>
            {showContentOperacao ? <IconeSetaBaixo /> : <IconeSetaDir />}
          </div>
        </BoxOperacao>

        {showContentOperacao && (
          <Content>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={operacoes}
                onChange={(e) => setOperacoes(e.target.checked)}
              />
              <span>Operações</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={bancos}
                onChange={(e) => setBancos(e.target.checked)}
              />
              <span>Bancos</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={promotoras}
                onChange={(e) => setPromotoras(e.target.checked)}
              />
              <span>Promotoras</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={origemVendas}
                onChange={(e) => setOrigemVendas(e.target.checked)}
              />
              <span>Origem de Vendas</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={produtos}
                onChange={(e) => setProdutos(e.target.checked)}
              />
              <span>Produtos</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={configMetas}
                onChange={(e) => setConfigMetas(e.target.checked)}
              />
              <span>Configuração de Metas</span>
            </section>
          </Content>
        )}

        <BoxAdm onClick={() => setShowContentAdm(!showContentAdm)}>
          <div>
            <CampoTexto
              tipo="checkbox"
              checked={admValue}
              onChange={onChangeAdm}
              onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                event.stopPropagation()
              }
            />
            <span>
              <IconePasta />
              Administrativo
            </span>
          </div>
          <div>{showContentAdm ? <IconeSetaBaixo /> : <IconeSetaDir />}</div>
        </BoxAdm>
        {showContentAdm && (
          <Content>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={departamentos}
                onChange={(e) => setDepartamentos(e.target.checked)}
              />
              <span>Departamentos</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={cargos}
                onChange={(e) => setCargos(e.target.checked)}
              />
              <span>Cargos</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={equipes}
                onChange={(e) => setEquipes(e.target.checked)}
              />
              <span>Equipes</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={RH}
                onChange={(e) => setRH(e.target.checked)}
              />
              <span>RH</span>
            </section>
          </Content>
        )}
        <BoxFinanceiro
          onClick={() => setShowContentFinanceiro(!showContentFinanceiro)}
        >
          <div>
            <CampoTexto
              tipo="checkbox"
              checked={financeiroValue}
              onChange={onChangeFinanceiro}
              onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                event.stopPropagation()
              }
            />
            <span>
              <IconeDolar />
              Financeiro
            </span>
          </div>
          <div>
            {showContentFinanceiro ? <IconeSetaBaixo /> : <IconeSetaDir />}
          </div>
        </BoxFinanceiro>
        {showContentFinanceiro && (
          <Content>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={repasseComissao}
                onChange={(e) => setRepasseComissao(e.target.checked)}
              />
              <span>Repasse de Comissões</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={comissaoRepassada}
                onChange={(e) => setComissaoRepassada(e.target.checked)}
              />
              <span>Comissões Repassadas</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={contasAPagar}
                onChange={(e) => setContasAPagar(e.target.checked)}
              />
              <span>Contas a Pagar</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={contasAReceber}
                onChange={(e) => setContasAReceber(e.target.checked)}
              />
              <span>Contas a Receber</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={relatorios}
                onChange={(e) => setRelatorios(e.target.checked)}
              />
              <span>Relatórios</span>
            </section>
            <section>
              <CampoTexto
                tipo="checkbox"
                checked={contasBancarias}
                onChange={(e) => setContasBancarias(e.target.checked)}
              />
              <span>Contas Bancárias</span>
            </section>
          </Content>
        )}
      </ContainerPermissoes>
    </Container>
  );
};

export default ConfigCargo;
