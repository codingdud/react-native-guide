import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

export default function ContactList() {
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid,name,status,imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri:imageUrl}} style={styles.userImage}/>
            <View style={{marginLeft:10}}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24, // Larger font size for the heading
        fontWeight: 'bold', // Bold font weight for emphasis
        textAlign: 'center', // Center the heading text
        marginVertical: 20, // Vertical margin to separate from other elements
        color: '#fff', // Darker color for better visibility
    },
    container:{
        padding:8,
    },
    userCard:{
        flexDirection: 'row', // Align items in a row
        padding: 10, // Padding inside the card
        marginVertical: 5, // Vertical margin between cards
        backgroundColor: '#fff', // Background color for the card
        borderRadius: 5, // Rounded corners for the card
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.1, // Shadow opacity
        shadowRadius: 5, // Shadow radius
        elevation: 3, // Elevation for Android shadow
    },
    userImage:{
        height:50,
        width:50,
        borderRadius:25,
    },
    userStatus:{
        fontSize: 18, // Font size for the user name
        fontWeight: 'bold', // Bold font weight for the user name
        color: '#666',
    },
    userName:{
        fontSize: 14, // Font size for the user status
        color: '#666',
    },
})