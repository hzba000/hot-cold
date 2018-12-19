import React from 'react';


export default function PastGuess(props){
    return(
        <div className="pastguess-holder">
            <p> Past Guesses </p>
            <p> {props.pastProp.toString()} </p>
        </div>
    )
}
