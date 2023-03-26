import styled from "styled-components";

export const Container = styled.section`
display:flex;
flex-direction:row;
background-image: linear-gradient(to top, #d43f3f, #df3739, #ea2d32, #f51e2b, #ff0022);
padding:50px;
gap:10px;
justify-content: center;
/* margin:auto; */
/* top: auto; */
img{
    /* position: absolute; */
    width:250px;
    height:70vh;
    border-radius: 5px;
left: 30px;}
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
export const ContainerButton = styled.button`
position: absolute;
left: 65rem;
bottom: 21rem;
  width: 8vw;
  padding: 2px;
  font-size: 15px;
  background-color:#292429;
  color: bisque;
  border-radius: 5px;
  cursor:pointer;
`