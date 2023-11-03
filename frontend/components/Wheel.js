import React from 'react'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'

function Wheel (props) {
  console.log(props.initialWheelState);
  const clockWiseClick = () => {
    props.moveClockwise(0);
  };

  const counterClockWiseClick = () => {
    props.moveClockwise(0);
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={props.initialWheelState === 0 ? "cog active" : "cog"} style={{ "--i": 0 }}>B</div>
        <div className={props.initialWheelState === 1 ? "cog active" : "cog"} style={{ "--i": 1 }}></div>
        <div className={props.initialWheelState === 2 ? "cog active" : "cog"} style={{ "--i": 2 }}></div>
        <div className={props.initialWheelState === 3 ? "cog active" : "cog"} style={{ "--i": 3 }}></div>
        <div className={props.initialWheelState === 4 ? "cog active" : "cog"} style={{ "--i": 4 }}></div>
        <div className={props.initialWheelState === 5 ? "cog active" : "cog"} style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={counterClockWiseClick} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={clockWiseClick}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    initialWheelState: state.wheel.initialWheelState
  }
}


export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel)


