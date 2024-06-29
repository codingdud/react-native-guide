import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useStateContext } from '../hooks/contex'
import useAxiosPrivate from '../hooks/useAxiosPrivate'

const About = () => {
  const{authState,logout}=useStateContext()
  const axiosPrivate=useAxiosPrivate()
  const data = {
    // Example data you want to send
    refreshToken: authState.refreshToken,
};
  const test=async()=>{
    try {
      
      //const response = await axios.post('/users/refreshTokenMobile', data);
      //console.log(response.data)
      const value = await axiosPrivate.get('/users/test');
      console.log(value.data)
    } catch (error) {
      console.log('about',error)
    }
  }

  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button title='logout' onPress={()=>{
        logout()
        }}/>
        <Button title='test' onPress={()=>{
        test()
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