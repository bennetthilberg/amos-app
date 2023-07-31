const goodWords = ['Joy', 'Love', 'Peace', 'Wonderful', 'Pleasure', 'Friend', 'Laughter', 'Happy'];
const badWords = ['Agony', 'Terrible', 'Horrible', 'Nasty', 'Evil', 'War', 'Awful', 'Failure'];
const blackFaces = ['face1.jpeg', 'face2.jpeg', 'face3.jpeg', 'face4.jpeg']; // replace with actual image paths
const whiteFaces = ['face5.jpeg', 'face6.jpeg', 'face7.jpeg', 'face8.jpeg']; // replace with actual image paths

const createWordQuestion = (word, isGood) => ({
  type: 'practice',
  questionText: 'Categorize this word:',
  item: word,
  answerTextA: 'Bad',
  answerTextB: 'Good',
  buttonAColor: '#FF0000',
  buttonBColor: '#008000',
  correctAnswer: isGood ? 'B' : 'A',
});

const createFaceQuestion = (face, isBlack) => ({
  type: 'question',
  questionText: 'Categorize this face:',
  item: `./assets/faces/${face}`,
  answerTextA: 'Black',
  answerTextB: 'White',
  buttonAColor: '#ffe0bd',
  buttonBColor: '#260701',
  correctAnswer: isBlack ? 'A' : 'B',
});

export const raceIAT = {
  id: 2,
  name: 'Race Implicit Association Test',
  iconSrc: './assets/icons/race.svg',
  takenYet: false,
  blocks: [
    // Block 1
    {
      instructions: [
        {
          type: 'instruction',
          questionText: 'Welcome to the Race IAT! You will be shown words and images and asked to categorize them.',
          buttonLayout: 'oneBig',
          buttonText: 'Start',
        },
        {
          type: 'instruction',
          questionText: 'In the first part, you will categorize faces. Tap "Black" for Black faces and "White" for White faces.',
          buttonLayout: 'oneBig',
          buttonText: 'Next',
        },
      ],
      questions: [
        ...blackFaces.map(face => createFaceQuestion(face, true)),
        ...whiteFaces.map(face => createFaceQuestion(face, false)),
      ],
    },
    // Block 2
    {
      instructions: [
        {
          type: 'instruction',
          questionText: 'Next, you will categorize words. Tap the green button for good items, and the red button for bad items.',
          buttonLayout: 'oneBig',
          buttonText: 'Next',
        },
      ],
      questions: [
        ...goodWords.map(word => createWordQuestion(word, true)),
        ...badWords.map(word => createWordQuestion(word, false)),
      ],
    },
    // Block 3
    {
      instructions: [
        {
          type: 'instruction',
          questionText: 'Now we will combine faces and words. The correct categories are: Black or Bad with the left button and White or Good with the right button.',
          buttonLayout: 'oneBig',
          buttonText: 'Next',
        },
      ],
      questions: [
        ...blackFaces.map(face => createFaceQuestion(face, true)),
        ...whiteFaces.map(face => createFaceQuestion(face, false)),
        ...goodWords.map(word => createWordQuestion(word, true)),
        ...badWords.map(word => createWordQuestion(word, false)),
      ],
    },
    // Block 4
    {
        instructions: [
          {
            type: 'instruction',
            questionText: 'The categories for faces have now switched places. Now tap "Black" for Black faces and "White" for White faces.',
            buttonLayout: 'oneBig',
            buttonText: 'Next',
          },
        ],
        questions: [
          ...blackFaces.map(face => createFaceQuestion(face, true)),
          ...whiteFaces.map(face => createFaceQuestion(face, false)),
        ],
    },
    // Block 5
    {
        instructions: [
          {
            type: 'instruction',
            questionText: 'Continue with the reversed categories.',
            buttonLayout: 'oneBig',
            buttonText: 'Next',
          },
        ],
        questions: [
          ...blackFaces.map(face => createFaceQuestion(face, true)),
          ...whiteFaces.map(face => createFaceQuestion(face, false)),
        ],
      },
    // Block 6
    {
        instructions: [
          {
            type: 'instruction',
            questionText: 'Now we will combine the reversed categories of faces and words. The correct categories are: Black or Good with the left button and White or Bad with the right button.',
            buttonLayout: 'oneBig',
            buttonText: 'Next',
          },
        ],
        questions: [
          ...blackFaces.map(face => createFaceQuestion(face, true)),
          ...whiteFaces.map(face => createFaceQuestion(face, false)),
          ...goodWords.map(word => createWordQuestion(word, true)),
          ...badWords.map(word => createWordQuestion(word, false)),
        ],
      },
    // Block 7
    {
        instructions: [
          {
            type: 'instruction',
            questionText: 'For the final task, the categories will switch back to their original places. Now, the correct categories are: Black or Bad with the left button and White or Good with the right button.',
            buttonLayout: 'oneBig',
            buttonText: 'Next',
          },
        ],
        questions: [
          ...blackFaces.map(face => createFaceQuestion(face, true)),
          ...whiteFaces.map(face => createFaceQuestion(face, false)),
          ...goodWords.map(word => createWordQuestion(word, true)),
          ...badWords.map(word => createWordQuestion(word, false)),
        ],
    },
  ],
  progress: 0, // which question the user is on
}
