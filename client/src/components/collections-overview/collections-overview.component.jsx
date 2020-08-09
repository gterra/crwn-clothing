import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionsForPreview } from "./../../redux/shop/shop.selectors";

import CollectionPreview from "./../../components/collection-preview/collection-preview.component";

import { CollectionsOverviewDiv } from "./collections-overview.styles";

export const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewDiv>
    {collections.map((collections) => (
      <CollectionPreview
        key={collections.id}
        title={collections.title}
        items={collections.items}
      />
    ))}
  </CollectionsOverviewDiv>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
