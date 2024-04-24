import React from 'react';

const ArticleList = ({ articles }) => {
    return (
        <div className="article-list">
            {articles.map(article => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                </div>
            ))}
        </div>
    );
}

export default ArticleList;