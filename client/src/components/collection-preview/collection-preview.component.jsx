import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewDiv,
  PreviewDiv,
  TitleH1,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewDiv>
    <TitleH1>{title.toUpperCase()}</TitleH1>
    <PreviewDiv>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewDiv>
  </CollectionPreviewDiv>
);

export default CollectionPreview;
