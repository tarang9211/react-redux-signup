import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStep } from '../actions/index';

class Credentials extends Component {

  handleClick = e => {
    this.props.updateStep();
  }

  render() {
    return (
      <div>
        Credentials
        <button onClick={this.handleClick}>next</button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  form: state.form;
};

export default connect(null, {
  updateStep
})(Credentials);
