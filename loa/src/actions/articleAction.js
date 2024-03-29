// actions/articleActions.js
export const addArticle = (article) => ({
    type: 'ADD_ARTICLE',
    payload: article,
});

export const removeArticle = (id) => ({
    type: 'REMOVE_ARTICLE',
    payload: id,
});

export const pinArticle = (id) => ({
    type: 'PIN_ARTICLE',
    payload: id,
});

export const searchArticles = (query) => ({
    type: 'SEARCH_ARTICLES',
    payload: query,
});
