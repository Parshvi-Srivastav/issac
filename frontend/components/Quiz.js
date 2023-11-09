import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setQuiz, postAnswer, fetchQuiz, postQuiz } from '../state/action-creators';

function Quiz(props) {
  const { newFalseAnswer, newQuestion, newTrueAnswer, initialQuizState } = props;
  useEffect(() => {
    !initialQuizState && fetchQuiz()
  }, [])

  return (
    <div id="wrapper">
      {newQuestion && newFalseAnswer && newTrueAnswer ? (
        <>
          <h2>{newQuestion}</h2>

          <div id="quizAnswers">
            <div className="answer ">
              {newTrueAnswer}
              <button>Select</button>
            </div>

            <div className="answer">
              {newFalseAnswer}
              <button>Select</button>
            </div>
          </div>

          <button id="submitAnswerBtn">
            Submit answer
          </button>
        </>
      ) : (
        'Loading next quiz...'
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    newQuestion: state.form.newQuestion,
    newFalseAnswer: state.form.newFalseAnswer,
    newTrueAnswer: state.form.newTrueAnswer,
    initialQuizState: state.quiz 
  }
}

export default connect(mapStateToProps, { setQuiz, postAnswer, fetchQuiz, postQuiz })(Quiz);
