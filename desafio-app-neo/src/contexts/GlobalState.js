import { Context } from "./Contexts";
import axios from "axios";
import { useEffect, useState } from "react";
import md5 from 'md5';
import Card from "../components/card/Card";
import Details from "../pages/details/Details";
const GlobalState =(props)=>{

     
   const data = {

   }


    return(<Context.Provider value={data}>
        {props.children}
                </Context.Provider>)
}
export default GlobalState;