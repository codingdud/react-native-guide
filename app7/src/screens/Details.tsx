import { Button, StyleSheet, Text, View } from 'react-native'

import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'

import { RootStackParamList } from '../App'

type DetailProp=NativeStackScreenProps<RootStackParamList,'Details'>

const Details = ({route}:DetailProp) => {
    const {productId}=route.params
    const navigation=useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.contaiiner}>
      <Text style={styles.smallText}>Details</Text>
      <Text>{productId}</Text>
      <Button 
      title='Go to Home' 
      onPress={()=>navigation.popToTop()}
      />
    </View>
  )
}

export default Details

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