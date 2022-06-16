import React from "react";

const Article = (props) => {
    return (
        <article>
            <a href={"https://reddit.com" + props.article.permalink}>
                <h3>{props.article.title}</h3>
            </a>
        </article>
    );
};

export default Article;