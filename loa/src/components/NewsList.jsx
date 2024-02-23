// NewsList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInitialNews, fetchMoreNews } from '../actions/newsAction';
import '../styles/NewsList.css';

function NewsList() {
    const news = useSelector(state => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInitialNews());
    }, [dispatch]);

    const handleFetchMore = () => {
        dispatch(fetchMoreNews());
    };

    return (
        <div className="news-container">
            <ul className="news-list">
                {news.map((article, index) => (
                    <li key={index} className="news-card">
                        <img src={article.urlToImage} alt={article.title}/>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <p>Author: {article.author}</p>
                    </li>
                ))}
            </ul>
            <button onClick={handleFetchMore} className="fetch-more-button">Fetch More Articles</button>
        </div>
    );
}

export default NewsList;
