import React from 'react'
import About from '../components/About'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type rootStackPramList={
    Home:undefined,
    About:undefined,
  }
  const Stack = createNativeStackNavigator<rootStackPramList>()
const AboutStk = () => {
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

export default AboutStk