import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import { currencyByRupee } from './constants'
import CurrencyBut from './components/CurrencyBut'
import Snackbar from 'react-native-snackbar'

export default function App():JSX.Element {
  const[inputValue,setInputValue]=useState('')
  const[resultValue,setResultValue]=useState('')
  const[targetCurr,setTargetCurr]=useState('')

  const buttonpressed=(targetValue:Currency)=>{
    if(!inputValue){
      return Snackbar.show({
        text:'Please enter amount',
        backgroundColor:"#EA7773",
        textColor:"black"
      })
    }
    const inputamount=parseFloat(inputValue)
      if(!isNaN(inputamount)){
        const covertedValue=inputamount*targetValue.value
        const result=`${targetValue.symbol} ${covertedValue.toFixed(2)}`
        setResultValue(result)
        setTargetCurr(targetValue.name)
      }else{
        return Snackbar.show({
          text:'Please enter a valid amount',
          backgroundColor:"#EA7773",
          textColor:"black",
          duration:Snackbar.LENGTH_SHORT
        })
      }
  }
  return (
    <>
      <StatusBar backgroundColor={'red'} />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput 
            style={styles.inputAmountField} 
            placeholder='Enter amount'
            maxLength={14}
            clearButtonMode='always'
            onChangeText={setInputValue}
            keyboardType='number-pad'
            />
          </View>
          {resultValue&&(
            <Text style={styles.resultTxt}>{resultValue}</Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item=>item.name}
            renderItem={({item})=>(
              <Pressable 
              style={[styles.button,targetCurr===item.name&&styles.selected]}
              onPress={()=>buttonpressed(item)}
              >
                <CurrencyBut {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
})