import { NavigationContainer } from '@react-navigation/native'
import { ContexProvider } from './src/hooks/contex'
import Router from './src/stack/Router.tsx'
import React from 'react'

const App = () => {
  return (
    <ContexProvider>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </ContexProvider>
  )
}

export default App
