import React, { Component } from 'react';
import { connect } from 'react-redux';
import Credentials from './credentials';
import Gender from './gender';
import Success from './success';

class App extends Component {
  constructor(props) {
    super(props);
  }

  showForm = () => {
    const { step } = this.props.form;

    switch (step) {
      case 1:
        return <Credentials />;
      case 2:
        return <Gender />;
      case 3:
        return <Success />;
    }
  }

  render() {
    const { step } = this.props.form;
    return (
      <main>
        <h4>Sign Up</h4>
        <progress max='3' value={step}></progress>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form
});

export default connect(mapStateToProps)(App);
