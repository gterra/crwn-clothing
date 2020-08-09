import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  CheckoutPageDiv,
  HeaderDiv,
  HeaderBlockDiv,
  TextWarningDiv,
  TotalDiv,
} from "./checkout.styles";

import {
  selectCartItems,
  selectCartItemsTotal,
} from "./../../redux/cart/cart.selectors";

import CheckoutItem from "./../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "./../../components/stripe-button/stripe-button.component";

export const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageDiv>
    <HeaderDiv>
      <HeaderBlockDiv>
        <span>Product</span>
      </HeaderBlockDiv>
      <HeaderBlockDiv>
        <span>Description</span>
      </HeaderBlockDiv>
      <HeaderBlockDiv>
        <span>Quantity</span>
      </HeaderBlockDiv>
      <HeaderBlockDiv>
        <span>Price</span>
      </HeaderBlockDiv>
      <HeaderBlockDiv>
        <span>Remove</span>
      </HeaderBlockDiv>
    </HeaderDiv>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} item={cartItem} />
    ))}
    <TotalDiv>
      <span>TOTAL: ${total}</span>
    </TotalDiv>
    <TextWarningDiv>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
    </TextWarningDiv>
    <StripeCheckoutButton price={total} />
  </CheckoutPageDiv>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
