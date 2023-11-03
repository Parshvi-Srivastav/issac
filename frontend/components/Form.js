import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { inputQuestionChange, trueQuestionChange, falseQuestionChange } from '../state/action-creators'

export function Form(props) {

  const questionInputChange = evt => {
    props.inputQuestionChange({[evt.target.name]: evt.target.value})
  }

  const trueInputChange = evt => {
    props.trueQuestionChange({[evt.target.name]: evt.target.value})
  }

  const falseInputChange = evt => {
    props.falseQuestionChange({[evt.target.name]: evt.target.value})
  }

  const onSubmit = evt => {
    evt.preventDefault()
    axios.post('http://localhost:9000/api/quiz/new', { "question_text": props.newQuestion, "true_answer_text": props.newTrueAnswer, "false_answer_text": props.newFalseAnswer })
      .then(res => {
        console.log(res);
      })
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={questionInputChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={trueInputChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={falseInputChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer
  }
}

export default connect(mapStateToProps, {inputQuestionChange, trueQuestionChange, falseQuestionChange})(Form)
