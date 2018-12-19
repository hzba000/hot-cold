import React from 'react';
import NewGame from './components/NewGame'
import FeedBack from './components/FeedBack'
import Counter from './components/Counter'
import PastGuess from './components/PastGuess'
import Submission from './components/Submission'

let pastArray = [];
let randomNumGlobal = Math.floor((Math.random()*100)+1);

export class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            guess: 0,
            pastguess: [],
            feedback: 'Welcome to Hot and Cold',
            numberToGuess: randomNumGlobal
        }
        this.displayPastGuess = this.displayPastGuess.bind(this);
        this.storeFeedback = this.storeFeedback.bind(this);
        this.reset = this.reset.bind(this);
        this.checkHotCold = this.checkHotCold.bind(this);
        this.iterateGuess = this.iterateGuess.bind(this);
    }

    displayPastGuess(number){
        pastArray.push(number);
        this.setState({pastguess: pastArray});
    }
    storeFeedback(feedback){
        this.setState({feedback})
    }
    reset(){
        pastArray = [];
        this.setState({guess:0, pastguess:[], feedback:'Welcome to Hot and Cold'})
        randomNumGlobal = Math.floor((Math.random()*100)+1);
    }
    checkHotCold(userSubmission){
        if(userSubmission === randomNumGlobal){
            this.storeFeedback('Correct')
        }
        else if(Math.abs(userSubmission - randomNumGlobal)<5){
            this.storeFeedback('Warm')
        }
        else{
            this.storeFeedback('Cold')
        }
    }

    iterateGuess(){
        console.log("Number to guess: ", this.state.numberToGuess)
        let currentGuess = this.state.guess;
        currentGuess++;
        this.setState({guess: currentGuess});
    }

    render(){
        const guessProp = this.state.guess;
        const pastProp = this.state.pastguess;
        const feedbackProp = this.state.feedback
        return(
        <div className="window-holder">
            {<FeedBack feedbackProp = {feedbackProp}/>};
            {<Submission 
                displayPastGuess={this.displayPastGuess}
                storeFeedback = {this.storeFeedback}
                checkHotCold = {this.checkHotCold}
                iterateGuess = {this.iterateGuess}
             />};
            {<Counter guessProp={guessProp}/>}
            {<PastGuess pastProp={pastProp}/>}
            {<NewGame reset = {this.reset} />}
        </div>
        )
    }
}



