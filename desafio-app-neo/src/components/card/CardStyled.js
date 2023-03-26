import styled from "styled-components";

export const ContainerCard = styled.section`
height: 95vh;
width: 20vw;
flex-direction: column;
display: flex;
text-align:center;
padding:15px;
border: transparent;
box-shadow: 11px 11px 15px 13px #000000;
border-radius: 10px;
img{
  width: 20vw;
  height: 50vh;
  border-radius: 5%;}
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 60vw;
    display: flex;
    margin: auto;
    flex-direction: column;
    
    flex-wrap: wrap;
    justify-content: center;
    height: 100vh;
    img{
        width: 45vw;
        justify-content:center;
        margin: auto;
    }
  }
`


export const TituloStyle =styled.h3`
font-size:18px;
color: #e7dced;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
text-align: center;
`
export const IdStyle = styled.span`
display: none;
`
export const PStyle = styled.p`
margin:auto;
font-size:23px;
color: #fffbe9;
`
