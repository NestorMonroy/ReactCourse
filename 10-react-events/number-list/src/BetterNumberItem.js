import React, { Component } from 'react';

class BetterNumberItem extends Component {
  constructor(props){
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
  }
  handleRemove(e){
    console.log("Inside handle remove")
    this.props.remove(this.props.value)
  }
	render() {
		return (
			<li>
				{this.props.value}
				<button onClick={this.handleRemove}>X</button>
			</li>
		);
	}
}

export default BetterNumberItem;
