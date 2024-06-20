import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard():JSX.Element{
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElivated]}>
        <Image
        style={styles.cardImage}
        source={{uri:'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-469786746_super.jpg'}}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa mahal</Text>
          <Text style={styles.cardLabel}>pink city in ragisthan</Text>
          <Text style={styles.cardDes}>Top eastern side on a stormy 
          afternoonColoured glasswork. When the sunlight enters, 
          the entire chamber fills with the spectrum of 
          various colours.</Text>
          <Text style={styles.cardFooter}>12 min away</Text>
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
  card:{
    width:'auto',
    height:450,
    borderRadius:16,
    marginVertical:12,
    marginHorizontal:8,
  },
  cardElivated:{
    backgroundColor:'#ffffff',
    elevation:4,
    shadowOffset:{
        width:1,
        height:1,
    },
    shadowColor:'#333',
  },
  cardImage:{
    height:250,
    marginBottom:16,
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
  },
  cardBody:{
    flex:1,
    flexGrow:1,
    paddingHorizontal:12,
  },
  cardTitle:{
    color:'#000000',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:4,
  },
  cardLabel:{
    color:'#000000',
    fontSize:14,
    marginBottom:6,
    textAlign:'center',
  },
  cardDes:{
    color:'#758283',
    fontSize:16,
    marginBottom:4,
    flexShrink:1,
  },
  cardFooter:{
    color:'#000000',
    marginBottom:11,
    textAlign:'right',
  },
})