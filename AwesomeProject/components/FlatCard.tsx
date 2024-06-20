import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard():JSX.Element{
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>yellow</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>yellow</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        color:'red',
        fontSize:24,
        fontWeight: "bold",
        paddingHorizontal:8,
    },
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:"space-around",
        padding:8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        width:10,
        height:100,
        borderRadius:5,
        margin:8,
    },
    cardOne:{
        backgroundColor:"#845EC2",
    },
    cardTwo:{
        backgroundColor:"#2C73D2",
    },
    cardThree:{
        backgroundColor:"#368EAA",
    },
})