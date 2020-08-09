import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "./../menu-item/menu-item.component";

import { DirectoryMenuDiv } from "./directory.styles";

export const Directory = ({ sections }) => (
  <DirectoryMenuDiv>
    {sections.map((item) => (
      <MenuItem key={item.id} item={item} />
    ))}
  </DirectoryMenuDiv>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
