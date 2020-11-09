import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { time : new Date() }
        console.log('in Constructor')
    }
    componentDidMount(){
        console.log('in ComponentDidMount')
        this.timerID = setInterval(() => {
            this.setState({time: new Date()})
        }, 1000);
    }
    render() { 
        console.log('in render')
        return ( 
            <div>
                {this.state.time.getSeconds()}
            </div>
         );
    }
}
 
export default Timer;