import React from "react";
import { ArticleStyles } from "./styles/ArticleStyles";
import { Link } from "react-router-dom";

const Article = (props) => {
    return (
        <ArticleStyles>
            <a href={"https://reddit.com" + props.data.permalink}>
                <h3>{props.data.title}</h3>
            </a>
        </ArticleStyles>
    );
};

export default Article;