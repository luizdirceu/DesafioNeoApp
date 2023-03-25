import { useContext } from "react";
import { Context } from "../../contexts/Contexts";
import { Container } from "./DetailsStyled";
import Header from "../../components/header/Header";
function Details(props) {
    const { title, quadrinho, quadrinhos, details, irParaOutraTela } = props
    const context = useContext(Context)
const frase= "Sinopse não existe"
    return (
        <>
            <Header />
            <Container>
                <div>
                    <img src={details[0]} />
                </div>
<div className="descricao">
<h1>{details[1]};</h1>
<h3>id: {details[2]}</h3>
<h3>DESCRIÇÃO</h3>
<p>{details[3] === "" ? frase : details[3]}</p>
<p>{details[4] === undefined ? frase : details[4].text}</p>
</div>
<button onClick={() => irParaOutraTela(1)}>voltar</button>
            </Container>
        </>)
}

export default Details;