import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

import sodaImg from './Soda.png';
import './Soda.css';

class Soda extends Component {
	state = {};
	render() {
		return (
			<div className="Soda">
				<img src={sodaImg} alt="coca cola can" />
				<Message>
					<h1>Soda</h1>
					<Link to="/">Go back</Link>
				</Message>
				<img src={sodaImg} alt="coca cola can" />
			</div>
		);
	}
}

export default Soda;
