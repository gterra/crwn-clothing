import React from "react";
import { shallow } from "enzyme";
import CartItem from "../../../components/cart-item/cart-item.component";

it("should render CartItem component", () => {
  const mockItem = {
    imageUrl: "www.testImage.com",
    price: 10,
    name: "hats",
    quantity: 2,
  };

  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});
