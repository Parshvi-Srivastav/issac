// ❗ You don't need to add extra action creators to achieve MVP\
import axios from "axios";
import {
  MOVE_CLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_QUESTION_CHANGE,
  TRUE_QUESTION_CHANGE,
  FALSE_QUESTION_CHANGE,
  MOVE_COUNTERCLOCKWISE,
  RESET_FORM,
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
  POST_ANSWER_REQUEST,
  POST_ANSWER_SUCCESS,
  POST_ANSWER_FAILURE,
  POST_QUIZ_REQUEST,
  POST_QUIZ_SUCCESS,
  POST_QUIZ_FAILURE,
} from "./action-types";

export function moveClockwise() {
  return { type: MOVE_CLOCKWISE, payload: 1 };
}

export function moveCounterClockwise() {
  return { type: MOVE_COUNTERCLOCKWISE, payload: 1 };
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

// Action Creators
export function inputQuestionChange(newFormState) {
  return { type: INPUT_QUESTION_CHANGE, payload: newFormState };
}

export function trueQuestionChange(newFormState) {
  return { type: TRUE_QUESTION_CHANGE, payload: newFormState };
}

export function falseQuestionChange(newFormState) {
  return { type: FALSE_QUESTION_CHANGE, payload: newFormState };
}

export function resetForm() {
  return {
    type: RESET_FORM,
    payload: {
      newQuestion: "",
      newTrueAnswer: "",
      newFalseAnswer: "",
    },
  };
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    dispatch({ type: FETCH_QUIZ_REQUEST });

    axios
      .get("http://localhost:9000/api/quiz/next")
      .then((response) => {
        dispatch({ type: FETCH_QUIZ_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_QUIZ_FAILURE, payload: error });
      });
  };
}
export function postAnswer(answer) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    dispatch({ type: POST_ANSWER_REQUEST });

    // Perform the API call to post the answer
    axios
      .post("http://localhost:9000/api/quiz/answer", { answer })
      .then((response) => {
        dispatch({ type: POST_ANSWER_SUCCESS, payload: response.data });
        // Example usage of SET_SELECTED_ANSWER action type
        dispatch({ type: SET_SELECTED_ANSWER, payload: answer });
      })
      .catch((error) => {
        dispatch({ type: POST_ANSWER_FAILURE, payload: error });
      });
  };
}
export function postQuiz(quizData) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    dispatch({ type: POST_QUIZ_REQUEST });

    // Perform the API call to post the quiz
    axios
      .post("http://localhost:9000/api/quiz/new", quizData)
      .then((response) => {
        dispatch({ type: POST_QUIZ_SUCCESS, payload: response.data });
        // Example usage of SET_INFO_MESSAGE action type
        dispatch({ type: SET_INFO_MESSAGE, payload: "Quiz submitted successfully!" });
      })
      .catch((error) => {
        dispatch({ type: POST_QUIZ_FAILURE, payload: error });
      });
  };
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
