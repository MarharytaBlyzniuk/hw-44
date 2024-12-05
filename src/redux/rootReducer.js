import { combineReducers } from 'redux';
import itemsReducer from './reducers';

const rootReducer = combineReducers({
    items: itemsReducer,
});

export default rootReducer;