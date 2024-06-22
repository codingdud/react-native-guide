import React, { Fragment, useCallback, useEffect, useState } from 'react'
import * as Keychain from 'react-native-keychain';

import { useTogoContext } from '../hooks/contex'
import AboutStk from './AboutStk'
import HomeStk from './HomeStk'
import Spinner from '../components/Spinner';

const Router = () => {
  const [status, setStatus] = useState('loading');
  const{setAuthState,toggle}=useTogoContext()
  console.log("router",toggle)
  const loadJWT=useCallback(async()=>{
    try {
      const value = await Keychain.getGenericPassword();
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

  if (status === 'loading') {
    return <Spinner/>;
  }
  return (
    <Fragment>
      {toggle?<AboutStk/>:<HomeStk/>}
    </Fragment>
  )
}

export default Router