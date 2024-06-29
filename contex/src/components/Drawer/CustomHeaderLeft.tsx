import {DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

type CustomHeaderLeftProps = {
    navigation: DrawerScreenProps<DorwarStackPramList, keyof DorwarStackPramList>['navigation'];
    iconNmae?: string;
  };

const CustomHeaderLeft=({ navigation,iconNmae }: CustomHeaderLeftProps)=>{
    return (
      <View style={{ marginLeft: 10 }}>
        <TouchableOpacity onPress={() =>navigation.openDrawer()}>
          {iconNmae?<Icon name={iconNmae} size={25} color="black" />:
          <Icon name="envelope" size={25} color="black" />}
        </TouchableOpacity>
      </View>
    );
  }
  export default CustomHeaderLeft;