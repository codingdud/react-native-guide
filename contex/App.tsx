import { NavigationContainer } from '@react-navigation/native'
import  {createNativeStackNavigator} from '@react-navigation/native-stack'

import About from './components/About'
import Router from './screen/Router'
import { ContexProvider } from './contex'

export type rootStackPramList={
  Home:undefined,
  About:undefined,
}
const Stack = createNativeStackNavigator<rootStackPramList>()
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
