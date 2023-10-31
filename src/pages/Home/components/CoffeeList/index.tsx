import { ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Text, Title } from "../../../../components/Typography";
import { addToCard } from "../../../../store/cartSlice";
import { Coffee, coffeSelect } from "../../../../store/coffeeSlice";
import { AddCartWrapper, CoffeeCardContainer, CoffeeCardFooter, CoffeeListContainer, Container, Tags } from "./style";

export function CoffeeList() {
  const coffes = useSelector(coffeSelect)
  
  return (
    <Container>
      <Title fontSize="title-l" color="gray-800" fontWeight={800}>
        Our Coffees
      </Title>
      <CoffeeListContainer>
        {coffes.map(coffee => <CoffeeCard coffee={coffee}/>)}
      </CoffeeListContainer>
    </Container>
  )
}

type CoffeeCardProps = {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  const formattedPrice = coffee.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCard() {
    dispatch(addToCard({ ...coffee, quantity }))
    setQuantity(1)
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} />
      <Tags>
        {coffee.tags.map((t: string) => <span key={t}>{t}</span>)}
      </Tags>
      <Title>{coffee.name}</Title>
      <Text>{coffee.description}</Text>

      <CoffeeCardFooter>
        <div>
          <Text>R$</Text>
          <Title>{formattedPrice}</Title>
        </div>
        <AddCartWrapper>
          <QuantityInput 
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={() => handleAddToCard()}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}