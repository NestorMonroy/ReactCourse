import React, { Component } from 'react';

class CopyDemo extends Component {
	handleCopy(){
        alert("Stop stealing for me")
    }
	render() {
		return (
			<div>
				<h3>Try Copying Some of this Text: </h3>
				<section
                    style={{ width: "300px", display: "inline-block"  }}
                    onCopy={this.handleCopy}
                >
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo qui mollitia voluptate harum
					beatae magni molestias pariatur. Labore tempore autem aperiam minus facere ea excepturi quisquam
					alias vitae aspernatur.
				</section>
			</div>
		);
	}
}

export default CopyDemo;
