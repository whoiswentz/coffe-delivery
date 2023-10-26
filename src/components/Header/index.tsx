import { HeaderButtonContainer, HeaderContainer } from "./style";

import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo}/>
      <HeaderButtonContainer>
      <button>
          <span><MapPin /></span>
          Porto Alegre
          </button>
        <button>
          <ShoppingCart />
        </button>
      </HeaderButtonContainer>
    </HeaderContainer>
  )
}