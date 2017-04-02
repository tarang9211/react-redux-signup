import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStep } from '../actions/index';

class Gender extends Component {

  handleClick = e => {
    this.props.updateStep();
  }

  render() {
    return (
      <div>Gender
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}


export default connect(null, {
  updateStep
})(Gender);
