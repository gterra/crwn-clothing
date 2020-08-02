import styled from "styled-components";
import CustomStyledButton from "./../custom-button/custom-button.styles";

export const SignUpDiv = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 80vw;

    ${CustomStyledButton} {
      width: 100%;
    }
  }
`;

export const TitleH2 = styled.h2`
  margin: 10px 0;
`;

export const ErrorMessage = styled.h2`
  margin: 10px 0;
  text-align: center;
  color: red;
`;
