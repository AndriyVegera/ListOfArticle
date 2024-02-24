// actions/newsActions.js
export const fetchInitialNews = () => async (dispatch) => {
    try {
        const pageSize = 10; // Set the number of results per page
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&apiKey=1e8fa790b4624fe19576350d3e7f1ced`);
        if (!response.ok) {
            throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_NEWS', payload: data.articles });
    } catch (error) {
        console.error('Error fetching news:', error.message);
        // Optionally dispatch an action to store the error in the Redux state or display an error message to the user
    }
};

// actions/newsActions.js
export const fetchMoreNews = (page) => async (dispatch, getState) => {
    try {
        const { news } = getState();
        const pageSize = 10; // Кількість результатів на сторінці
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${pageSize}&apiKey=1e8fa790b4624fe19576350d3e7f1ced`);
        if (!response.ok) {
            throw new Error('Не вдалося отримати додаткові новини');
        }
        const data = await response.json();
        // Фільтруємо нові статті, щоб уникнути дублікатів
        const newArticles = data.articles.filter(article => !news.find(existingArticle => existingArticle.title === article.title));
        dispatch({ type: 'FETCH_MORE_NEWS', payload: newArticles });
    } catch (error) {
        console.error('Помилка отримання додаткових новин:', error.message);
    }
};
