import React, { Fragment } from 'react'
import { useTogoContext } from '../contex'
import AboutStk from './AboutStk'
import HomeStk from './HomeStk'

const Router = () => {
    const{toggle,setToggle}=useTogoContext()
    console.log("router",toggle)
  return (
    <Fragment>
      {toggle?<AboutStk/>:<HomeStk/>}
    </Fragment>
  )
}

export default Router