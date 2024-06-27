import React from 'react'
import About from '../screen/About'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type rootStackPramList={
    Home:undefined,
    About:undefined,
  }
  const Stack = createNativeStackNavigator<rootStackPramList>()
const LoginStk = () => {
  return (
    <Stack.Navigator initialRouteName='About'>
        <Stack.Screen 
        name="About" 
        component={About} 
        options={{title:'trending product',headerTintColor:'blue',}}
        />
      </Stack.Navigator>
  )
}

export default LoginStk