import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFechting: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFechting: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFechting: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFechting: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
