import { useEffect, useState } from "react";

interface dadosCep {
  cep:string;
  logradouro:string;
  bairro:string;
  localidade:string;
  uf:string;
}

const useFetch = ({cep} : {cep : string}) => {
  const [dados, setDados] = useState<dadosCep | null>(null);
  const [erro, setErro] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!resposta.ok) {
          throw new Error('Erro na requisição');
        } else {
          const dados: dadosCep = await resposta.json();
          setDados(dados);
        }
      } catch (error) {
        console.error(error as Error);
        setErro('Erro na requisição da API');
      }
    };

    fetchData();
  }, [cep]);

  return { dados, erro };
}

export default useFetch
