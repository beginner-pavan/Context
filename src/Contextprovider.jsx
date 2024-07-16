import { createContext } from "react";

 export const context = createContext();

 export const Contextprovider = ({children})=>{
   return(
    <context.Provider value={{lang:"Tel",loc:"ind"}}>
    {children}
</context.Provider>
   )

}