import { Button, StyleSheet, Text, View } from 'react-native'
//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type HomeProps=NativeStackScreenProps<RootStackParamList,'Home'>

const Home = ({navigation}:HomeProps) => {

  return (
    <View style={styles.contaiiner}>
      <Text style={styles.smallText}>Home</Text>
     {/*  <Button 
      title='Go to Details' 
      onPress={()=>navigation.navigate('Details',{productId:'1'})}
      /> */}
      <Button 
      title='Go to Details' 
      onPress={()=>navigation.push('Details',{productId:'1'})}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    contaiiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    smallText:{
        color:'red',
        fontSize:20,
        fontWeight:'bold'
    }
})