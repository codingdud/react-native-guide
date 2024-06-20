import { StyleSheet } from 'react-native'
import  {NavigationContainer} from '@react-navigation/native'
import  {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './screens/Home';
import Details from './screens/Details';
export type rootStackPramList={
  Home:undefined,
  Details:{product:Product}
}

const Stack = createNativeStackNavigator<rootStackPramList>()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{title:'Trending Products'}}
        />
        <Stack.Screen 
        name="Details" 
        component={Details} 
        options={{title:'trending product',headerTintColor:'blue',}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})