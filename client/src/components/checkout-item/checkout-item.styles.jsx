import styled from "styled-components";

export const CheckoutItemDiv = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const ImageDiv = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextSpan = styled.span`
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 22%;
  }
`;

export const QuantitySpan = styled(TextSpan)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`;
QuantitySpan.displayName = "QuantitySpan";

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
RemoveButton.displayName = "RemoveButton";
