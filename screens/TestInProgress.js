import React from 'react';
import { View, Text } from 'react-native';
import { useAtom } from 'jotai';
import { currentTestAtom } from '../globalAtoms';
import GradientButton from '../components/GradientButton';

export default function TestPreview({ navigation }) {
  const [currentTest, setCurrentTest] = useAtom(currentTestAtom);
  const currentTestName = `${currentTest.name}`;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>yo this is TestInProgress</Text>
      <Text>currentTest says it is... {currentTestName}</Text>
    </View>
  );
}
