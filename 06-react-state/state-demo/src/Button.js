import React, { Component } from 'react';

class Button extends Component {
  state = {  }
  render() { 
    return ( 
      <button
        onClick={function(){
          alert('Click')
        }}
      >
        Click me
      </button>
     );
  }
}
 
export default Button;