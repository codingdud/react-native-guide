import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Button,
  Pressable
 } from 'react-native'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


import { useState, type PropsWithChildren } from 'react'

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png' 

type DiceProps=PropsWithChildren<{imageUrl:ImageSourcePropType}>

const Dice=({imageUrl}:DiceProps):JSX.Element=>{
  return(
    <View style={styles.diceContainer}>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

export default function App():JSX.Element {
  const [discImage,setDiceImage]=useState<ImageSourcePropType>(DiceOne)
  ReactNativeHapticFeedback.trigger("impactLight", options);
  const rollDiceOnTap=()=>{
    const randomNumber=Math.floor(Math.random()*6)+1
    switch(randomNumber){
      case 1:
        setDiceImage(DiceOne)
        break
      case 2:
        setDiceImage(DiceTwo)
        break
      case 3:
        setDiceImage(DiceThree)
        break
      case 4:
        setDiceImage(DiceFour)
        break
      case 5:
        setDiceImage(DiceFive)
        break
      case 6:
        setDiceImage(DiceSix)
        break
    }
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={discImage}/>
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})