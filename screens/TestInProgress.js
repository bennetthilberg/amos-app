import React from 'react';
import { View, Text } from 'react-native';
import { useAtom } from 'jotai';
import { currentTestAtom, testProgressAtom, choicesMadeAtom } from '../globalAtoms';
import GradientButton from '../components/GradientButton';

export default function TestInProgress({ navigation }) {
  const [currentTest, setCurrentTest] = useAtom(currentTestAtom);
  const [testProgress, setTestProgress] = useAtom(testProgressAtom);
  const [choicesMade, setChoicesMade] = useAtom(choicesMadeAtom);

  const question = currentTest.questions[testProgress];
  const {questionText, answerTextA, answerTextB} = question;

  function handleChoice(choice){
    setChoicesMade([...choicesMade, {questionId: testProgress, choice}]);
    setTestProgress(testProgress + 1);
  }

  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>{questionText}</Text>
      <GradientButton
        title={answerTextA}
        onPress={() => handleChoice('A')}
      />
      <GradientButton
        title={answerTextB}
        onPress={() => handleChoice('B')}
      />
    </View>
  );
}
