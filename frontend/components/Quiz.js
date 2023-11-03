import React from 'react'
import { connect } from 'react-redux'
import { setQuiz } from '../state/action-creators'

function Quiz (props) {

  const { newQuestion, newTrueAnswer, newFalseAnswer } = props

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        newQuestion && newTrueAnswer && newFalseAnswer ? (
          <>
            <h2>{newQuestion}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {newTrueAnswer}
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                {newFalseAnswer}
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer
  }
}

export default connect(mapStateToProps, { setQuiz })(Quiz)
