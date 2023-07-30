import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.questionText}>{questionText}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <GradientButton
            title={answerTextA}
            onPress={() => handleChoice('A')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <GradientButton
            title={answerTextB}
            onPress={() => handleChoice('B')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 2
  },
  questionText: {
    position: 'absolute',
    top: 4,
    fontSize: 20, 
    marginBottom: 4,
    marginLeft: 8,
    marginRight: 8
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
  },
  buttonContainer: {
    flex: 1
  }
});
