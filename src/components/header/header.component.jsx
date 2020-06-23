import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { HeaderDiv, OptionsDiv, OptionLink } from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderDiv>
    <OptionLink to="">
      <Logo className="logo" />
    </OptionLink>
    <OptionsDiv>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink className="option" to="/signIn">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsDiv>
    {hidden ? null : <CartDropdown />}
  </HeaderDiv>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
