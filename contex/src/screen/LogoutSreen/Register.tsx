import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, ScrollView, Image } from 'react-native';
import { logoutStackPramList } from '../../stack/LogoutStk';


const Register: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<logoutStackPramList, 'register'>>();
    const[cred,setCred]=useState({
        username:"",
        password:""
      })

    const handleRegister = () => {
        // Handle registration logic here
    };

    return (
        <View style={styles.container}>
        <ScrollView>
        <Image
          source={require("../../assets/images/Vector.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.LgoinStyle}>
          <View style={styles.LableStyle}>
            <Text>
            User Name
            </Text>
            <TextInput
              style={styles.inputStyle}
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
          <View style={styles.LableStyle}>
            <Text>
              Password
            </Text>
            <TextInput
            style={styles.inputStyle}
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
          <TouchableOpacity 
          style={styles.button}>
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
        <TouchableOpacity 
        style={styles.reginstrationText}
        onPress={()=>{
          navigation.pop()
        }}
        >
          <Text style={{textAlign:'center',marginTop:10}}>already have an account? <Text style={{fontWeight: 'bold'}}>Login</Text></Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
      },
      image: {
        width: '98%',
        marginTop: '7%',
        alignSelf: "center"
      },
      LableStyle:{
        marginTop: '5%',
        alignItems: 'flex-start',
        width: '90%',
        justifyContent:'space-between',
        gap:4,
      },
      inputStyle:{
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: '2%',
        paddingLeft: '3%',
      },
      LgoinStyle:{
        marginTop: '10%',
        width: '100%',
        alignItems: 'center',
        gap: 10,
      },
      button: {
        marginTop: '5%',
        backgroundColor:'black',
        borderRadius: 8,
        paddingHorizontal: '20%',
        padding: '2%',
        justifyContent: "center"
      },
      loginText: {
        color: "rgba(255,255,255,1)",
        fontSize: 24,
        alignSelf: "center"
      },
      reginstrationText: {
        marginBottom: '2%',
      }
});

export default Register;