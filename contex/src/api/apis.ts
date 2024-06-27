import axios from './axios';
import { useStateContext } from '../hooks/contex';
import * as Keychain from 'react-native-keychain';
import { Alert } from 'react-native';

export const useLogin=()=>{
    const {setAuthState}=useStateContext()
    const Loginapi=async(formData:any)=>{
        console.log(formData)
        try {
        const response = await axios.post('/users/loginMobile',formData)
        //console.log(response.data)
        const {accessToken, refreshToken} = response.data;
        if(accessToken===undefined){
            //awefrathrow new Error(JSON.stringify({ message:response.data.message }));  
        }
        setAuthState({
            accessToken,
            refreshToken,
            authenticated:true
        })
        await Keychain.setGenericPassword(
            'token', 
            JSON.stringify({accessToken, refreshToken})
        );
        } catch (error: any) {
            const errorMessage = JSON.parse(error.message);
            Alert.alert(errorMessage.message);
        }
    }
    return Loginapi
}