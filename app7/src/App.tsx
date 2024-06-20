import { StyleSheet, Text, View } from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './screens/Home'
import Details from './screens/Details'


export type RootStackParamList = {
  Home: undefined;
  Details:{productId:string}
};

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{title:'trending Products'}}
        />
        <Stack.Screen 
        name="Details" 
        component={Details}
        options={{title:'Product Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})