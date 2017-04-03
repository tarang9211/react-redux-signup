import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { updateStep } from '../actions/index';

class Credentials extends Component {

  onSubmit = props => {
    this.props.updateStep();
  }

  renderInput = props => {
    const isError = props.meta.touched && props.meta.error;
    return (
      <div className="form-field">
        {!isError && <label>{props.label}</label>}
        {isError && <span>{props.meta.error}</span>}
        <input {...props.input} type={props.type} />
      </div>
    );
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props; //redux-form provides this
    return (
      <form className="form-container" onSubmit={handleSubmit(this.onSubmit)}>

        <Field
          name="email"
          type="email"
          label="Email Address"
          component={this.renderInput}
        />

        <Field
          name="password"
          type="password"
          label="Password"
          component={this.renderInput}
        />

        <Field
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          component={this.renderInput}
        />

        <div className="actions">
          <button type="submit" disabled={ pristine || submitting }>Next</button>
        </div>

      </form>
    );
  }
};

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (values.email && !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
    errors.email = 'Enter a valid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm password is required';
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Please ensure passwords match';
  }


  return errors;
};

const mapStateToProps = state => ({
  data: state.form
})


Credentials = reduxForm({
  form: 'credentials',
  validate
})(Credentials);

export default connect(mapStateToProps, { updateStep })(Credentials);
