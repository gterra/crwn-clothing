import { takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "../../../redux/user/user.types";
import {
  clearCart,
  setCartFromFirebase,
} from "../../../redux/cart/cart.actions";
import {
  clearCartOnSignOut,
  onSignOutSuccess,
  checkCartFromFirebase,
} from "../../../redux/cart/cart.sagas";

describe("on signout success saga", () => {
  it("should trigger on SIGN_OUT_SUCCESS", async () => {
    const generator = onSignOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
    );
  });
});

describe("clear cart on signout saga", () => {
  it("should fire clearCart", () => {
    const generator = clearCartOnSignOut();
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});

describe("ceck cart items from server on signin saga", () => {
  it("should fire setCartFromFirebase", () => {
    const mockUserPayload = { payload: { user: { id: "1" } } };
    const mockCartRef = { get: () => {} };
    const mockCartItems = [
      { imageUrl: "", price: 32.4, name: "item", quantity: 2 },
    ];
    const mockCartSnapshot = {
      data: () => {
        return {
          cartItems: mockCartItems,
        };
      },
    };
    const generator = checkCartFromFirebase(mockUserPayload);
    generator.next();
    generator.next(mockCartRef);
    expect(generator.next(mockCartSnapshot).value).toEqual(
      put(setCartFromFirebase(mockCartItems))
    );
  });
});
