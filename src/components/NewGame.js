import React from 'react';

export default function NewGame(props){
    return(
        <div>    
            <button onClick={props.reset}> Start a new Game</button>
        </div>
    )

}