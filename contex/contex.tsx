import {  Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react"

export type togoType={
    toggal:boolean,
    setToggle:Dispatch<SetStateAction<boolean>>
}
const defaultValue={
    toggle:true,
    setToggle:()=>{}

}
export const TogoContext=createContext<typeTooggle>(defaultValue)

export const useTogoContext=()=>{
    const context=useContext(TogoContext)
    if(!context){
        throw new Error('useTogoContext must be used within a TogoContext')
    }
    return context
}
export const ContexProvider:React.FC<PropsWithChildren>=({children})=> {
    const [toggle,setToggle]=useState(false)
  return (
    <TogoContext.Provider value={{toggle,setToggle}}>
        {children}
    </TogoContext.Provider>
  )
}
