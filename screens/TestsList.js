import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text,TouchableOpacity} from 'react-native';
import TestScreen from './TestPreview'; 
import { atom,useAtom } from 'jotai';
import { Button } from 'react-native-elements';
import GradientButton from '../components/GradientButton';
import * as tests from '../tests'; 
import TestPreview from './TestPreview';


const Stack = createStackNavigator();

//const exampleList = atom(['foo', 'bar', 'foobar']);


function TestsList({ navigation }){
    const testsArray = Object.values(tests);

    return(
        <View>
        <Text>These are the tests:</Text>
        {testsArray.map((testInList) => {
            return(
            <GradientButton
            key={testInList.id}
            title={testInList.name}
            onPress={
                () => navigation.navigate('Test', {testData: testInList.name})
            }>
                <Text>{testInList.name}</Text>
            </GradientButton>
            );
        })}
        </View>
    );
}

export default function TestNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TestsList" component={TestsList} /> 
      <Stack.Screen name="Test" component={TestPreview} /> 
    </Stack.Navigator>
  );
}
