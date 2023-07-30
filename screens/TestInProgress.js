import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAtom } from 'jotai';
import { currentTestAtom, testProgressAtom, choicesMadeAtom } from '../globalAtoms';
import GradientButton from '../components/GradientButton';

export default function TestInProgress({ navigation }) {
  const [currentTest, setCurrentTest] = useAtom(currentTestAtom);
  const [testProgress, setTestProgress] = useAtom(testProgressAtom);
  const [timeStarted, setTimeStarted] = useState(Date.now());

  const question = currentTest.questions[testProgress];
  const {questionText, buttonLayout, buttonText, answerTextA, answerTextB, buttonAColor, buttonBColor} = question;

  function handleChoice(choice){
    const timeTaken = Date.now() - timeStarted;
    // update the current question in the test
    const updatedCurrentTest = {...currentTest};
    updatedCurrentTest.questions[testProgress].response = choice;
    updatedCurrentTest.questions[testProgress].timeTaken = timeTaken;
    setCurrentTest(updatedCurrentTest);
    setTestProgress(testProgress + 1);
    setTimeStarted(Date.now());
    console.log(currentTest);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.questionText}>{questionText}</Text>
      <View style={styles.buttonsContainer}>
        {buttonLayout === 'oneBig' ? (
          <View style={styles.buttonContainer}>
            <GradientButton
              title={buttonText}
              onPress={() => handleChoice()}
            />
          </View>
        ) : (
          <>
            <View style={styles.buttonContainer}>
              <GradientButton
                title={answerTextA}
                onPress={() => handleChoice('A')}
                color={buttonAColor}
              />
            </View>
            <View style={styles.buttonContainer}>
              <GradientButton
                title={answerTextB}
                onPress={() => handleChoice('B')}
                color={buttonBColor}
              />
            </View>
          </>
        )}
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
