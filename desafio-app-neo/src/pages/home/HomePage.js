import Header from "../../components/header/Header";

function HomePage(props){

return(
    <>
    <Header/>
<div className="home">
    {props.render}
</div>
</>
)}
export default HomePage;