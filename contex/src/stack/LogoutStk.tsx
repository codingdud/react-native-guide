import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screen/LogoutSreen/Login'
import Register from '../screen/LogoutSreen/Register'


const Stack = createNativeStackNavigator<logoutStackPramList>()
const LogoutStk = () => {
  return (
    <Stack.Navigator initialRouteName='login'>
      <Stack.Screen 
      name="login" 
      component={Login} 
      options={{title:'Login Page',headerTintColor:'blue',}}
      />
      <Stack.Screen 
      name="register" 
      component={Register} 
      options={{title:'Register Page',headerTintColor:'blue',}}
      />
    </Stack.Navigator>
  )
}

export default LogoutStk