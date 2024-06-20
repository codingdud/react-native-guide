import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElivatedCard():JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>Elivated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElivated]}>
            <Text>tap</Text>
        </View>
        <View style={[styles.card,styles.cardElivated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.cardElivated]}>
            <Text>scrol</Text>
        </View>
        <View style={[styles.card,styles.cardElivated]}>
            <Text>the</Text>
        </View>
        <View style={[styles.card,styles.cardElivated]}>
            <Text>display</Text>
        </View>
      </ScrollView>
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
        padding:8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        width:100,
        height:100,
        borderRadius:8,
        margin:8,
    },
    cardElivated:{
        backgroundColor:'green',
        elevation:4,
        shadowOffset:{
            width:4,
            height:1,
        },
        shadowColor:'#333',
    }
})