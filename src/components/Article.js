import React from "react";
import { ArticleStyles } from "./styles/ArticleStyles";

const Article = (props) => {
    return (
        <ArticleStyles>
            <a href={"https://reddit.com" + props.article.permalink}>
                <h3>{props.article.title}</h3>
            </a>
        </ArticleStyles>
    );
};

export default Article;