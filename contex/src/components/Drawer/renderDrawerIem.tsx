import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

type RenderDrawerItemProps = {
  label: string;
  iconName: string;
  colorIndex?: number;
  iconSize?: number;
  navigation: { navigate: (arg0: string) => void };
  navigateTo?: keyof DorwarStackPramList;
};

const RenderDrawerItem: React.FC<RenderDrawerItemProps> = ({ label, iconName, colorIndex,iconSize, navigation, navigateTo }) => {

  const colorList = ['green', 'blue', 'red', 'purple', 'orange', 'brown', 'pink', 'cyan', 'teal', 'yellow', 'gray', 'black', 'darkblue', 'darkred'];

  return (
    <DrawerItem
      label={label}
      icon={({ color, size }) => <Icon name={iconName} color={colorIndex?colorList[colorIndex]:color} size={iconSize?iconSize:size} />}
      onPress={() => navigateTo ? navigation.navigate(navigateTo) : {}}
    />
  );
};

export default RenderDrawerItem;
