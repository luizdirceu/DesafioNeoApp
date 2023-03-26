import { Context } from "./Contexts";

const GlobalState =(props)=>{

    // Explorei muito pouco o context. Utilizei ele somente no retorno do App.
   const data = {

   }


    return(<Context.Provider value={data}>
        {props.children}
        </Context.Provider>)
}
export default GlobalState;