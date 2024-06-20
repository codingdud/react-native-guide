import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../components/Home'
export type rootStackPramList={
    Home:undefined,
    About:undefined,
  }
  const Stack = createNativeStackNavigator<rootStackPramList>()
const HomeStk = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{title:'trending home',headerTintColor:'blue',}}
        />
      </Stack.Navigator>
  )
}

export default HomeStk