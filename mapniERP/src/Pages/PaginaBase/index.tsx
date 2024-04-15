import { Outlet } from 'react-router-dom'
import Cabecalho from '../../Components/Cabecalho'
import Rodape from '../../Components/Rodape'


const PaginaBase = () => {
  return (
    <>
      <Cabecalho/>
        <main>
          <Outlet/>
        </main>
      <Rodape/>
    </>
  )
}

export default PaginaBase
