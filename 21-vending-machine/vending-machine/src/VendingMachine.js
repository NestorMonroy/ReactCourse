import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import './VendingMachine.css';
import VendingMachineImg from './VendingMachine.png';

class VendingMachine extends Component {
	state = {};
	render() {
		return (
			<div className="VendingMachine" style={{ backgroundImage: `url(${VendingMachineImg})` }}>
				<Message>
					<h1>Hello i am a vending machine. what would you like to eat? </h1>
				</Message>
				<Message>
					<h1>
						<Link to="/soda">Soda </Link>
					</h1>
					<h1>
						<Link to="/chips">Chips </Link>
					</h1>
					<h1>
						<Link to="/sardines">Sardines </Link>
					</h1>
				</Message>
			</div>
		);
	}
}

export default VendingMachine;
