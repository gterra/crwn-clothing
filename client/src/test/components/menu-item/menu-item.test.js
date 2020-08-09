import React from "react";
import { shallow } from "enzyme";

import { MenuItem } from "../../../components/menu-item/menu-item.component";

describe("MenuItem component", () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const linkUrl = "/hats";
  const size = "large";
  const imageUrl = "testimage";

  beforeEach(() => {
    mockMatch = {
      url: "/shop",
    };

    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      item: { linkUrl, size, title: "hats", imageUrl },
    };

    wrapper = shallow(<MenuItem {...mockProps} />);
  });

  it("should render MenuItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push with the right string when MenuItemDiv clicked", () => {
    wrapper.find("MenuItemDiv").simulate("click");

    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`);
  });

  it("should pass size to MenuItemDiv as the prop size", () => {
    expect(wrapper.find("MenuItemDiv").prop("size")).toBe(size);
  });

  it("should pass imageUrl to BackgroundImageDiv as the prop imageUrl", () => {
    expect(wrapper.find("BackgroundImageDiv").prop("imageUrl")).toBe(imageUrl);
  });
});
