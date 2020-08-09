import React from "react";
import { shallow } from "enzyme";
import { Directory } from "../../../components/directory/directory.component";

it("should render Directory component", () => {
  expect(shallow(<Directory sections={[]} />)).toMatchSnapshot();
});
