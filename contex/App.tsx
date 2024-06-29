import { NavigationContainer } from '@react-navigation/native'
import { ContexProvider } from './src/hooks/contex'
import Router from './src/stack/Router.tsx'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <GestureHandlerRootView>
      <ContexProvider>
        <NavigationContainer>
          <Router/>
        </NavigationContainer>
      </ContexProvider>
    </GestureHandlerRootView>
  )
}

export default App
