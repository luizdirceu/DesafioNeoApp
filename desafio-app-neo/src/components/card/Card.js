import { logDOM } from "@testing-library/react"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Contexts"
import Details from "../../pages/details/Details"
import { DivStyle, IdStyle, TituloStyle,PStyle } from "./CardStyled"

function Card(props) {
  const { quadrinhoTitle, quadrinhoId, quadrinhos, prices, carrinho, thumb,
    extension, irParaOutraTela, setDetails, details, setCarrinho, setQuantidade, quantidade, idQuadrinho } = props
  // console.log(quadrinhos);
  const context = useContext(Context)
  // const {quadrinhos , setQuadrinhos} = context
  const [quadrinhoCards, setQuadrinhoCards] = useState(false)

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
      price: findQuadrinho.prices[0].price,
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
    }else{
      carrinho.push({
        ...newQuadrinho,
        quantidade: 1,
        total: newQuadrinho.price
      })
      // setCarrinho([...carrinho, {...newQuadrinho}])
    }
    // carrinho.includes(newProduct) ? setCarrinho([...carrinho], setQuantidade(newProduct.quantidade+1))
    // : 
    // setCarrinho([...carrinho, {...newQuadrinho}])
    //  || setQuantidade(quantidade+1)
    // if (newProduct === undefined) {
    //   setQuantidade(1)
    //   console.log(newProduct);
    //  return setCarrinho([...carrinho, {...newQuadrinho}])
      
    //   // setQuantidade(quantidade+1)
    // } 
    // // else if(newQuadrinho.id === newProduct){
    // //   console.log(newProduct.id);
    // // }
    // // else if(newQuadrinho.id === newProduct.id){
    // //   console.log(newProduct);
    // //  return setCarrinho([...carrinho,{...newQuadrinho }])
    // // }
    // else{setCarrinho([{...newQuadrinho }])

    // }


  }
  //  else if(newProduct !== undefined){ setQuantidade(+1)}
  //  else{
  //   setCarrinho([...carrinho, {quantidade: setQuantidade(quantidade+1)}])
  //  }

  // console.log(carrinho);




  return (
    <DivStyle>
      <img src={`${thumb}.${extension}`} />
      <TituloStyle>{quadrinhoTitle}</TituloStyle>
      <IdStyle>#ID:{quadrinhoId}</IdStyle>
      <PStyle>R$:{prices}</PStyle>
      <button className="btn-card" onClick={() => addItensCarrinho(quadrinhoId)} >Adicionar ao carrinho</button>
      <button className="btn-card" onClick={() => irParaOutraTela(3)}>Carrinho</button>
      <button className="btn-card" onClick={renderDetails}>Detalhes</button>
    </DivStyle>

  )
}
export default Card;