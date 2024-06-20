
import Config from 'react-native-config';
console.log(Config.APPWRITE_ENDPOINT); // Output: https://api.example.com
console.log(Config.APPWRITE_PROJECT_ID); // Output: 1234567890abcdef
import { AppWriteProvider } from './appwrite/AppWriteContext';
import MainScreen from './screens/MainScreen';


const App = () => {
  return (
    <AppWriteProvider>
      <MainScreen/>
    </AppWriteProvider>
  )
}

export default App
