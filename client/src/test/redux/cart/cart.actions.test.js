import CartActionTypes from "../../../redux/cart/cart.types";
import {
  toggleCartHidden,
  addCartItem,
  removeCartItem,
  clearItemFromCart,
  clearCart,
} from "../../../redux/cart/cart.actions";

describe("toggleCartHidden action", () => {
  it("should create the toggleHidden action", () => {
    expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN);
  });
});

describe("addItem action", () => {
  it("should create the addItem action", () => {
    const mockItem = {
      id: 1,
    };

    const action = addCartItem(mockItem);

    expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe("removeItem action", () => {
  it("should create the removeItem action", () => {
    const mockItem = {
      id: 1,
    };

    const action = removeCartItem(mockItem);

    expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe("clearItemFromCart action", () => {
  it("should create the clearItemFromCart action", () => {
    const mockItem = {
      id: 1,
    };

    const action = clearItemFromCart(mockItem);

    expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
    expect(action.payload).toEqual(mockItem);
  });
});

describe("clearCart action", () => {
  it("should create the clearCart action", () => {
    expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART);
  });
});
