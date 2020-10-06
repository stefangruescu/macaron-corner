import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { cartReducer } from './cart/cartReducer';
import { userReducer } from './user/userReducer';
import { favoritesReducer } from './favorites/favoritesReducer';

const rootReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
	favoriteCart: favoritesReducer
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
