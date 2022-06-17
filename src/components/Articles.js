import React from "react";
import { BeatLoader } from "react-spinners";
import { css } from "styled-components";
import Article from "./Article";

const loaderCss = css`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
`;

const Articles = ({loading, articles, error}) => {
    return (
     <div>
            {
                loading ? <BeatLoader css={loaderCss} color="#fe4880" size={30} />
                : articles.map((article, index) => <Article key={index} article={article.data} />)
            }
            {error ? error : null}
      </div>
    );
};

export default Articles;