import { logDOM } from "@testing-library/react"
import axios from "axios"
import { useContext, useState } from "react"
import { Context } from "../../contexts/Contexts"
import Details from "../../pages/details/Details"
import { DivStyle, IdStyle, TituloStyle,PStyle } from "./CardStyled"

function Card(props) {
  const { quadrinhoTitle, quadrinhoId, quadrinhos, prices, carrinho, thumb,
    extension, irParaOutraTela, setDetails, contador, setContador } = props
  // console.log(quadrinhos);
  const context = useContext(Context)
  // const {quadrinhos , setQuadrinhos} = context
  

  const renderDetails = () => {
    quadrinhos.filter((item) => {
      if (item.id === quadrinhoId) {
        return setDetails([`${item.thumbnail.path}.${item.thumbnail.extension}`, item.title, 
        item.id, item.description, item.textObjects[0]
      ]);
      }
    })
    // console.log(details);
    irParaOutraTela(2)
  }
 
  // console.log(quadrinhoId);
  const addItensCarrinho = (quadrinhoId) => {
    const newProduct = carrinho.find((item) => { return item.id === quadrinhoId})
    const findQuadrinho = quadrinhos.find((item) => item.id === quadrinhoId)
    const newQuadrinho = {
      img: `${findQuadrinho.thumbnail.path}.${findQuadrinho.thumbnail.extension}`,
      price: findQuadrinho.prices[0].price ||  valor,
      quantidade: 1,
      total: 0,
      id: findQuadrinho.id
    }
    console.log(newQuadrinho);
    if(newProduct){
      newProduct.quantidade++;
      newProduct.total = newProduct.quantidade * newProduct.price;
      // setCarrinho([...carrinho])
     console.log(newQuadrinho.quantidade); 
     console.log(newProduct);
     setContador(contador+1)
    }else{
      carrinho.push({
        ...newQuadrinho,
        quantidade: 1,
        total: newQuadrinho.price
      })
      setContador(contador+1)
      // setCarrinho([...carrinho, {...newQuadrinho}])
    }
  }

  // console.log(carrinho);


  var valor = 5.0

  return (
    <DivStyle>
      <img src={`${thumb}.${extension}`} />
      <TituloStyle>{quadrinhoTitle}</TituloStyle>
      <IdStyle>#ID:{quadrinhoId}</IdStyle>
      <PStyle>R$:{prices !== "0" ? prices.replace(".", ",") : valor}</PStyle>
      <button className="btn-card" onClick={() => addItensCarrinho(quadrinhoId)} >Adicionar ao carrinho</button>
      <button className="btn-card" onClick={() => irParaOutraTela(3)}>Carrinho</button>
      <button className="btn-card" onClick={renderDetails}>Detalhes</button>
    </DivStyle>

  )
}
export default Card;