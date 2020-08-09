import React from "react";

import CustomStyledButton from "./custom-button.styles";

export const CustomButton = ({ children, ...props }) => (
  <CustomStyledButton {...props}>{children}</CustomStyledButton>
);

export default CustomButton;
