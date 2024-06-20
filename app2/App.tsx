

import React, { act, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  const [randombg,setRandombg]=useState('#ffffff')
  const generateRandomColor=()=>{
    const hexRange="0123456789ABCDEF"
    let color="#";
    for(let i=0;i<6;i++){
      color+=hexRange[Math.floor(Math.random()*16)]
    }
    setRandombg(color)
  }
  return (
    <>
      <StatusBar backgroundColor={randombg} />
      <View style={[styles.container,{backgroundColor:randombg}]}>
        <TouchableOpacity onPress={generateRandomColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Hello</Text>
          </View>
        </TouchableOpacity>
        <View>
              <Text selectable>{randombg}</Text>
          </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  actionBtn:{
    backgroundColor:'blue',
    padding:10,
    borderRadius:10,
    margin:10,
  },
  actionBtnText:{
    fontSize:24,
    textTransform:'uppercase',
    color:'white'
  }
});

export default App;
