import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    useColorScheme 
} from "react-native";

export default function AppPro():JSX.Element {
    const darkMode=useColorScheme()==='dark';
  return (<View style={styles.container}>
    <Text style={darkMode?styles.whiteText:styles.darkText}>hello</Text>
  </View>)
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    whiteText:{
        color: 'pink',
    },
    darkText:{
        color:'#000000',
    }
})
