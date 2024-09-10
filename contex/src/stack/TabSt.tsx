import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tab1 from '../screen/Tab1';

const Tab = createBottomTabNavigator<TabStackPramList>();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="tab1" 
      component={Tab1} 
      options={{
        tabBarLabel: 'Home',
        tabBarBadge: 3,
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen 
      name="tab2" 
      component={Tab1}
        options={{
            tabBarLabel: 'Profile',
            tabBarBadge: 3,
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
            ),
        }}
       />
    </Tab.Navigator>
  );
}