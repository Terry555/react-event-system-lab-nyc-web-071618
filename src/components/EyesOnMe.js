// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {

  handleButtonFocus = () => console.log('Good!')
  handleButtonBlur = () => console.log('Hey! Eyes on me!')

  render(){
    return(
    <button
      onFocus={this.handleButtonFocus}
      onBlur={this.handleButtonBlur}
      >
      This is a button!
    </button>
  )}
}

export default EyesOnMe;
