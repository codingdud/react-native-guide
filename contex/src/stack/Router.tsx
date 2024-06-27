import React, { Fragment, useCallback, useEffect, useState } from 'react'
import * as Keychain from 'react-native-keychain';
import { useTogoContext } from '../hooks/contex'
import LoginStk from './LoginStk'
import LogoutStk from './LogoutStk'
import Spinner from '../components/Spinner';

const Router = () => {
  const [status, setStatus] = useState('loading');
  const{authState,setAuthState}=useTogoContext()



  const loadJWT=useCallback(async()=>{
    try {
      const value = await Keychain.getGenericPassword();
      console.log("keychain route",value)
      if (value) {
        const jwt = JSON.parse(value.password);
        setAuthState({
          accessToken: jwt.accessToken||null,
          refreshToken: jwt.refreshToken||null,
          authenticated: jwt.accessToken!==null,
        });
      }
      setStatus('success');
    } catch (error) {
      setStatus('error')
      console.log("keychain error",error)
      setAuthState({
        accessToken: null,
        refreshToken: null,
        authenticated: false,
      })
    }
  },[])
  useEffect(() => {
    loadJWT();
  }, [loadJWT]);

  console.log("authState root",authState)
  if (status === 'loading') {
    return <Spinner/>;
  }
  return (
    <Fragment>
      {authState?.authenticated===true?<LoginStk/>:<LogoutStk/>}
    </Fragment>
  )
}

export default Router