import React, { Component } from 'react';
import axios from 'axios';

import './ZenQuote.css';

class ZenQuote extends Component {
	constructor(props) {
		console.log('inside to contructor')
		super(props);
		this.state = { quote: '', isLoaded: false };
	}
	componentDidMount() {
		// load data
		console.log('inside componentDidMount')

		axios.get('https://api.github.com/zen').then((response) => {
			//console.log(response)
			//this.setState({ quote: response.data });
			setTimeout(
				function() {
					this.setState({ quote: response.data, isLoaded:true });
				}.bind(this),
				3000
			);
		});
		// set state with that data
	}
	componentDidUpdate(){
		console.log('inside componentDidUpdate')
	}
	render() {
		console.log('inside render')
		return (
			<div>
				{this.state.isLoaded ? (
					<div>
						<h1>Always remember ..</h1>
						<p> {this.state.quote} </p>
					</div>
				) : (
					<div className="loader" />
				)}
			</div>
		);
	}
}

export default ZenQuote;
