import React from 'react';

export default class Submission extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            previousnumber: 0,
            currentnumber: 0,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(event){
            event.preventDefault();
            let userSubmission = this.Submission.value.trim();
            if(userSubmission){
                this.Submission.value = '';
                this.props.iterateGuess();

            this.props.displayPastGuess(userSubmission);
            this.props.checkHotCold(parseInt(userSubmission,10));
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