import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";
import {
  clearItemFromCart,
  addCartItem,
  removeCartItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  item,
  clearItemFromCart,
  addCartItem,
  removeCartItem,
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={item.imageUrl} alt="item" />
    </div>
    <span className="name">{item.name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeCartItem(item)}>
        &#10094;
      </div>
      <span className="value">{item.quantity}</span>
      <div className="arrow" onClick={() => addCartItem(item)}>
        &#10095;
      </div>
    </span>
    <span className="price">{item.price}</span>
    <span className="remove-button" onClick={() => clearItemFromCart(item)}>
      &#10005;
    </span>
  </div>
);

const mapDispatchToProps = (dispach) => ({
  clearItemFromCart: (item) => dispach(clearItemFromCart(item)),
  addCartItem: (item) => dispach(addCartItem(item)),
  removeCartItem: (item) => dispach(removeCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
