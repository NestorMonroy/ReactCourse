import React, { Component } from 'react';

class Rando extends Component {
	constructor(props) {
		super(props);
    this.state = { num: 0, color:'red' };
    this.makeTimer();
	}
	makeTimer() {
		setInterval(() => {
			let rand = Math.floor(Math.random() * this.props.maxNumber);
			this.setState({ num: rand });
		}, 1000);
	}
	render() {
    console.log('Change')
		return <div> {this.state.num} {this.state.color} </div>;
	}
}

export default Rando;
