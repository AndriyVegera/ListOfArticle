// ArticleForm.js

import React, { useState } from 'react';
import '../styles/ArticleForm.css'; // Import the CSS file

function ArticleForm({ onAddArticle }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddArticle({ title, description, author, image });
        setTitle('');
        setDescription('');
        setAuthor('');
        setImage('');
    };

    return (
        <form className="article-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input-field"
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input-field"
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="input-field"
            />
            <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="input-field"
            />
            <button type="submit" className="submit-button">Add Article</button>
        </form>
    );
}

export default ArticleForm;
