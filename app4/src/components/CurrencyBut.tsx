import { StyleSheet, Text, View } from 'react-native'
import type {PropsWithChildren} from 'react'

type CurrencyButProps=PropsWithChildren<{
  name:string,
  flag:string
}>

export default function CurrencyBut(props:CurrencyButProps):JSX.Element {
  return (
    <View style={styles.buttoncontainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.county}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttoncontainer:{
    alignItems:'center',
  },
  flag:{
    fontSize:28,
    color:'white',
    marginBottom:4
  },
  county:{
    fontSize:14,
    color:'black',
  },
})