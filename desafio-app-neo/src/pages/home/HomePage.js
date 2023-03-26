import Header from "../../components/header/Header";

function HomePage(props){

return(
    <>
    <Header/>
   <h3 className="h3">Carrinho: {props.contador}</h3> 
<div className="home">
    {props.render}
</div>
</>
)}
export default HomePage;