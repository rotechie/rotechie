export interface ServiceNow {
  id: any;
  question: string;
  answerHighLevel: string;
  answerComplete: string;
  isActive: boolean;
}

export const snowInterviewQuestions = [
  {
    id: 1,
    name: "Administration Related Questions",
    category: ["administration", "all"],
    question: "ques 1",
    answerHighLevel: "ans hl 1",
    answerComplete: "ans hl comp 1",
    isActive: true
  },
  {
    id: 2,
    name: "Scripting Related Questions",
    category: ["scripting", "all"],
    question: "ques 2",
    answerHighLevel: "ans hl 2",
    answerComplete: "ans hl comp 2",
    isActive: false
  },
  {
    id: 3,
    name: "All Questions",
    category: ["all"],
    question: "ques 3",
    answerHighLevel: "ans hl 3",
    answerComplete: "ans hl comp 3",
    isActive: false
  },

  {
    id: 4,
    name: "Training Related Questions",
    category: ["trainer", "all"],
    question: "ques 4",
    answerHighLevel: "ans hl 4",
    answerComplete: "ans hl comp 4",
    isActive: false
  }
];
