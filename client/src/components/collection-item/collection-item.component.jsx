import React from "react";
import { connect } from "react-redux";
import { addCartItem } from "./../../redux/cart/cart.actions";

import {
  ImageDiv,
  AddButton,
  CollectionItemDiv,
  CollectionFooterDiv,
  NameSpan,
  PriceSpan,
} from "./collection-item.styles";

export const CollectionItem = ({ item, addCartItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemDiv>
      <ImageDiv imageUrl={imageUrl} />
      <CollectionFooterDiv>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{price}</PriceSpan>
      </CollectionFooterDiv>
      <AddButton inverted onClick={() => addCartItem(item)}>
        Add to cart
      </AddButton>
    </CollectionItemDiv>
  );
};

const mapDispatchToProps = (dispach) => ({
  addCartItem: (item) => dispach(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
