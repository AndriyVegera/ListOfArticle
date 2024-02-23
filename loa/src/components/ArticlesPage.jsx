import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addArticle, removeArticle, pinArticle, searchArticles } from '../actions/articleAction';
import ArticleList from './ArticleList';
import ArticleForm from './ArticleForm';
import '../styles/ArticlePage.css';
import {Link} from "react-router-dom"; // Ensure this line is present to import CSS

function ArticlesPage() {
    const articles = useSelector(state => state.articles);
    const dispatch = useDispatch();

    const handleAddArticle = (article) => {
        dispatch(addArticle(article));
    };

    const handleRemoveArticle = (id) => {
        dispatch(removeArticle(id));
    };

    const handlePinArticle = (id) => {
        dispatch(pinArticle(id));
    };

    const handleSearch = (query) => {
        dispatch(searchArticles(query));
    };

    return (
        <div className="articles-container"> {/* Ensure correct class name */}
            <Link to="/news" className="page-link">Go to News Page</Link>
            <h1 className="article-header">My Articles</h1>
            <ArticleForm onAddArticle={handleAddArticle}/>
            <ArticleList
                articles={articles}
                onRemoveArticle={handleRemoveArticle}
                onPinArticle={handlePinArticle}
                onSearch={handleSearch}
            />
        </div>
    );
}

export default ArticlesPage;
