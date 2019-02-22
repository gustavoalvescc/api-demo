import {CartReducer} from './CartReducer';
import {PaginationReducer} from './PaginationReducer';
import {combineReducers} from 'redux';

export const Reducers = combineReducers({CartReducer, PaginationReducer});