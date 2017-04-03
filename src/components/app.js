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
    const { step } = this.props.data;

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
    const { step } = this.props.data;
    return (
      <main>
        <h4 className='centered'>Sign Up</h4>
        <progress max='3' value={step}></progress>
        {this.showForm()}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps)(App);
