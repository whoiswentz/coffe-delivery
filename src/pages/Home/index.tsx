import { CoffeeList } from "./components/CoffeeList";
import { HeroSection } from "./components/HeroSection/index.";
import { HomeContainer } from "./components/style";

export function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <CoffeeList />
    </HomeContainer>
  )
}