import { View } from 'react-native'
import { Router } from '../routes/Router'
import { ContexProvider } from '../appwrite/togalContxt'
const MainScreen = () => {
  return (
    <ContexProvider>
      <Router/>
    </ContexProvider>
  )
}

export default MainScreen