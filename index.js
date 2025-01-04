import { combineReducers, legacy_createStore as createStore } from 'redux'
import wishListsReducer, {
  addToWishlists,
  removeFromWislists
} from './wishlistsReducer'
import cartReducer, {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart
} from './cartReducer'
import productsReducer from './productsReducer'

const reducer = combineReducers({
  product: productsReducer,
  wishLists: wishListsReducer,
  cartLists: cartReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
console.log(store.getState())

store.dispatch(addToCart(1, 5))
store.dispatch(addToCart(11))
store.dispatch(addToCart(12))
store.dispatch(addToCart(13))

store.dispatch(addToWishlists(16))
store.dispatch(addToWishlists(15))

store.dispatch(removeFromCart(1))
store.dispatch(removeFromCart(11))

store.dispatch(increaseQuantity(12))
store.dispatch(increaseQuantity(13))

store.dispatch(decreaseQuantity(12))
store.dispatch(decreaseQuantity(13))
store.dispatch(decreaseQuantity(12))

store.dispatch(removeFromWislists(15))
