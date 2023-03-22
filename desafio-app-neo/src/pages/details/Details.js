import { useContext } from "react";
import { Context } from "../../contexts/Contexts";
import { Container } from "./DetailsStyled";

function Details (props){
const {title, quadrinho, quadrinhos, details} = props
const context = useContext(Context)

return(<Container>
<h1>titulo: {details[1]};</h1>
<span>id: {details[0]}</span>
<p>descrição: {details[2]}</p>
</Container>)
}

export default Details;