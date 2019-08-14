import React from 'react';
import PropTypes from 'prop-types';
//State less component
// Destructuring or pass into function rather than props
const Counter = ({index,score,changeScore}) => {
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => changeScore(index,-1)}> - </button>
            <span className="counter-score" >{ score }</span>
            <button className="counter-action increment" onClick={() => changeScore(index,+1)}> + </button>
        </div>
    );
}

Counter.propTypes = {
    index:PropTypes.number, // Checks prop types are a number
 score:PropTypes.number,
 changeScore: PropTypes.func
}
export  default Counter;