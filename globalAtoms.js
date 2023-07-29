import { atom } from 'jotai';

export const currentTestAtom = atom(null);
export const testProgressAtom = atom(0); // Start at the first question
export const choicesMadeAtom = atom([]);
