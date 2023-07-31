import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAtom } from 'jotai';
import { produce } from 'immer';
import { currentTestAtom, testProgressAtom } from '../globalAtoms';
import GradientButton from '../components/GradientButton';
import { Image } from 'react-native';

export default function TestInProgress({ navigation }) {
  const [currentTest, setCurrentTest] = useAtom(currentTestAtom);
  const [testProgress, setTestProgress] = useAtom(testProgressAtom);
  const [currentItem, setCurrentItem] = useState(null);
  const [timeStarted, setTimeStarted] = useState(Date.now());

  useEffect(() => {
    console.log("In useEffect, currentTest: ", currentTest, "testProgress: ", testProgress);

    const fetchCurrentItem = () => {
      if (!currentTest) {
        console.log(`currentTest is ${currentTest} and falsy`);
        navigation.navigate('Home');
        return;
      }

      if (!testProgress) {
        console.log(`testProgress is ${testProgress} and falsy`);
        navigation.navigate('Home');
        return;
      }

      const currentBlock = currentTest.blocks[testProgress.block];
      console.log("currentBlock", currentBlock);
      console.log("testProgress", testProgress);

      if (!currentBlock) {
        console.error(`Data integrity issue. Block ${testProgress.block} is missing.`);
        navigation.navigate('Home');
        return;
      }

      const isInstruction = testProgress.instruction < currentBlock.instructions.length;
      console.log("isInstruction", isInstruction);
      console.log("currentBlock.instructions.length", currentBlock.instructions.length);
      console.log("currentBlock.questions.length", currentBlock.questions.length);

      const item = isInstruction
    ? currentBlock.instructions[testProgress.instruction]
    : currentBlock.questions[testProgress.questionIndex];

      if (!item) {
        console.error(`Data integrity issue. Item ${isInstruction ? testProgress.instruction : testProgress.question} is missing.`);
        navigation.navigate('Home');
        return;
      }

      setCurrentItem(item);
    };

    fetchCurrentItem();
  }, [currentTest, testProgress]);

  const handleChoice = (choice) => {
    if (!currentItem || currentItem.type === 'instruction') {
      // handle navigation to next instruction or question
const updatedTestProgress = produce(testProgress, (draftProgress) => {
  const currentBlock = currentTest.blocks[draftProgress.block];
  if (draftProgress.instruction < currentBlock.instructions.length - 1) {
    draftProgress.instruction += 1;
  } else {
    // if no more instructions, set instruction index at instructions.length and start/continue with questions
    draftProgress.instruction = currentBlock.instructions.length;
    if (!draftProgress.questionIndex) {
      // initialize questionIndex if it doesn't exist
      draftProgress.questionIndex = 0;
    } else {
      draftProgress.questionIndex += 1;
    }
  }
});

      setTestProgress(updatedTestProgress);
      return;
    }

    const timeTaken = Date.now() - timeStarted;
    
    const updatedCurrentTest = produce(currentTest, draftTest => {
      draftTest.blocks[testProgress.block].questions[testProgress.question - currentTest.blocks[testProgress.block].instructions.length].response = choice;
      draftTest.blocks[testProgress.block].questions[testProgress.question - currentTest.blocks[testProgress.block].instructions.length].timeTaken = timeTaken;
    });

    setCurrentTest(updatedCurrentTest);

    if (testProgress.question >= currentTest.blocks[testProgress.block].questions.length) {
      setTestProgress({ block: testProgress.block + 1, instruction: 0, question: 0 });
    } else {
      setTestProgress({ ...testProgress, question: testProgress.question + 1 });
    }
    

    setTimeStarted(Date.now());
  };

  if (!currentItem) {
    return null;
  }

  const renderInstruction = () => (
    <View style={styles.container}>
      <Text style={styles.text}>{currentItem.questionText}</Text>
      <GradientButton
        onPress={() => handleChoice()}
        title={currentItem.buttonText}
        buttonStyle={styles.button}
      />
    </View>
  );

  const renderQuestion = () => (
    <View style={styles.container}>
      <Text style={styles.text}>{currentItem.questionText}</Text>
      {typeof currentItem.item === 'string' && !currentItem.item.includes('.jpeg') ? (
        <Text style={styles.questionItem}>{currentItem.item}</Text>
      ) : (
        <Image source={currentItem.item} style={styles.image} />
      )}
      <GradientButton
        onPress={() => handleChoice('A')}
        title={currentItem.answerTextA}
        buttonStyle={{ ...styles.button, backgroundColor: currentItem.buttonAColor }}
      />
      <GradientButton
        onPress={() => handleChoice('B')}
        title={currentItem.answerTextB}
        buttonStyle={{ ...styles.button, backgroundColor: currentItem.buttonBColor }}
      />
    </View>
  );

  return currentItem.type === 'instruction' ? renderInstruction() : renderQuestion();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    marginTop: 20,
  },
  questionItem: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
