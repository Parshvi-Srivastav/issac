// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, SET_QUIZ_INTO_STATE, SET_INFO_MESSAGE, SET_SELECTED_ANSWER, INPUT_QUESTION_CHANGE, TRUE_QUESTION_CHANGE, FALSE_QUESTION_CHANGE, MOVE_COUNTERCLOCKWISE } from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      return {
        ...state,
        initialWheelState: (initialWheelState + action.payload) % 6
      }
    case MOVE_COUNTERCLOCKWISE:
      return {
        ...state,
        initialWheelState: (initialWheelState - action.payload) % 6
      }
    default:
      return state
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      return {
        ...state,
        quizData: action.payload
      };
    default:
      return state;
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch (action.type) {
    case INPUT_QUESTION_CHANGE:
      return {
        ...state,
        newQuestion: action.payload
      };
    case TRUE_QUESTION_CHANGE:
      return {
        ...state,
        newTrueAnswer: action.payload
      }
    case FALSE_QUESTION_CHANGE:
      return {
        ...state,
        newFalseAnswer: action.payload
      }
    default:
      return state;
  }
}


export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
