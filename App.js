import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'jotai';
import HomeScreen from './screens/HomeScreen';
import { GlobalTheme } from './GlobalTheme';
import TabBar from './components/TabBar';


const Tab = createBottomTabNavigator();




export default function App() {
  return (
    <Provider>
      <ThemeProvider theme={GlobalTheme}>
        <View style={{ flex: 1, backgroundColor: GlobalTheme.colors.dark }}>
          <NavigationContainer>
            <TabBar/>
          </NavigationContainer>
        </View>
      </ThemeProvider>
    </Provider>
  );
}
