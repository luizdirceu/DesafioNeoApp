import styled from "styled-components";
export const ContainerMain = styled.main`
`
export const ContainerNav = styled.nav`
display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  top: auto;
  left: auto;
  bottom: auto;
  justify-items: center;
  background-image: linear-gradient(to top, #d43f3f, #df3739, #ea2d32, #f51e2b, #ff0022);
  padding: 30px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: auto;
  margin:auto;
  }
  
`


export const Tituloh3 = styled.h3`
  background-color: #ff0022;
  margin: auto;
  padding: 30px 80px;
  text-decoration: underline;
  font-size: x-large;
  color: #fffaf4;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align: end;
`