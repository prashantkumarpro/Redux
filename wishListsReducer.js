// Action Types
 const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
 const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'

// Action creators
export const removeFromWislists = id => {
  return { type: REMOVE_FROM_WISHLIST, payload: { id } }
}

export const addToWishlists = id => {
  return { type: ADD_TO_WISHLIST, payload: { id } }
}

// Reducer
export default function wishListsReducer (state = [], action) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload]
    case REMOVE_FROM_WISHLIST:
      return state.filter(item => item.id !== action.payload.id)

    default:
      return state
  }
}
