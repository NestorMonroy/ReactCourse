import React, { Component } from 'react';

class Demo extends Component {
	constructor(props) {
    super(props)
    this.state = {color:'red'}
    
  }

	render() {
		return <div> {this.props.animal} {this.state.color} </div>;
	}
}

export default Demo;
