import styled from "styled-components";

export const ContainerCarrinho = styled.section`
 display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap:50px;
  background-color:#d8ffff;
  border:7px solid black;
  margin: 20px 200px;
  padding: 20px;
  button {
  padding: 4px;
  margin: auto;
  font-size: 15px;
  background-color:#292429;
  color: bisque;
  border-radius: 5px;
  cursor:pointer;
  }
  h5{
    font-size: 15px;
  }
  input{
    width: 20px;
    border: 2px solid black;
    text-align: center;
  }
`
export const TituloCarrinho = styled.h1`
width: 20vw;
margin: auto;
border-left: 5px solid black;
border-right: 5px solid black;

`


export const ContainerTable = styled.table`
 margin: auto;
 padding:5px;
  width: 50vw;
  background-color: blanchedalmond;
  tr td{
  padding: 8px;
  border:solid 1px #000;
  width: 100px;
}
img{
  width: 50px;
  height: 50px;
}
button{
    margin: 0 10px;
    padding:0;
    width: 35px;

}
`

export const ContainerPedido = styled.section`
  text-align: center;
  left:auto;
  margin: auto;
  gap: 10px;
  width: 20vw;
  height:27vh;
  justify-content: center;
  background-color: #0f6602;
  color: #fff25a;
  border-radius: 10%;
`

