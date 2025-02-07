// store/quiz-store.js
import create from "zustand";

export const useQuizStore = create((set) => ({
  score: 0,
  currentQuestion: 0,
  setScore: (score) => set({ score }),
  incrementScore: (value) => set((state) => ({ score: state.score + value })),
  resetQuiz: () => set({ score: 0, currentQuestion: 0 }),
  setCurrentQuestion: (index) => set({ currentQuestion: index }),
}));
