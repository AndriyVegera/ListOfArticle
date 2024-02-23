const initialState = [];

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return [...state, { ...action.payload, id: Date.now() }];
        case 'REMOVE_ARTICLE':
            return state.filter(article => article.id !== action.payload);
        case 'PIN_ARTICLE':
            const pinnedIndex = state.findIndex(article => article.id === action.payload);
            const pinnedArticle = state[pinnedIndex];
            const updatedArticles = state.filter(article => article.id !== action.payload);
            updatedArticles.unshift(pinnedArticle);
            return updatedArticles;
        case 'SEARCH_ARTICLES':
            const query = action.payload.toLowerCase();
            const searchResults = state.filter(article =>
                article.title.toLowerCase().includes(query) ||
                article.description.toLowerCase().includes(query)
            );
            return searchResults;

        default:
            return state;
    }
};

export default articleReducer;
