import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { ContainerMain, ContainerNav, Containernav, Tituloh3 } from "./HomeStyled";

function HomePage(props) {

    return (
        <ContainerMain>
            <Header />
            <Tituloh3>Carrinho: {props.contador}</Tituloh3>
            <ContainerNav>
                {props.render}
            </ContainerNav>
            <Footer/>
        </ContainerMain>
    )
}
export default HomePage;