import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TestsScreen from '../screens/TestsList';
import ResultsScreen from '../screens/ResultsScreen'; 
import { GlobalTheme } from '../GlobalTheme';

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog-outline';
          } else if (route.name === 'Tests') {
            iconName = focused ? 'flask' : 'flask-outline';
          } else if (route.name === 'Results') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={GlobalTheme.tabBar}
      initialRouteName="Home"
    >
      <Tab.Screen name="Tests" component={TestsScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Results" component={ResultsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
