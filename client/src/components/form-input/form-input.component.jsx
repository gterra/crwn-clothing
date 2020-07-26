import React from "react";

import { GroupDiv, Input, FormInputLabel } from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupDiv>
    <Input onChange={handleChange} {...otherProps} />
    {label ? <FormInputLabel {...otherProps}>{label}</FormInputLabel> : null}
  </GroupDiv>
);

export default FormInput;
