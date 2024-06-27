import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react"
import * as Keychain from 'react-native-keychain';

export type togoType={
    toggal:boolean,
    setToggle:Dispatch<SetStateAction<boolean>>
}
const defaultValue={
    authState:{
        accessToken: null,
        refreshToken: null,
        authenticated: null,
    },
    setAuthState:()=>{},
    getAccessToken:()=>{},
    logout:()=>{},
    toggle:true,
    setToggle:()=>{}

}
export const Context=createContext<typeTooggle>(defaultValue)

export const useStateContext=()=>{
    const context=useContext(Context)
    if(!context){
        throw new Error('useTogoContext must be used within a TogoContext')
    }
    return context
}
export const ContexProvider:React.FC<PropsWithChildren>=({children})=> {
    const [toggle,setToggle]=useState(false)
    const [authState,setAuthState]=useState(
        {
            accessToken: null,
            refreshToken: null,
            authenticated: false,
        }
    )
    const getAccessToken = () => {
        return authState.accessToken;
    };

    const logout=()=>{
        Keychain.resetGenericPassword()
        setAuthState({
            accessToken: null,
            refreshToken: null,
            authenticated: false,
        })   
    }
  return (
    <Context.Provider value={{authState,logout,setAuthState,getAccessToken,toggle,setToggle}}>
        {children}
    </Context.Provider>
  )
}
