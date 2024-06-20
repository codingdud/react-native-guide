import { StyleSheet, Text, View } from 'react-native'

const Separator = () => {
  return (
    <View style={styles.seperator}>
    </View>
  )
}

export default Separator

const styles = StyleSheet.create({
    seperator:{
        height:0.8,
        backgroundColor:"#e0e0e0",
    }
})