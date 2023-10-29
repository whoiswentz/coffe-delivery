import american from '../assets/coffes/american.png'
import arabic from '../assets/coffes/arabic.png'
import capuccino from '../assets/coffes/capuccino.png'
import coffeeWithMilk from '../assets/coffes/coffee-with-milk.png'
import coldBrew from '../assets/coffes/cold-brew.png'
import creamyEspresso from '../assets/coffes/creamy-espresso.png'
import espresso from '../assets/coffes/espresso.png'


export type Coffee = {
  id: string
  image: string
  tags: string[]
  name: string
  description: string
  price: number
}

export const coffees: Coffee[] = [
  {
    id: new Date().toISOString(),
    image: espresso,
    tags: ['tradicional'],
    name: 'Tradicional Espresso',
    description: 'Traditional coffee made with hot water and ground beans',
    price: 9.90
  },
  {
    id: new Date().toISOString(),
    image: american,
    tags: ['tradicional'],
    name: 'American Espresso',
    description: 'Diluted espresso, less intense than traditional',
    price: 9.90
  },
  {
    id: new Date().toISOString(),
    image: capuccino,
    tags: ['tradicional', 'milk'],
    name: 'Capuccino',
    description: 'Cinnamon drink made from equal doses of coffee, milk and foam',
    price: 9.90
  },
  {
    id: new Date().toISOString(),
    image: arabic,
    tags: ['tradicional'],
    name: 'Arabic',
    description: 'Drink prepared with Arabic coffee beans and spices',
    price: 9.90
  },
  {
    id: new Date().toISOString(),
    image: coffeeWithMilk,
    tags: ['tradicional', 'milk'],
    name: 'Coffee with milk',
    description: 'Half and half traditional espresso with steamed milk',
    price: 9.90
  },
  {
    id: new Date().toISOString(),
    image: coldBrew,
    tags: ['tradicional', 'cold'],
    name: 'Cold Brew',
    description: 'Drink prepared with espresso and ice cubes',
    price: 9.90
  },
  {
    id: new Date().toISOString(),
    image: creamyEspresso,
    tags: ['tradicional'],
    name: 'Creamy Espresso',
    description: 'Traditional espresso with creamy foam',
    price: 9.90
  }
]