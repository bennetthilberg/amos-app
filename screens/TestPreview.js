import React from 'react';
import { View, Text } from 'react-native';
import { useAtom } from 'jotai';
import { currentTestAtom } from '../globalAtoms';
import { testProgressAtom } from '../globalAtoms';
import { choicesMadeAtom } from '../globalAtoms';
import GradientButton from '../components/GradientButton';

export default function TestPreview({ navigation }) {
  const [currentTest, setCurrentTest] = useAtom(currentTestAtom);
    const [testProgress, setTestProgress] = useAtom(testProgressAtom);
    const [choicesMade, setChoicesMade] = useAtom(choicesMadeAtom);

  function handleStartTest() {
    setCurrentTest(currentTest);
    setTestProgress({ block: 0, instruction: 0, question: 0 });
    setChoicesMade([]);
    navigation.navigate('TestInProgress');
  }

  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>{currentTest.name}</Text>
      <GradientButton
        title="Start Test"
        onPress={() => {
            handleStartTest();
        }}
      />
    </View>
  );
}
