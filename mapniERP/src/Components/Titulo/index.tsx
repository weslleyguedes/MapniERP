
interface Props {
  children:React.ReactNode;
}

const Titulo = ({children} : Props) => {
  return (
    <h1>
      {children}
    </h1>
  )
}

export default Titulo
