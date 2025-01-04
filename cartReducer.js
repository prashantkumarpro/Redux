// Action Types
 const ADD_TO_CART = 'ADD_TO_CART'
 const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
 const INCRESE_QUANTITY = 'INCRESE_QUANTITY'
 const DECRESE_QUANTITY = 'DECRESE_QUANTITY'

// Action creators
export const increaseQuantity = id => {
  return {
    type: INCRESE_QUANTITY,
    payload: { id }
  }
}

export const decreaseQuantity = id => {
  return { type: DECRESE_QUANTITY, payload: { id } }
}

export const removeFromCart = id => {
  return { type: REMOVE_FROM_CART, payload: { id } }
}

export const addToCart = (id, quantity = 1) => {
  return { type: ADD_TO_CART, payload: { id, quantity } }
}

// Reducer
export default function cartReducer (state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]

    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload.id)

    case INCRESE_QUANTITY:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })

    case DECRESE_QUANTITY:
      return state
        .map(item => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 }
          }
          return item
        })
        .filter(item => item.quantity > 0)

    default:
      return state
  }
}
