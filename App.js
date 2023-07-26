import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider,Button } from 'react-native-elements';
import { Provider } from 'jotai';
import HomeScreen from './screens/HomeScreen';
import {GlobalTheme} from './GlobalTheme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <ThemeProvider theme={GlobalTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" 
        screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
