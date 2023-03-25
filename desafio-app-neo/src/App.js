
import axios from 'axios';
import md5 from 'md5';
import { useContext, useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import { Context } from './contexts/Contexts';
import GlobalState from './contexts/GlobalState';
import { GlobalStyle } from './GlobalStyle';
import Carrinho from './pages/carrinho/Carrinho';
import Details from './pages/details/Details';
import HomePage from "./pages/home/HomePage"

function App() {
  const [quadrinhos, setQuadrinhos] = useState([])
  const [details, setDetails] = useState([])
  const [carrinho, setCarrinho] = useState([])
  const [quantidade, setQuantidade] = useState(1)

  const [tela, setTela] = useState(1)

  function irParaOutraTela(tela) {
    setTela(tela)
  }

  const publicKey = "ed5f7efbf95097c3265cb61e1196ec92"
  const privateKey = "3fe3664283d5e512d97866ba9b77c58e20be9d70"
  const time = Number(new Date())
  const hash = md5(time + privateKey + publicKey)

  useEffect(() => {
    getQuadrinhos()
  }, [])
  const getQuadrinhos = async () => {
    try {
      const response = await axios.get(`https://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`)
      console.log(response.data.data.results);
      setQuadrinhos(response.data.data.results);
    } catch (error) {
      console.log(error.response)
    }
  }


  // const addItensCarrinho = () => {
  //   const novoCarrinho = [...carrinho];
  //   // const produto = item;
  //   const produtoExistente = novoCarrinho.find((item) => {
  //     return item.id === quadrinhos.id;
  //   });
  //   if (produtoExistente) {
  //     quantidade++
  //   } else {
  //     novoCarrinho.push({
  //       ...quadrinhos,
  //       quantidade: 1,
  //     });
  //   }
  //   console.log(carrinho);
  //   setCarrinho(novoCarrinho);

  // };
  const idQuadrinho = quadrinhos.map((item)=>{
  return item
})
// console.log(idQuadrinho);
  const renderQuadrinhosLista = quadrinhos.map((quadrinho) => {
    return <Card
      quadrinhoTitle={quadrinho.title}
      quadrinhoId={quadrinho.id}
      
      quadrinhoImage={quadrinho.images}
      thumb={quadrinho.thumbnail.path}
      extension={quadrinho.thumbnail.extension}
      quadrinhos={quadrinhos}
      prices={quadrinho.prices[0].price}
      irParaOutraTela={irParaOutraTela}
      details={details}
      setDetails={setDetails}
      setCarrinho={setCarrinho}
      carrinho={carrinho}
      setQuantidade={setQuantidade}
      quantidade={quantidade}
      idQuadrinho={idQuadrinho}
    // addItensCarrinho={addItensCarrinho}
    />
    
  })
  

// console.log(idQuadrinho);


  const renderizaTela = () => {
    switch (tela) {
      case 1 || 4:
        return <HomePage irParaOutraTela={irParaOutraTela} render={renderQuadrinhosLista} />;
      case 2:
        return <Details irParaOutraTela={irParaOutraTela} details={details} />
      case 3:
        return <Carrinho irParaOutraTela={irParaOutraTela}
          carrinho={carrinho}
          setCarrinho={setCarrinho}
          quantidade={quantidade}
          setQuantidade={setQuantidade}
          idQuadrinho={idQuadrinho}
          quadrinhos = {quadrinhos}
        />
    }
  }
  return (
    //     <>
    // <HomePage render={renderQuadrinhosLista}/>
    //     </>
    <GlobalState >
      <GlobalStyle/>
      {renderizaTela()}
    </GlobalState>

  );
}


export default App;
