// ❗ You don't need to add extra action creators to achieve MVP\
import { MOVE_CLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_QUESTION_CHANGE, TRUE_QUESTION_CHANGE, FALSE_QUESTION_CHANGE, MOVE_COUNTERCLOCKWISE } from "./action-types"


export function moveClockwise(positions = 1) {
  return { type: MOVE_CLOCKWISE, payload: positions }
}

export function moveCounterClockwise(positions = 1) { 
  return { type: MOVE_COUNTERCLOCKWISE, payload: positions}
}

export function setQuiz(quizData) {
  return { type: SET_QUIZ_INTO_STATE, payload: quizData };
}

export function selectAnswer(selectedAnswer) {
  return { type: SET_SELECTED_ANSWER, payload: selectedAnswer };
}

export function setMessage(message) {
  return { type: SET_INFO_MESSAGE, payload: message };
}


export function inputQuestionChange(text) {
  return { type: INPUT_QUESTION_CHANGE, payload: text }
}

export function trueQuestionChange(text) {
  return { type: TRUE_QUESTION_CHANGE, payload: text }
}

export function falseQuestionChange(text) {
  return { type: FALSE_QUESTION_CHANGE, payload: text }
}

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
