import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: [],
        totalPrice: 0,
        cartQuantity: 1
    },
    reducers: {
        addToCart(state, action) {
            const cartItem = action.payload
            const Itemquantity = action.payload.quantity


            const existingItem = state.itemList.find((item) => item.id === cartItem.id)
            if (existingItem) {
                existingItem.quantity += cartItem.quantity
                const findme = cartItem.price * existingItem.quantity
                existingItem.totalPrice = findme
                // console.log(findme)
            } else {
                const items = {
                    id: cartItem.id,
                    price: cartItem.price,
                    quantity: Itemquantity,
                    name: cartItem.name,
                    totalPrice: cartItem.price * Itemquantity,
                }
                state.itemList.push(items)

                
            }

        }, incrementQuantityCartItem(state, action) {
            const cartItem = action.payload
            const existingItem = state.itemList.find((item) => item.id === cartItem.id)

            if (existingItem) {
                existingItem.quantity += 1
                const findme = cartItem.price * existingItem.quantity
                existingItem.totalPrice = findme
            }
        },
        substractQuantityCartItem(state, action) {
            const cartItem = action.payload
            const existingItem = state.itemList.find((item) => item.id === cartItem.id)

            if (existingItem.quantity === 1) {
                existingItem.quantity =1
            }else{
                existingItem.quantity -= 1
                const findme = cartItem.price * existingItem.quantity
                existingItem.totalPrice = findme
            }
        },
         removeFromCart(state, action) {
            const id = action.payload
            const filterArray = state.itemList.filter((item) => item.id !== id)
            state.itemList = filterArray
        },
       clearShoppingCart(state){
        state.itemList = []
       }
    }



})
export const { addToCart, removeFromCart,incrementQuantityCartItem, substractQuantityCartItem, clearShoppingCart } = cartSlice.actions;
export default cartSlice;
