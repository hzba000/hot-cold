import React from 'react';

export default function FeedBack(props){
    if(props.feedbackProp === 'Correct'){
        alert('You have won the game, click on new game to play again!')
    }

    return(
        <div className="feedback-holder"> 
            <p> {props.feedbackProp} </p>
        </div>
    )
}
