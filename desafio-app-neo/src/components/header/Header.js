import { HeaderStyle } from "./HeaderStyled";
import marvel from "../../assets/marvel.jpg"
function Header (){

    return (
<HeaderStyle >
    {/* <img src="https://wallpapercave.com/wp/wp2700194.jpg"/> */}
    <img src={marvel} alt="marvel"/>
</HeaderStyle>
    )
}
export default Header;