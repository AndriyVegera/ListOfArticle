import React from 'react';
import '../styles/ArticleList.css';

function ArticleList({ articles = [], searchResults = [], onRemoveArticle, onPinArticle, onSearch }) {
    const handleRemove = (id) => {
        onRemoveArticle(id);
    };

    const handlePin = (id) => {
        onPinArticle(id);
    };

    const handleSearch = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div>
            <div className="article-container">
                <input
                    type="text"
                    placeholder="Search"
                    onChange={handleSearch}
                    className="search-input"
                />
            </div>
            <ul className="article-list">
                {articles.map(article => (
                    <li key={article.id} className="article-card">
                        <img src={article.image} alt={article.title} />
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <p>Author: {article.author}</p>
                        <button onClick={() => handleRemove(article.id)}>Remove</button>
                        <button onClick={() => handlePin(article.id)}>Pin</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArticleList;
