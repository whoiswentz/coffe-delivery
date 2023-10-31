import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export type CartItem = {
  id: string
  image: string
  tags: string[]
  name: string
  description: string
  price: number
  quantity: number
}

export type CartSliceState = {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  
}

const initialState: CartSliceState = {
  cartItems: [],
  cartQuantity: 0,
  cartItemsTotal: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCard: (state, { payload }: PayloadAction<CartItem>) => {
      const cartItems: CartItem[] = [...state.cartItems]

      console.log(payload)
      const cartItemIndex = state.cartItems.findIndex(c => c.id === payload.id)
      if (cartItemIndex < 0) {
        cartItems.push(payload)
      } else {
        cartItems[cartItemIndex] = {
          ...cartItems[cartItemIndex],
          quantity: cartItems[cartItemIndex].quantity + payload.quantity
        }
      }
      console.log(cartItems)

      const cartQuantity = cartItems.reduce((acc: number, current: CartItem) => acc + current.quantity, 0)
      const cartItemsTotal = cartItems.reduce((acc: number, current: CartItem) => {
        return acc + current.quantity * current.price
      }, 0)

      return { cartQuantity, cartItemsTotal, cartItems }
    }
  }
})

export const cartSelect = (state: RootState) => state.cart
export const { addToCard } = cartSlice.actions
export default cartSlice.reducer