import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useTogoContext } from '../hooks/contex'

const About = () => {
  const{toggle,setToggle}=useTogoContext()
  return (
    <View style={styles.container}>
        <Text>About</Text>
        {toggle?<Text>on</Text>:<Text>off</Text>}
        <Button title='button' onPress={()=>{
          console.log(toggle)
          setToggle(!toggle)
          }}/>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})

export default About