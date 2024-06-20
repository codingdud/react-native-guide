import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

import {useTogoContext } from '../contex'
import { useState } from 'react'

const Home = () => {
  const{toggle,setToggle}=useTogoContext()
  const[cred,setCred]=useState({
    username:"",
    password:""
  })
  return (
      <View style={styles.container}>
        <Text>App</Text>
        <View>
          <Text>
          User Name
          </Text>
          <TextInput
            placeholder='username'
            value={cred.username}
            onChangeText={(text)=>{setCred((prev)=>{
              return{
                ...prev,
                username:text
              }
            })}}
           />
        </View>
        <View>
          <Text>
            Password
          </Text>
          <TextInput
            placeholder='password'
            value={cred.password}
            onChangeText={(text)=>{setCred((prev)=>{
              return{
                ...prev,
                password:text
              }
            })}}
           />
        </View>
        {toggle?<Text>on</Text>:<Text>off</Text>}
        <Button title='button' onPress={()=>{
          console.log(toggle)
          setToggle(!toggle)
          }}/>
      </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})