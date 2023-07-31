import { atom } from 'jotai';

export const currentTestAtom = atom(null);
export const testProgressAtom = atom({ block: 0, instruction: 0, question: 0 });
export const choicesMadeAtom = atom([]);
