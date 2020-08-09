import React from "react";
import { shallow } from "enzyme";
import SignInSignUpPage from "../../../pages/sign-in-sign-up/sign-in-sign-up.component";

it("should render SignInSignUpPage component", () => {
  expect(shallow(<SignInSignUpPage />)).toMatchSnapshot();
});
