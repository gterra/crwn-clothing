import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";

import { SignUpDiv, TitleH2, ErrorMessage } from "./sign-up.styles";

import { emailSignUpStart } from "../../redux/user/user.actions";
import { selectError } from "./../../redux/user/user.selectors";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { emailSignUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    emailSignUpStart(displayName, email, password);
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { error } = this.props;
    return (
      <SignUpDiv>
        <TitleH2>I do not have an account</TitleH2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={this.state.displayName}
            required
            label="Name"
            handleChange={this.handleChange}
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            label="Email"
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            label="Password"
            handleChange={this.handleChange}
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            required
            label="Confirm password"
            handleChange={this.handleChange}
          />

          <CustomButton type="submit">Sign up</CustomButton>
        </form>
        {error ? <ErrorMessage>{error.message}</ErrorMessage> : null}
      </SignUpDiv>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
  emailSignUpStart: (displayName, email, password) =>
    dispatch(emailSignUpStart({ displayName, email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
