import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchInitialNews } from '../actions/newsAction'; // Corrected import statement
import NewsList from './NewsList';
import '../styles/NewsPage.css'
import {Link} from "react-router-dom";
function NewsPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInitialNews());
    }, [dispatch]);

    return (
        <div className="news-page">
            <h1>Latest News</h1>
            <NewsList />
            <Link to="/" className="page-link">Go to Article Page</Link>
        </div>
    );
}

export default NewsPage;
