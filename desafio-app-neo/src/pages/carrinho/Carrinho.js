import { useState } from "react";


function Carrinho(props) {
    const { carrinho, setCarrinho, irParaOutraTela, quantidade, setQuantidade, idQuadrinho, quadrinhos } = props

    // const [resultado, setResultado] = useState(0)
    // // console.log(quadrinhos.id);
    // const onClickAcrescentarQuantidade = (idQuadrinho) => {
    //     // const findQuadrinho = quadrinhos.find((item) => item.id === idQuadrinho.value)
    //     // console.log(findQuadrinho);
    //     for (let i = 0; i < carrinho.length; i++) {
    //         const newProduct = carrinho.find((item) => {return item.id === carrinho[i].id})
    //         if (carrinho[i].id === newProduct.id) {
    //           console.log(carrinho[i].quantidade++); 
    //         }
    //         // console.log(newProduct);
    //     }

    // }
    // const onClickRemoverQuantidade = () => {
    //     if (quantidade === 2 || quantidade > 1) {
    //         return quantidade - 1
    //     }
    // }
    const removerItem = (item) => {
        const novoCarrinho = [...carrinho]
        const newProduct = novoCarrinho.find((pp) => { return pp.id === item.id })
        console.log(newProduct);
        console.log(item);
        if (item.quantidade > 1) {
            item.quantidade--
            item.total = item.quantidade * item.price;
            // setCarrinho(novoCarrinho)
        } else if((item.quantidade === 1)){
            novoCarrinho.shift(item)
        }
            setCarrinho(novoCarrinho);
    };

    // console.log(idQuadrinho);

    // console.log(carrinho);

    return (

        <section className="container-carrinho">
            <h1>Carrinho de compras</h1>
            <table className="table">
                <tr>
                    <td>produto</td>
                    <td>Preço</td>
                    <td>quantidade</td>
                    <td>Total</td>
                </tr>
                {/* </table> */}
                {carrinho.length > 0 && carrinho.map((item) => {
                    return (
                        // <table className="table-carrinho">
                        <tr>
                            <td><img src={item.img} /></td>
                            <td>{item.price}</td>
                            <td>
                                {/* <button onClick={onClickRemoverQuantidade}>-</button> */}
                                {/* {item.quantidade === 1 ? item.quantidade : } */}

                                {item.quantidade}
                                <button onClick={() => removerItem(item)}>---</button>

                                {/* <button onClick={() => onClickAcrescentarQuantidade(idQuadrinho)}>+</button> */}
                            </td>
                            <td>{item.total}</td>
                        </tr>

                    )
                })}
            </table>
            <button onClick={() => irParaOutraTela(1)}>voltar</button>
<section>
    <p>Produtos:</p>

    <p>Total:</p>
</section>
        </section>


    )
}
export default Carrinho;