import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'


import {AppWriteContext,} from '../appwrite/AppWriteContext'
import Loading from '../components/Loading'
import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'

export const Router = () => {
    const [isLoading,setIsLoading] =useState<boolean>(true)
    const {appwrite,isLoggedIn,setIsLoggedIn}=useContext(AppWriteContext);
    useEffect(()=>{
        appwrite
         .getCurrentUser()
         .then((response)=>{
            setIsLoading(false)
            console.log("router:->",isLoggedIn)
            if(response){
                setIsLoggedIn(true)
            } 
         })
         .catch((error)=>{
            console.log(error);
            setIsLoading(false)
            setIsLoggedIn(false)
         })
    },[appwrite,setIsLoggedIn])
    if(isLoading){
        return <Loading/>
    }
    
  return (
    <NavigationContainer>
        {isLoggedIn?<AppStack/>:<AuthStack/>}
    </NavigationContainer>
  )
}