import React from "react";
import { withRouter } from "react-router-dom";

import {
  BackgroundImageDiv,
  MenuItemDiv,
  ContentDiv,
  TitleH1,
  SubTitleSpan,
} from "./menu-item.styles";

const MenuItem = ({ item, history, match }) => (
  <MenuItemDiv
    size={item.size}
    onClick={() => history.push(`${match.url}${item.linkUrl}`)}
  >
    <BackgroundImageDiv imageUrl={item.imageUrl} />
    <ContentDiv>
      <TitleH1>{item.title.toUpperCase()}</TitleH1>
      <SubTitleSpan>SHOP NOW</SubTitleSpan>
    </ContentDiv>
  </MenuItemDiv>
);

export default withRouter(MenuItem);
