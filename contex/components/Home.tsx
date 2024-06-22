import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

import {useTogoContext } from '../hooks/contex'
import { useState } from 'react'
import axios from '../api/axios'

const Home = () => {
  const{toggle,setToggle}=useTogoContext()
  const[cred,setCred]=useState({
    username:"",
    password:""
  })

  const login=async()=>{
    console.log(cred)
    try {
      const response = await axios.post('/users/login',cred)
      console.log(response.data)
      
    } catch (error) {
      
    }
  }

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