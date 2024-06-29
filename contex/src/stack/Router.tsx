import React, { Fragment } from 'react'
import LoginStk from './LoginStk'
import LogoutStk from './LogoutStk'
import MyDrawer from './DrawerStk'

import useLoadJWT from '../utility/useLoadJWT';
import Spinner from '../components/Model/Spinner';

const Router = () => {
  const{status,authState}=useLoadJWT();
  console.log("authState root",authState)
  if (status === 'loading') {
    return <Spinner/>;
  }
  return (
    <Fragment>
      {authState?.authenticated===true?<MyDrawer/>:<LogoutStk/>}
    </Fragment>
  )
}

export default Router