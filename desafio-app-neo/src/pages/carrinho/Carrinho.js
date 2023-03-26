
import { ContainerPedido, ContainerCarrinho, ContainerTable, TituloCarrinho } from "./CarrinhoStyled";


function Carrinho(props) {

    // Todas as props recebidas sendo desestruturadas.
    const { carrinho, setCarrinho, irParaOutraTela, contador, setContador,  } = props

    // Função para remover itens do carrinho.
    const removerItem = (item) => {
        const novoCarrinho = [...carrinho]
        // const newProduct = novoCarrinho.find((pp) => { return pp.id === item.id })
         if (item.quantidade > 1) {
            item.quantidade--
            item.total = item.quantidade * item.price;
            setContador(contador-1)
        } else if (item.quantidade === 1) {
            // const findQuadrinho = carrinho.filter((pp) =>{return pp.id === newProduct.id})
            novoCarrinho.splice(novoCarrinho.indexOf(item), 1)
            setContador(contador-1)
        };
        setCarrinho(novoCarrinho);
     }

     // Função dentro do carrinho para adcionar itens ao carrinho.
    const addItemCarrinho = (item) => {
        const novoCarrinho = [...carrinho]
        if (item) {
            item.quantidade++;
            item.total = item.quantidade * item.price
        }
        setCarrinho(novoCarrinho)
        setContador(contador+1)
    }
// Contador do total de todos os itens que estão no carrinho.
    let totalCarrinho = 0
    for (let i = 0; i < carrinho.length; i++) {
        totalCarrinho = totalCarrinho + carrinho[i].total;
    }
// Contador de todos ods produtos que estão dentro do carrinho
    let contadorProdutos = 0;
    for (let i = 0; i < carrinho.length; i++) {
        contadorProdutos = contadorProdutos + carrinho[i].quantidade;
    }
    
// Constante de frase para retornar quando o carrinho estiver vazio.
    const fraseCarrinhoVazio = <tr><td colSpan={"4"}><h4 style={{ textAlign: "center" }}>Carrinho vazio</h4></td></tr>
    
    // Função com alert de compra finalizada!
    const compraFinalizada =()=>{
       
        return alert('Compra realizada com sucesso!')
    }


    return (<ContainerCarrinho>
            <TituloCarrinho>Carrinho de compras</TituloCarrinho>
            <ContainerTable>
                <tr>
                    <td><h5>Produto</h5></td>
                    <td><h5>Preço</h5></td>
                    <td><h5>Quantidade</h5></td>
                    <td><h5>Total</h5></td>
                </tr>
                {carrinho.length > 0 ? carrinho.map((item) => {
                    return (
                        <tr>
                            <td><img src={item.img} alt="quadrinho"/></td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => removerItem(item)} >-</button>
                                <input value={item.quantidade} />
                                <button onClick={() => addItemCarrinho(item)}>+</button>
                            </td>
                            <td>{item.total.toFixed([2])}</td>
                        </tr>
                    )
                }) : fraseCarrinhoVazio}

            </ContainerTable>
            <button onClick={() => irParaOutraTela(1)}>Voltar</button>
            <ContainerPedido>
                <h3>Produtos: {contadorProdutos}</h3>

                <h4>Total: {totalCarrinho.toFixed([2])}</h4>
                <button onClick={compraFinalizada}>Finalizar compras</button>
            </ContainerPedido>
        </ContainerCarrinho>

    )
}
export default Carrinho;