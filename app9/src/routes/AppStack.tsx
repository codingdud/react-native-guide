import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react'

import Home from '../screens/Home'

export type AppStackParamList={
    Home:undefined;
    Apptack:undefined;
}
const Stack = createNativeStackNavigator<AppStackParamList>();
export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign:'center',
      headerBackTitleVisible:false
    }}>
      <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
  )
}