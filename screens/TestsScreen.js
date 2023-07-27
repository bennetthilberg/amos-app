import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text,TouchableOpacity} from 'react-native';
import TestScreen from '../screens/TestScreen'; 
import { atom,useAtom } from 'jotai';

const Stack = createStackNavigator();

const exampleList = atom(['foo', 'bar', 'foobar']);

function TestsScreen({ navigation }){
    const [list] = useAtom(exampleList);

    return(
        <View>
        <Text>These are the tests:</Text>
        {list.map((item) => {
            return(
            <TouchableOpacity
            key={item}
            onPress={
                () => navigation.navigate('Test', {testData: item})
            }>
                <Text>{item}</Text>
            </TouchableOpacity>
            );
        })}
        </View>
    );
}

export default function TestNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tests" component={TestsScreen} /> 
      <Stack.Screen name="Test" component={TestScreen} /> 
    </Stack.Navigator>
  );
}
