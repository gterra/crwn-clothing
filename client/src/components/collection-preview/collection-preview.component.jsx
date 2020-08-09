import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewDiv,
  PreviewDiv,
  TitleH1,
} from "./collection-preview.styles";

export const CollectionPreview = ({
  title,
  items,
  history,
  match,
  routeName,
}) => (
  <CollectionPreviewDiv>
    <TitleH1 onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleH1>
    <PreviewDiv>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewDiv>
  </CollectionPreviewDiv>
);

export default withRouter(CollectionPreview);
