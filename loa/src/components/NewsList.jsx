import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInitialNews, fetchMoreNews } from '../actions/newsAction';
import '../styles/NewsList.css';

function NewsList() {
    const news = useSelector(state => state.news);
    const [currentPage, setCurrentPage] = useState(1); // Локальний стейт для зберігання номера поточної сторінки
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInitialNews());
    }, [dispatch]);

    const handleFetchMore = () => {
        dispatch(fetchMoreNews(currentPage + 1)); // Передача номера наступної сторінки
        setCurrentPage(currentPage + 1); // Оновлення номера поточної сторінки
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
