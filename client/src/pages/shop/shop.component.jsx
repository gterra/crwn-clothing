import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import Spinner from "./../../components/spinner/spinner.component";

const CollectionsOverviewContainer = lazy(() =>
  import(
    "./../../components/collections-overview/collections-overview.container"
  )
);

const CollectionPageContainer = lazy(() =>
  import("./../collection/collection.container")
);

export const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        ></Route>
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispach) => ({
  fetchCollectionsStart: () => dispach(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
