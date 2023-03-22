import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Contexts"
import Details from "../../pages/details/Details"
import { DivStyle, IdStyle, TituloStyle } from "./CardStyled"

function Card(props) {
  const { quadrinhoTitle, quadrinho, quadrinhos, prices, thumb, extension,irParaOutraTela, setDetails, details } = props

  const context = useContext(Context)
  // const {quadrinhos , setQuadrinhos} = context
  const [quadrinhoCards, setQuadrinhoCards] = useState([])

  const renderDetails = () => {
    quadrinhos.filter((item) => {
      if(item.id === quadrinho) {
        return setDetails([item.id, item.title, item.description]);
      }})
    irParaOutraTela(2)
  }

  return (
    <DivStyle>
      <img src={`${thumb}.${extension}`} />
      <TituloStyle>{quadrinhoTitle}</TituloStyle>
      <IdStyle>#ID:{quadrinho}</IdStyle>
      <span>{prices}</span>

      <button onClick={renderDetails}>Detalhes</button>
    </DivStyle>

  )
}
export default Card;