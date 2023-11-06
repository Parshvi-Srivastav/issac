import React from 'react';
import { connect } from 'react-redux';
import { setQuiz, postAnswer, fetchQuiz } from '../state/action-creators';

function Quiz(props) {
  const { newQuestion, newTrueAnswer, newFalseAnswer, setQuiz, postAnswer, fetchQuiz } = props;

  const handleAnswerSelection = (selectedAnswer) => {
    // Dispatch the postAnswer action to send the selected answer to the server
    postAnswer(selectedAnswer);
  };

  const handleQuizSubmission = () => {
    // Dispatch the setQuiz action to reset the quiz state
    setQuiz();
    // Fetch a new quiz after submitting the answer
    fetchQuiz();
  };

  return (
    <div id="wrapper">
      {fetchQuiz() ? (
        <>
          <h2>{newQuestion}</h2>

          <div id="quizAnswers">
            <div className="answer selected" onClick={() => handleAnswerSelection(newTrueAnswer)}>
              {newTrueAnswer}
              <button>SELECTED</button>
            </div>

            <div className="answer" onClick={() => handleAnswerSelection(newFalseAnswer)}>
              {newFalseAnswer}
              <button>Select</button>
            </div>
          </div>

          <button id="submitAnswerBtn" onClick={handleQuizSubmission}>
            Submit answer
          </button>
        </>
      ) : (
        'Loading next quiz...'
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer,
  };
};

export default connect(mapStateToProps, { setQuiz, postAnswer, fetchQuiz })(Quiz);
