import { useContext } from "react";
import { Context } from "../../contexts/Contexts";
import { Container, ContainerButton, ContainerDescrição, TituloH1, TituloH3, ContainerIMG, ContainerP } from "./DetailsStyled";
import Header from "../../components/header/Header";
function Details(props) {
    const { title, quadrinho, quadrinhos, details, irParaOutraTela } = props
    const context = useContext(Context)
    const fraseSinopse = "Quadrinho sem sinopse."
    const fraseDescrição = "Quadrinho sem descrição."
    return (
        <>
            <Header />
            <Container>
                <ContainerIMG>
                    <img src={details[0]} />
                </ContainerIMG>
                <ContainerDescrição className="descricao">
                    <TituloH1>{details[1]};</TituloH1>
                    <TituloH3>ID: {details[2]}</TituloH3>
                    <TituloH3>DESCRIÇÃO</TituloH3>
                    <ContainerP>{details[3] === "" ? fraseDescrição : details[3]}</ContainerP>
                    <TituloH3>SINOPSE</TituloH3>
                    <ContainerP>{details[4] === undefined ? fraseSinopse : details[4].text}</ContainerP>
                    <ContainerButton onClick={() => irParaOutraTela(1)}>Voltar</ContainerButton>
                </ContainerDescrição>
            </Container>
        </>)
}

export default Details;