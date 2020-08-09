import React from "react";
import { shallow } from "enzyme";
import Homepage from "../../../pages/homepage/homepage.component";

it("should render Homepage component", () => {
  expect(shallow(<Homepage />)).toMatchSnapshot();
});
