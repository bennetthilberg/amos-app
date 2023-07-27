export const exampleSunkCost = {
    id: 1,
    name: 'Sunk Cost Fallacy',
    iconSrc: './assets/icons/example.svg',
    takenYet: false,
    questions: [
        {
            questionText: 'You spend $100 for concert tickets, but it starts pouring rain. Would you still go?',
            answerTextA: 'Yes',
            answerTextB: 'No',
            answeredYet: false,
            response: null,
            timeDisplayed: null,
            timeAnswered: null
        },
        {
            questionText: 'You spend $10 for concert tickets, but it starts pouring rain. Would you still go?',
            answerTextA: 'Yes',
            answerTextB: 'No',
            answeredYet: false,
            response: null,
            timeDisplayed: null,
            timeAnswered: null
        }
        // ...
    ],
    progress: 0, // which question the user is on
}
