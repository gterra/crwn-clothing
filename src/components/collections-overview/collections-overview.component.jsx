import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollections } from "./../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

import CollectionPreview from "./../../components/collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map((collections) => (
      <CollectionPreview
        key={collections.id}
        title={collections.title}
        items={collections.items}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
