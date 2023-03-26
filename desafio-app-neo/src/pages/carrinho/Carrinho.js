
import { ContainerPedido, ContainerCarrinho, ContainerTable, TituloCarrinho } from "./CarrinhoStyled";


function Carrinho(props) {
    const { carrinho, setCarrinho, irParaOutraTela, contador, setContador,  } = props

    const removerItem = (item) => {
        const novoCarrinho = [...carrinho]
        const newProduct = novoCarrinho.find((pp) => { return pp.id === item.id })
        // console.log(newProduct);
        // console.log(item);
       
        if (item.quantidade > 1) {
            item.quantidade--
            item.total = item.quantidade * item.price;
            // setCarrinho(novoCarrinho)
            setContador(contador-1)
        } else if (item.quantidade === 1) {
            const findQuadrinho = carrinho.filter((pp) =>{return pp.id === newProduct.id})
            console.log(findQuadrinho);
            console.log(novoCarrinho);
            novoCarrinho.splice(novoCarrinho.indexOf(item), 1)
            setContador(contador-1)
        };
        setCarrinho(novoCarrinho);
        
     }
    const addItemCarrinho = (item) => {
        const novoCarrinho = [...carrinho]
        const newProduct = novoCarrinho.find((pp) => { return pp.id === item.id })
        console.log(item);
        if (item) {
            item.quantidade++;
            item.total = item.quantidade * item.price
            console.log(item);
        }
        setCarrinho(novoCarrinho)
        setContador(contador+1)
    }

    let totalCarrinho = 0
    for (let i = 0; i < carrinho.length; i++) {
        totalCarrinho = totalCarrinho + carrinho[i].total;
    }
    let contadorProdutos = 0;

    for (let i = 0; i < carrinho.length; i++) {
        contadorProdutos = contadorProdutos + carrinho[i].quantidade;
    }
    // console.log(idQuadrinho);

    // console.log(carrinho);
    const fraseCarrinhoVazio = <tr><td colSpan={"4"}><h4 style={{ textAlign: "center" }}>Carrinho vazio</h4></td></tr>
    return (

        <ContainerCarrinho>
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
                            <td><img src={item.img} /></td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => removerItem(item)} >-</button>
                                <input value={item.quantidade} />
                                <button onClick={() => addItemCarrinho(item)}>+</button>
                            </td>
                            <td>{item.total.toFixed([2])}</td>
                        </tr>
                    )
                }) :
                    fraseCarrinhoVazio}

            </ContainerTable>
            <button onClick={() => irParaOutraTela(1)}>Voltar</button>
            <ContainerPedido>
                <h3>Produtos: {contadorProdutos}</h3>

                <h4>Total: {totalCarrinho.toFixed([2])}</h4>
                <button>Finalizar compras</button>
            </ContainerPedido>
        </ContainerCarrinho>

        // 
    )
}
export default Carrinho;