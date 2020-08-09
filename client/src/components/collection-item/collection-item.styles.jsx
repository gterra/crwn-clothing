import styled from "styled-components";
import CustomButton from "./../custom-button/custom-button.component";

export const ImageDiv = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
ImageDiv.displayName = "ImageDiv";

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;
AddButton.displayName = "AddButton";

export const CollectionItemDiv = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${ImageDiv} {
      opacity: 0.85;
    }

    ${AddButton} {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      ${ImageDiv} {
        opacity: unset;
      }

      ${AddButton} {
        opacity: unset;
      }
    }
  }
`;

export const CollectionFooterDiv = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameSpan = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
NameSpan.displayName = "NameSpan";

export const PriceSpan = styled.span`
  width: 10%;
`;
PriceSpan.displayName = "PriceSpan";
