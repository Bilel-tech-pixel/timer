import React from 'react'

class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            timer:0,
            start : false 
        }
        setInterval(
            () => {this.state.start  && 
                this.setState({timer:this.state.timer+1})
            },
            1000
        )

    }
    handleTimer =()=> {
        this.setState({
            start : !this.state.start
        })
    } 
    reset = () => {
        this.setState({
            timer : 0,
            start : false
        })
    }
    render(){
        var hours = parseInt( this.state.timer / 3600 );
        var minutes = parseInt( (this.state.timer - (hours * 3600)) / 60 );
        var seconds = Math.floor((this.state.timer - ((hours * 3600) + (minutes * 60))));
        var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
        console.log(result);
        return(
            <div>
                <h1>{result}</h1>
                <button className="btn" onClick={this.handleTimer}>{this.state.start ? "Pause" :"Start"}</button>
                <button className="btn" onClick={this.reset}>Reset</button>
            </div>
        )
    }
}


export default Timer