import React, {Component} from 'react';

class Stopwatch extends React.Component {

    state ={
        isRunning:false
    }

    handleStopWatch = ()=>{
        this.setState(prevState => ({
            isRunning:!prevState.isRunning,
            ellapseTime:0,
            previousTime:0,
        }))
        if(!this.state.isRunning){
            this.setState({previousTime: Date.now()})
        }
    }

    componentDidMount(){
       this.intervalID = setInterval(()=> this.tick(),100);

    }
    tick = ()=> {
     if(this.state.isRunning == true){
         const  now = Date.now();
         this.setState(prevState => ({previousTime:now, ellapseTime: prevState.ellapseTime + (now - this.state.previousTime)}))
     }
    }

    handleReset  = ()=>{
        this.setState({ellapseTime: 0});
    }

    componentWillUnMount(){
        //Removes component if no longer needed.
        clearInterval(this.intervalID);
    }

    render(){
        let time = Math.floor(this.state.ellapseTime / 1000);

        return(<div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{time}</span>
            <button onClick={this.handleStopWatch}>{this.state.isRunning ? 'Stop':'Start'}</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>);
    }
}

export default Stopwatch;