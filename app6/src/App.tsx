import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import {setupPlayer,addTracks} from'../musicplayerservices'
import MusicPlayer from './screen/MusicPlayer'



const App = () => {
  const [isplayerReady,setPlayerReady]=useState(false)

async function  setup(){
  let isSetup=await  setupPlayer()
  if(isSetup){
    await addTracks()
  }
  setPlayerReady(isSetup)
}

useEffect(()=>{
  setup()
},[])

if(!isplayerReady){
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator/>
    </SafeAreaView>
  )
}
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'red'}/>
      <MusicPlayer/>      
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})