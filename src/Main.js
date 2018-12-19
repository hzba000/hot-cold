import React from 'react';
let pastArray = [];
let randomNumGlobal = Math.floor((Math.random()*100)+1);
let count = 0;


export class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            guess: 0,
            pastguess: [],
            feedback: 'Welcome to Hot and Cold',
            numberToGuess: ''
        }
        this.acceptGuessCounter = this.acceptGuessCounter.bind(this);
        this.displayPastGuess = this.displayPastGuess.bind(this);
        this.storeFeedback = this.storeFeedback.bind(this);
        this.reset = this.reset.bind(this);
    }
    acceptGuessCounter(count){
        this.setState({guess: count});
        console.log('mynum',randomNumGlobal);
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
        this.setState({guess:0, pastguess:[], feedback:'Welcome to Hot and Cold', })
        randomNumGlobal = Math.floor((Math.random()*100)+1);
    }


    render(){
        const guessProp = this.state.guess;
        const pastProp = this.state.pastguess;
        const feedbackProp = this.state.feedback
        return(
        <div className="window-holder">
            {<FeedBack feedbackProp = {feedbackProp}/>};
            {<Submission 
                acceptGuessCounter={this.acceptGuessCounter}
                displayPastGuess={this.displayPastGuess}
                storeFeedback = {this.storeFeedback}
             />};
            {<Counter guessProp={guessProp}/>}
            {<PastGuess pastProp={pastProp}/>}
            {<NewGame reset = {this.reset} />}
        </div>
        )
    }
}

export function NewGame(props){
    return(
        <div>    
            <button onClick={props.reset}> Start a new Game</button>
        </div>
    )

}

export function FeedBack(props){
    if(props.feedbackProp === 'Correct'){
        alert('You have won the game, click on new game to play again!')
    }

    return(
        <div className="feedback-holder"> 
            <p> {props.feedbackProp} </p>
        </div>
    )
}

export class Submission extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            previousnumber: 0,
            currentnumber: 0,
        }

        // this.changeCurrentNumber = this.changeCurrentNumber.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkHotCold = this.checkHotCold.bind(this);
        // this.props.acceptGuessCounter(this.state.guess)
    }

    // changeCurrentNumber(event){  
    //      this.setState({currentnumber: event.target.value})
    //      const currentnumber = this.state.currentnumber;
    //      this.setState({previousnumber: currentnumber})
    // }

    // handleSubmit(event){
    //     event.preventDefault();
    //     const userSubmission = this.Submission.value.trim();
    //     console.log(userSubmission);
    //     this.Submission.value = '';

    //     this.setState(()=>({currentnumber: userSubmission}))
    //     console.log("HELD IN STATE" + this.state.currentnumber);

    // }

    handleSubmit(event){
            event.preventDefault();
            let userSubmission = this.Submission.value.trim();
            if(userSubmission){
                this.Submission.value = '';
                count++;
            //     this.setState(
            //         (prevState)=>({count: prevState.count + 1})
                
            // )
            this.props.displayPastGuess(userSubmission);
            console.log("user",userSubmission);
            this.props.acceptGuessCounter(count);
            this.checkHotCold(parseInt(userSubmission,10));
            }
    
    //     myPromise.then((userSubmission)=>{
    //         this.setState({currentnumber: userSubmission})
    //         this.setState(
    //             (prevState)=>({count: prevState.count + 1}),
    //             this.props.acceptGuessCounter(this.state.count)
    //     )
    //         console.log("Child" + this.state.count);
    // })
    }

    checkHotCold(userSubmission){
        if(userSubmission === randomNumGlobal){
            this.props.storeFeedback('Correct')
        }
        else if(Math.abs(userSubmission - randomNumGlobal)<5){
            this.props.storeFeedback('Warm')
        }
        else{
            this.props.storeFeedback('Cold')
        }

    }



    render(){
        return(
            <div className="submission-holder">
                <form className = "test" onSubmit = {this.handleSubmit}  >
                    <input placeholder="Enter your guess" currentnumber={this.state.currentnumber} ref={input => this.Submission = input}></input>
                    <button type="submit"> Submit </button>
                </form>

            </div>
        )
    }
}

export function Counter (props){
    return(
        <div className="counter-holder">
            <p> Guess #: {props.guessProp} </p>
        </div>
    )
}

Counter.defaultProps = {guessProp: "Not guessed yet"};

export function PastGuess(props){
    console.log("Before Render",props.pastProp);
    return(
        <div className="pastguess-holder">
            <p> Past Guesses </p>
            <p> {props.pastProp.toString()} </p>
        </div>
    )
}
