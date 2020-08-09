import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { CartIconDiv, ShoppingIcon, ItemCountSpan } from "./cart-icon.styles";

export const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconDiv onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountSpan>{itemCount}</ItemCountSpan>
  </CartIconDiv>
);

const mapDispatchToProps = (dispach) => ({
  toggleCartHidden: () => dispach(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
