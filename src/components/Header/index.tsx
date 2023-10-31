import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./style";

import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { cartSelect } from "../../store/cartSlice";

export function Header() {
  const { cartQuantity } = useSelector(cartSelect)

  return (
    <HeaderContainer>
      <img src={logo}/>
      <HeaderButtonContainer>
        <HeaderButton color="purple">
          <MapPin size={20} weight="fill" />
          Curitiba, PR
        </HeaderButton>
          <NavLink to="/order-confirmation">
          <HeaderButton color="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
      </HeaderButtonContainer>
    </HeaderContainer>
  )
}