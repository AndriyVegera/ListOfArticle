// reducers/newsReducer.js
const initialState = [];

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_NEWS':
            return action.payload;
        case 'FETCH_MORE_NEWS':
            return [...state, ...action.payload];
        default:
            return state;
    }
};

export default newsReducer;
