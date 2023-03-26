import { Container, ContainerDescrição, TituloH1, TituloH3, ContainerIMG, ContainerP, ContainerNav } from "./DetailsStyled";
import Header from "../../components/header/Header";

function Details(props) {
    // Todas as props recebidas sendo desestruturadas.
    const { details, irParaOutraTela } = props

   // Constante da frase se a sinopse deste quadrinho não existir.
    const fraseSinopse = "Quadrinho sem sinopse."

    // Constante da frase se a descrição deste quadrinho não existir.
    const fraseDescrição = "Quadrinho sem descrição."
    
    return (
        <ContainerNav>
            <Header />
            <Container>
                <ContainerIMG>
                    <img src={details[0]} alt="Detalhe"/>
                </ContainerIMG>
                <ContainerDescrição className="descricao">
                    <TituloH1>{details[1]};</TituloH1>
                    <TituloH3>ID: {details[2]}</TituloH3>
                    <TituloH3>DESCRIÇÃO</TituloH3>
                    <ContainerP>{details[3] === "" ? fraseDescrição : details[3]}</ContainerP>
                    <TituloH3>SINOPSE</TituloH3>
                    <ContainerP>{details[4] === undefined ? fraseSinopse : details[4].text}</ContainerP>
                    <button className="btn-detalhe" onClick={() => irParaOutraTela(1)}>Voltar</button>
                </ContainerDescrição>
            </Container>
        </ContainerNav>)
}

export default Details;