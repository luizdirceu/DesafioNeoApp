import styled from "styled-components";

export const ContainerNav = styled.nav`
margin: auto;
    width: 100%;
    height: auto;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    
      display: flex;
      flex-direction:column;
      height: auto;
      width: auto;
      background-color: #f51e2b;
    
    }
`
export const Container = styled.section`
display:flex;
flex-direction:row;
background-image: linear-gradient(to top, #d43f3f, #df3739, #ea2d32, #f51e2b, #ff0022);
padding:50px;
gap:10px;
justify-content: center;
img{
    width:250px;
    height:70vh;
    border-radius: 5px;
left: 30px;}
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  display: flex;
      flex-direction:column;
      height: auto;
      width: auto;
}
`
export const ContainerDescrição = styled.article`
width: 50vw;
  background-color: #bbb7b7;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid black;
`
export const ContainerIMG = styled.article`
`
export const TituloH1 = styled.h1`
`
export const TituloH3 = styled.h3`
`
export const ContainerP = styled.p`
`
