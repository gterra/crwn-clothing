import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "./../../redux/shop/shop.selectors";
import CollectionItem from "./../../components/collection-item/collection-item.component";

import { CollectionPageDiv, TitleH2, ItemsDiv } from "./collection.styles";

const CollectionPage = ({ collection }) => (
  <CollectionPageDiv>
    <TitleH2>{collection.title}</TitleH2>
    <ItemsDiv>
      {collection.items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </ItemsDiv>
  </CollectionPageDiv>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
