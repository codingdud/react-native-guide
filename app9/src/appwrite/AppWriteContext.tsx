
import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react'
import AppWrite from './service'

type AppContexType={
    appwrite:AppWrite;
    isLoggedIn:boolean;
    setIsLoggedIn:Dispatch<SetStateAction<boolean>>;
    toggle:()=>void;
}
const defaultValue={
    appwrite:new AppWrite(),
    isLoggedIn:true,
    setIsLoggedIn:()=>{},
    toggle:()=>{}
}

export const AppWriteContext=createContext<appInterface>(defaultValue)

export const AppWriteProvider:React.FC<PropsWithChildren> = ({children}) => {
    const [isLoggedIn,setIsLoggedIn]=useState(true);
    console.log('context->',isLoggedIn)
    function toggle(){
        console.log('istogal')
        setIsLoggedIn(!isLoggedIn)
    }
    const defaultValue={
        appwrite:new AppWrite(),
        isLoggedIn,
        setIsLoggedIn,
        toggle
    }
  return (
   <AppWriteContext.Provider value={defaultValue}>
    {children}
   </AppWriteContext.Provider>
  )
}
