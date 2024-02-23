// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';

import articleReducer from '../reducers/articleReducer';
import newsReducer from '../reducers/newsReducer';
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    articles: articleReducer,
    news: newsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
