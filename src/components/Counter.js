import React from 'react';

export default function Counter (props){
    return(
        <div className="counter-holder">
            <p> Guess #: {props.guessProp} </p>
        </div>
    )
}

Counter.defaultProps = {guessProp: "Not guessed yet"};