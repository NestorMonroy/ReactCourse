/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import pug from './pug.jpeg';

import './Dog.css';

class Dog extends Component {
    render(){
        return (
            <div className="Dog" >
                <h1>Dog</h1>
                <img className="Dog-img" src={pug} />
            </div>
        )
    }
}

export default Dog;