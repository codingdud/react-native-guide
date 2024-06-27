import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


import {logoutStackPramList} from '../../stack/LogoutStk'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import LoginForm from '../../components/LoginForm';


const Login = () => {
  
  const navigation = useNavigation<NativeStackNavigationProp<logoutStackPramList, 'login'>>();  

  return (
      <View style={styles.container}>
        <ScrollView>
        <Image
          source={require("../../assets/images/Vector.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <LoginForm />
        <TouchableOpacity>
          <Text style={{textAlign:'center',
            marginTop:10, 
            fontWeight: 'bold'}}
            >Forgot Password?</Text>
        </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity 
        style={styles.reginstrationText}
        onPress={()=>{
          navigation.push('register')
        }}
        >
          <Text style={{textAlign:'center',
            marginTop:10}}>
            Don't have an account? 
            <Text style={{fontWeight: 'bold'}}>
              Register
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  image: {
    width: '98%',
    marginTop: '7%',
    alignSelf: "center"
  },
  
  reginstrationText: {
    marginBottom: '2%',
  }
})