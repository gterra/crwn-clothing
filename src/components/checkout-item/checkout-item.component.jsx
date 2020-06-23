import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addCartItem,
  removeCartItem,
} from "../../redux/cart/cart.actions";

import {
  TextSpan,
  CheckoutItemDiv,
  ImageDiv,
  QuantitySpan,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({
  item,
  clearItemFromCart,
  addCartItem,
  removeCartItem,
}) => (
  <CheckoutItemDiv>
    <ImageDiv>
      <img src={item.imageUrl} alt="item" />
    </ImageDiv>
    <TextSpan>{item.name}</TextSpan>
    <QuantitySpan>
      <div onClick={() => removeCartItem(item)}>&#10094;</div>
      <span>{item.quantity}</span>
      <div onClick={() => addCartItem(item)}>&#10095;</div>
    </QuantitySpan>
    <TextSpan>{item.price}</TextSpan>
    <RemoveButton onClick={() => clearItemFromCart(item)}>
      &#10005;
    </RemoveButton>
  </CheckoutItemDiv>
);

const mapDispatchToProps = (dispach) => ({
  clearItemFromCart: (item) => dispach(clearItemFromCart(item)),
  addCartItem: (item) => dispach(addCartItem(item)),
  removeCartItem: (item) => dispach(removeCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
