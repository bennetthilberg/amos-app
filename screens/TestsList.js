import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text,TouchableOpacity} from 'react-native';
import TestScreen from './TestPreview'; 
import { atom,useAtom } from 'jotai';
import { Button } from 'react-native-elements';
import GradientButton from '../components/GradientButton';
import * as tests from '../tests'; 
import TestPreview from './TestPreview';
import TestInProgress from './TestInProgress';
import { currentTestAtom,testProgressAtom } from '../globalAtoms';


const Stack = createStackNavigator();



function TestsList({ navigation }){
    const [currentTest, setCurrentTest] = useAtom(currentTestAtom);
    const [testProgress, setTestProgress] = useAtom(testProgressAtom);
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
                () =>{
                  console.log('Setting currentTest and testProgress. testInList:', testInList);
                  setCurrentTest(testInList);
                  setTestProgress({ block: 0, instruction: 0, question: 0 });
                  navigation.navigate('TestPreview');
                }
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
      <Stack.Screen name="TestPreview" component={TestPreview} /> 
      <Stack.Screen name="TestInProgress" component={TestInProgress} /> 
      
    </Stack.Navigator>
  );
}
