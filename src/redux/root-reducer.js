import { combineReducers } from 'redux';

import userREducer from './user/user.reducer';

export default combineReducers({
	user: userREducer
})