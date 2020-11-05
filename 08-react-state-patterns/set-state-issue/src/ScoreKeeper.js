import React, { Component } from 'react';

class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 }
    this.singleKill = this.singleKill.bind(this)
    this.tripleKill = this.tripleKill.bind(this)

  }

  singleKill(){
    this.setState({score: this.state.score + 1 });
  }

/*   tripleKill(){
    this.setState({score: this.state.score + 1 });
    this.setState({score: this.state.score + 1 });
    this.setState({score: this.state.score + 4 });
  } */

/*   tripleKill(){
    this.setState(st => {return {score: st.score + 1}});
    this.setState(st => {return {score: st.score + 1}});
    this.setState(st => {return {score: st.score + 1}});
  }
 */

  incementScore(curState) {
    return { score: curState.score + 1  }
  }

  tripleKill(){
    this.setState(this.incementScore)
    this.setState(this.incementScore)
    this.setState(this.incementScore)
  }
  render() { 
    return (
      <div>
        <h1>Score is {this.state.score} </h1>
        <button onClick={this.singleKill} >Single Kill</button>
        <button onClick={this.tripleKill} > Truple Kill</button>
      </div>
       );
  }
}
 
export default ScoreKeeper;