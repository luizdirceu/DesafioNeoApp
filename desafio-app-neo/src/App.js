
import axios from 'axios';
import md5 from 'md5';
import {useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import GlobalState from './contexts/GlobalState';
import { GlobalStyle } from './GlobalStyle';
import Carrinho from './pages/carrinho/Carrinho';
import Details from './pages/details/Details';
import HomePage from "./pages/home/HomePage"

function App() {
  // Aqui estão todos os estados que foram utilizados sendo passados por props para seus
  // respectivos componentes.
  const [quadrinhos, setQuadrinhos] = useState([])
  const [details, setDetails] = useState([])
  const [carrinho, setCarrinho] = useState([])
  const [contador, setContador] = useState(0)
  const [tela, setTela] = useState(1)

  // Função que realiza a renderização condicional entre telas
  // passada como props para todas as telas.
  function irParaOutraTela(tela) {
    setTela(tela)
  }
// Todas as constantes utilizadas para a requisição da api, um total de 4 consts.
  const publicKey = "ed5f7efbf95097c3265cb61e1196ec92"
  const privateKey = "3fe3664283d5e512d97866ba9b77c58e20be9d70"
  const time = Number(new Date())
  const hash = md5(time + privateKey + publicKey)

  // O hook que retorna toda nossa api.
  useEffect(() => {
    getQuadrinhos()
  }, [])
  
  // requisição da api.
  const getQuadrinhos = async () => {
    try {
      const response = await axios.get(`https://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`)
      setQuadrinhos(response.data.data.results);
    } catch (error) {
      console.log(error.response)
    }
  }

  // Constante que faz o MAP e retorna todos os quadrinhos em seus respectivos cards.
  const renderQuadrinhosLista = quadrinhos.map((quadrinho) => {
    return <Card
      quadrinhoTitle={quadrinho.title}
      quadrinhoId={quadrinho.id}
      thumb={quadrinho.thumbnail.path}
      extension={quadrinho.thumbnail.extension}
      quadrinhos={quadrinhos}
      prices={`${quadrinho.prices[0].price}`}
      irParaOutraTela={irParaOutraTela}
      details={details}
      setDetails={setDetails}
      setCarrinho={setCarrinho}
      carrinho={carrinho}
      setContador={setContador}
      contador={contador}
    />
    
  }).reverse()
  

// Função que retorna a tela dentro de um loop Switch Case.
  const renderizaTela = () => {
    switch (tela) {
      case 1:
        return <HomePage irParaOutraTela={irParaOutraTela} 
        render={renderQuadrinhosLista} 
        contador={contador}
        />;
      case 2:
        return <Details irParaOutraTela={irParaOutraTela} details={details} />
      case 3:
        return <Carrinho irParaOutraTela={irParaOutraTela}
          carrinho={carrinho}
          setCarrinho={setCarrinho}
          quadrinhos = {quadrinhos}
          contador={contador}
          setContador={setContador}
        />
    }
  }
  return (
   
    <GlobalState >
      <GlobalStyle/>
      {renderizaTela()}
    </GlobalState>

  );
}


export default App;
