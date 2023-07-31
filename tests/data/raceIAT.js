export const raceIAT = {
    id: 2,
    name: 'Race Implicit Association Test',
    iconSrc: './assets/icons/race.svg',
    takenYet: false,
    questions: [
        {
            type: 'instruction',
            questionText: 'Welcome to the Race IAT! You will be shown words and images and asked to categorize them.',
            buttonLayout: 'oneBig',
            buttonText: 'Next',
        },
        {
            type: 'instruction',
            questionText: 'Tap the green button for good items, and the red button for bad items. We\'ll practice this next.',
            image: './assets/diagrams/example_diagram.png',
            buttonLayout: 'oneBig',
            buttonText: 'Next',
        },
        {
            type: 'practice',
            questionText: 'Categorize this item:',
            item: 'Good',
            answerTextA: 'Bad',
            answerTextB: 'Good',
            buttonAColor: '#FF0000',
            buttonBColor: '#008000',
            answeredYet: false,
            response: null,
            timeTaken: null
        },
        {
            type: 'practice',
            questionText: 'Categorize this item:',
            item: 'Bad',
            answerTextA: 'Bad',
            answerTextB: 'Good',
            buttonAColor: '#FF0000',
            buttonBColor: '#008000',
            answeredYet: false,
            response: null,
            timeTaken: null
        },
        {
            type: 'instruction',
            questionText: 'Next, you will categorize faces. Tap "Tan" for Black faces and "Brown" for White faces.',
            buttonLayout: 'oneBig',
            buttonText: 'Next',
            image: './assets/diagrams/example_diagram2.png',
        },
        {
            type: 'question',
            questionText: 'Categorize this face:',
            item: './assets/faces/face1.png',
            answerTextA: 'Tan',
            answerTextB: 'Brown',
            buttonAColor: '#ffe0bd',
            buttonBColor: '#260701',
            answeredYet: false,
            response: null,
            timeTaken: null
        },
        {
            type: 'question',
            questionText: 'Categorize this face:',
            item: './assets/faces/face2.png',
            answerTextA: 'Tan',
            answerTextB: 'Brown',
            buttonAColor: '#ffe0bd',
            buttonBColor: '#260701',
            answeredYet: false,
            response: null,
            timeTaken: null
        },
        // ...
    ],
    progress: 0, // which question the user is on
}
