import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";

import { SignUpDiv, TitleH2, ErrorMessage } from "./sign-up.styles";

import { emailSignUpStart } from "../../redux/user/user.actions";
import { selectError } from "./../../redux/user/user.selectors";

const SignUp = ({ emailSignUpStart, error }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    emailSignUpStart(displayName, email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpDiv>
      <TitleH2>I do not have an account</TitleH2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          required
          label="Name"
          handleChange={handleChange}
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          label="Email"
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          label="Password"
          handleChange={handleChange}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
          label="Confirm password"
          handleChange={handleChange}
        />

        <CustomButton type="submit">Sign up</CustomButton>
      </form>
      {error ? <ErrorMessage>{error.message}</ErrorMessage> : null}
    </SignUpDiv>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
  emailSignUpStart: (displayName, email, password) =>
    dispatch(emailSignUpStart({ displayName, email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
