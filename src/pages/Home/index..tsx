import { Text, Title } from "../../components/Typography";
import { HeroContainer, HeroImageContainer, HeroItemsContainer, HeroTextContainer, IconContainer } from "./style";

import { ShoppingCart } from "@phosphor-icons/react";
import heroImage from '../../assets/heroImage.png';
import { RoudedIconContainer } from "../../components/Icons";


export function Home() {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <Title color="gray-900" fontSize='title-xl' fontWeight={800}>
          Find the perfect coffee for any time of day
        </Title>
        <Text fontSize='text-m' fontWeight={400}>
          With Coffee Delivery you receive your coffee wherever you are, anytime
        </Text>
      </HeroTextContainer>
      
      <HeroItemsContainer>
        <IconContainer>
          <RoudedIconContainer color="yellow-300" iconColor="white">
            <ShoppingCart size={16}/>
          </RoudedIconContainer>
          <Text fontSize='text-m' fontWeight={400} lineHeight="130%" color="gray-700">
            Simple and secure purchase
          </Text>
        </IconContainer>

        <IconContainer>
          <RoudedIconContainer color="yellow-300" iconColor="white">
            <ShoppingCart size={16}/>
          </RoudedIconContainer>
          <Text fontSize='text-m' fontWeight={400} lineHeight="130%" color="gray-700">
            Simple and secure purchase
          </Text>
        </IconContainer>

        <IconContainer>
          <RoudedIconContainer color="yellow-300" iconColor="white">
            <ShoppingCart size={16}/>
          </RoudedIconContainer>
          <Text fontSize='text-m' fontWeight={400} lineHeight="130%" color="gray-700">
            Simple and secure purchase
          </Text>
        </IconContainer>

        <IconContainer>
          <RoudedIconContainer color="yellow-300" iconColor="white">
            <ShoppingCart size={16}/>
          </RoudedIconContainer>
          <Text fontSize='text-m' fontWeight={400} lineHeight="130%" color="gray-700">
            Simple and secure purchase
          </Text>
        </IconContainer>
      </HeroItemsContainer>

      <HeroImageContainer>
        <img src={heroImage} style={{ width: 476, height: 360}}/>
      </HeroImageContainer>
    </HeroContainer>
  )
}