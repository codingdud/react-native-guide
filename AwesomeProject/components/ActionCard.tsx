import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard():JSX.Element {
    function openWeb(weblink:string){
        Linking.openURL(weblink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card,styles.elevation]}>
        <View style={styles.headerContainer}>
            <Text style={styles.headingText}>text</Text>
        </View>
        <Image
        source={{uri:'https://th.bing.com/th/id/OIP.qmFdYvFXRp5XUBeKsoRWyAHaEs?rs=1&pid=ImgDetMain'}}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet, consect etur 
            adipiscing elit. Donec in velit neque. 
            Vivamus lacinia dui eget eros temp us, sed  
            fermentum nisl tincidunt. Mauris ac leo at urna  
            dictum sollicitudin ut
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={()=>openWeb('https://react.dev/blog')}>
            <Text style={styles.readMore}>read more</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>openWeb('https://github.com/codingdud')}>
            <Text style={styles.socialLink}>follow your dream</Text>
          </TouchableOpacity>
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
        //width:450,
        height:350,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:2,
        padding:8      },
      elevation:{
        backgroundColor:'#000028',
        elevation:3,
        shadowOffset:{
            width:4,
            height:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.3,
      },
      headerContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
      },
      cardImage:{
        height:100,
      },
      bodyContainer:{},
      footerContainer:{},
      readMore:{},
      socialLink:{},
})