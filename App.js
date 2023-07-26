import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'jotai';
import HomeScreen from './screens/HomeScreen';
import { GlobalTheme } from './GlobalTheme';
import NavigationBar from './components/NavigationBar';

const Tab = createBottomTabNavigator();



function SettingsScreen() {
  // Your SettingsScreen code here
}

function TestsScreen() {
  // Your TestsScreen code here
}

export default function App() {
  return (
    <Provider>
      <ThemeProvider theme={GlobalTheme}>
        <View style={{ flex: 1, backgroundColor: GlobalTheme.colors.dark }}>
          <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
              <Tab.Screen name="Tests" component={TestsScreen} />
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </ThemeProvider>
    </Provider>
  );
}
