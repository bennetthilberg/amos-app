import React from 'react';
import { View, Text } from 'react-native';
import { useAtom } from 'jotai';
import { currentTestAtom } from '../globalAtoms';
import GradientButton from '../components/GradientButton';

export default function TestPreview({ navigation }) {
  const [currentTest, setCurrentTest] = useAtom(currentTestAtom);
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>{currentTest.name}</Text>
      <GradientButton
        title="Start Test"
        onPress={() => {
          setCurrentTest(currentTest);
          navigation.navigate('TestInProgress');
        }}
      />
    </View>
  );
}