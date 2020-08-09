import React from "react";

import { SignInSignUpPageDiv } from "./sign-in-sign-up.styles";

import SignIn from "./../../components/sign-in/sign-in.component";
import SignUp from "./../../components/sign-up/sign-up.component";

export const SignInSignUpPage = () => (
  <SignInSignUpPageDiv>
    <SignIn />
    <SignUp />
  </SignInSignUpPageDiv>
);

export default SignInSignUpPage;
