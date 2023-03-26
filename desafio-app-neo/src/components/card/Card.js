import { IdStyle, TituloStyle,PStyle, ContainerCard } from "./CardStyled"

function Card(props) {
  // Todas as props recebidas sendo desestruturadas.
  const { quadrinhoTitle, quadrinhoId, quadrinhos, prices, carrinho, thumb,
    extension, irParaOutraTela, setDetails, contador, setContador } = props

    // Função que retorna o detalhe deste quadrinho.
  const renderDetails = () => {
    quadrinhos.filter((item) => {
      if (item.id === quadrinhoId) {
        return setDetails([`${item.thumbnail.path}.${item.thumbnail.extension}`, item.title, 
        item.id, item.description, item.textObjects[0]
      ]);
      }
    })
    irParaOutraTela(2)
  }
  
  // Função para adcionar itens ao carrinho.
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
    if(newProduct){
      newProduct.quantidade++;
      newProduct.total = newProduct.quantidade * newProduct.price;  
     setContador(contador+1)
    }else{
      carrinho.push({
        ...newQuadrinho,
        quantidade: 1,
        total: newQuadrinho.price
      })
      setContador(contador+1)
    }
  }

  // Variavel caso o preço do quadrinho estiver 0.
  var valor = 5.0

  return (
    <ContainerCard>
      <img src={`${thumb}.${extension}`} />
      <TituloStyle>{quadrinhoTitle}</TituloStyle>
      <IdStyle>#ID:{quadrinhoId}</IdStyle>
      <PStyle>R$:{prices !== "0" ? prices.replace(".", ",") : valor}</PStyle>
      <button className="btn-card" onClick={() => addItensCarrinho(quadrinhoId)} >Adicionar ao carrinho</button>
      <button className="btn-card" onClick={() => irParaOutraTela(3)}>Carrinho</button>
      <button className="btn-card" onClick={renderDetails}>Detalhes</button>
    </ContainerCard>

  )
}
export default Card;