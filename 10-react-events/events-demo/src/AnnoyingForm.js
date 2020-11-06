import React, { Component } from 'react';

class AnnoyingForm extends Component {
    handleKeyUp(e){
        if(e.keyCode === 56) {
            alert(" I love to ** ")   
        }else {
            alert("Boo")
        }
    }

    render() { 
        return ( 
            <div>
                <h3>Try Typing in here:</h3>
                <textarea onKeyUp={this.handleKeyUp}  />
            </div>
         );
    }
}
 
export default AnnoyingForm;