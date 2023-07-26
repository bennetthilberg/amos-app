import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider,Button } from 'react-native-elements';
import { Provider } from 'jotai';
import { useAtom } from 'jotai';
import NavigationBarStyle from './NavigationBar.style';

export default function NavigationBar(){
    return(
        <View style={NavigationBarStyle.navigationBar}>
            <Text>Tests</Text>
            <Text>Home</Text>
            <Text>Settings</Text>
        </View>
    );
}