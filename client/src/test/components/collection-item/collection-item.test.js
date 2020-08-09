import React from "react";
import { shallow } from "enzyme";

import { CollectionItem } from "../../../components/collection-item/collection-item.component";

describe("CollectionItem component", () => {
  let wrapper;
  let mockAddItem;
  const imageUrl = "www.testImage.com";
  const mockName = "black hat";
  const mockPrice = 10;

  beforeEach(() => {
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        imageUrl: imageUrl,
        price: mockPrice,
        name: mockName,
      },
      addCartItem: mockAddItem,
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it("should render CollectionItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call addItem when AddButton clicked", () => {
    wrapper.find("AddButton").simulate("click");

    expect(mockAddItem).toHaveBeenCalled();
  });

  it("should render imageUrl as a prop on ImageDiv", () => {
    expect(wrapper.find("ImageDiv").prop("imageUrl")).toBe(imageUrl);
  });

  it("should render name prop in NameSpan", () => {
    expect(wrapper.find("NameSpan").text()).toBe(mockName);
  });

  it("should render price prop in PriceSpan", () => {
    const price = parseInt(wrapper.find("PriceSpan").text());
    expect(price).toBe(mockPrice);
  });
});
