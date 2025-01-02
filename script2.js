import { legacy_createStore as createStore } from 'redux'
import { products } from './productLists'

const initialState = {
  productLists: products,
  cartLists: [],
  wishLists: []
}

const ADD_TO_CART = 'ADD_TO_CART'
const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const INCRESE_QUANTITY = 'INCRESE_QUANTITY'
const DECRESE_QUANTITY = 'DECRESE_QUANTITY'

function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartLists: [...state.cartLists, action.payload] }

    case ADD_TO_WISHLIST:
      return { ...state, wishLists: [...state.wishLists, action.payload] }
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishLists: state.wishLists.filter(item => item.id !== action.payload.id)
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartLists: state.cartLists.filter(item => item.id !== action.payload.id)
      }
    case INCRESE_QUANTITY:
      return {
        ...state,
        cartLists: state.cartLists.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
      }
    case DECRESE_QUANTITY:
      return {
        ...state,
        cartLists: state.cartLists
          .map(item => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity - 1 }
            }
            return item
          })
          .filter(item => item.quantity > 0),
      }
    default:
      return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({ type: ADD_TO_CART, payload: { id: 1, quantity: 1} })
store.dispatch({ type: ADD_TO_CART, payload: { id: 11, quantity: 1 } })
store.dispatch({ type: ADD_TO_WISHLIST, payload: { id: 16 } })
store.dispatch({ type: ADD_TO_WISHLIST, payload: { id: 15 } })
store.dispatch({ type: REMOVE_FROM_CART, payload: { id: 15 } })
store.dispatch({ type: INCRESE_QUANTITY, payload: { id: 11 } })
store.dispatch({ type: DECRESE_QUANTITY, payload: { id: 1} })
store.dispatch({ type: REMOVE_FROM_WISHLIST, payload: { id: 15 } })

console.log(store.getState())
