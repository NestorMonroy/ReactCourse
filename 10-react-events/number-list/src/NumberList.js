import React, { Component } from 'react';
import NumItem from './NumberItem';

class NumberList extends Component {
	constructor(props) {
		super(props);
		this.state = { nums: [ 1, 2, 3, 4, 5 ] };
	}
	remove(num) {
		this.setState((st) => ({
			nums: st.nums.filter((n) => n !== num)
		}));
	}
	render() {
		let nums = this.state.nums.map(n => (
      <NumItem key={n} value={n} remove={() => this.remove(n)} />
    ));
		return (
			<div>
				<h1>First Numbert List</h1>
				<ul> {nums} </ul>
			</div>
		);
	}
}

export default NumberList;
