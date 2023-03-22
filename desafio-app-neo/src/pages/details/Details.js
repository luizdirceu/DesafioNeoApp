import { useContext } from "react";
import { Context } from "../../contexts/Contexts";

function Details (props){
const {title, quadrinho, quadrinhos, details} = props
const context = useContext(Context)

return(<div>
id: {details[0]}
titulo: {details[1]};
descrição: {details[2]}
</div>)
}

export default Details;