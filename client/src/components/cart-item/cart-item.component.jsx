import React from "react";

import { CartItemDiv, ItemDetailsDiv, NameSpan } from "./cart-item.styles";

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemDiv>
    <img src={imageUrl} alt="item" />
    <ItemDetailsDiv>
      <NameSpan>{name}</NameSpan>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsDiv>
  </CartItemDiv>
);

export default React.memo(CartItem);
