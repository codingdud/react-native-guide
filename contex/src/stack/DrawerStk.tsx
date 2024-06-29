import 'react-native-gesture-handler';
import React from 'react';
import { 
  createDrawerNavigator,
  DrawerContentComponentProps, 
  DrawerContentScrollView,
 } from '@react-navigation/drawer';

import Feed from '../screen/Feed';
import Article from '../screen/Article';
import { Button, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import RenderDrawerItem from '../components/Drawer/renderDrawerIem';
import About from '../screen/About';
import CustomHeaderLeft from '../components/Drawer/CustomHeaderLeft';
import { DATA1,DATA2,DATA3,DATA4 } from '../assets/data/drawerData';
interface CustomDrawerContentProps extends DrawerContentComponentProps {
  navigation: any;
}

const Drawer = createDrawerNavigator<DorwarStackPramList>();

const CustomDrawerContent = (props: CustomDrawerContentProps) => {
  const renderItem = ({ item,index }: { item:RenderDrawerItemProps,index:number}) => (
    <RenderDrawerItem
      key={index}
      label={item.label}
      iconName={item.iconName}
      colorIndex={item.colorIndex}
      iconSize={20}
      navigation={item.navigation}
      navigateTo={item.navigateTo}
    />
  );
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.userName}>Test Shiva</Text>
        <Button title="View Profile" onPress={() => {}} />
        <Button title="Logout" onPress={() => {}} color="red" />
      </View>
      {DATA1.map((item,index)=>renderItem({item,index}))}
      <View style={styles.separator} />
      {DATA2.map((item,index)=>renderItem({item,index}))}
      <View style={styles.separator} />
      {DATA3.map((item,index)=>renderItem({item,index}))}
      <View style={styles.separator} />
      {DATA4.map((item,index)=>renderItem({item,index}))}
    </DrawerContentScrollView>
  );
}

export default function MyDrawer() {
  return (
    <Drawer.Navigator 
    screenOptions={({navigation })=>({
      drawerStyle: {
        backgroundColor: 'white',
        width: 300,
      },
      drawerPosition: 'left',
      drawerType: 'front',
      headerLeft: () => <CustomHeaderLeft navigation={navigation} iconNmae={"navicon"} />,
    })}
    drawerContent={(props)=><CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={About} />
      <Drawer.Screen name="Article" component={Article} />
      <Drawer.Screen name="Transaction" component={Feed} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: 'green',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 8,
  },
});

/* export type DorwarStackPramList = {
  Home: undefined,
  Article: undefined,
  Transaction: undefined,
  Advance: undefined,
  Expense: undefined,
  SeasonVehicle: undefined,
  CropBuyer: undefined,
  Village: undefined,
  OwnerVsAgent: undefined,
  Employee: undefined,
  Leave: undefined,
  Report: undefined,
  ContactUs: undefined,
}; */

/* drawerActiveTintColor: 'blue',
      drawerActiveBackgroundColor: 'lightgray',
      drawerInactiveTintColor: 'gray',
      drawerInactiveBackgroundColor: 'white', */