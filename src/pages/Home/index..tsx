import { Text, Title } from "../../components/Typography";
import { HeroContainer } from "./style";

export function Home() {
  return (
    <HeroContainer>
      <Title color="gray-900" fontSize='title-xl' fontWeight={800}>
        Find the perfect coffee for any time of day
      </Title>
      <Text fontSize='text-m' fontWeight={400}>
        With Coffee Delivery you receive your coffee wherever you are, anytime
      </Text>
    </HeroContainer>
  )
}