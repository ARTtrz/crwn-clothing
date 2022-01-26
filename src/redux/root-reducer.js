import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';


import cartReducer from './cart/cart.reducer';
import userREducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persisConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	user: userREducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer
})

export default persistReducer(persisConfig, rootReducer)