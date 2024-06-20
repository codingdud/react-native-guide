import react from 'react'

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
  Image
} from 'react-native'
import FlatCard from './components/FlatCard'
import ElivatedCard from './components/ElivatedCard'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'

function app(){
  const isdark=useColorScheme()==='dark'
  return (
  <SafeAreaView>
    <ScrollView>
      <FlatCard/>
      <ElivatedCard/>
      <FancyCard/>
      <ActionCard/>
    </ScrollView>
  </SafeAreaView>
  )
}
export default app

const styles=StyleSheet.create({
  darkmode:{
    color: 'blue',
  },
  lightmode:{
    color: 'blue',
  }
})