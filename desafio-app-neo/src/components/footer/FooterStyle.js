import styled from "styled-components";

export const Container = styled.footer`
  border: 1px solid white;
  width: auto;
  margin:auto;
  display: flex;
  flex-direction: row;
 padding-top:40px;
  background-color: #741f16;
  color: white;
  
  /* text-align: center; */
  img {
    width: 200px;
    height: 200px;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: auto;
  margin:auto;
 
  }
`;

export const Icons = styled.aside`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 60%;
  margin:auto;
  margin-bottom: 20px;
  right: 170px;
  position: relative;
  
  img {
    width: 50px;
    height: 50px;
    @media (max-width: 800px) {
    width: 40px;
    height: 40px;
    }
  }
  a {
    img {
      transition: all 0.5s;
    }
    img:hover {
      width: 60px;
      height: 60px;
    }
  }
  nav{
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 40px;
    @media (max-width: 800px) {
      padding: 0px;
  }
  }
  h1 {
    font-size: 23px;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    /* width: auto; */
  position: none;
  background-color: #741f16;
  display: flex;
  border-radius: 5%;
  justify-content: center;
  }
`;
