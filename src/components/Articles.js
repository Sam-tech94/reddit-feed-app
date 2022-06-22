import axios from "axios";
import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { css } from "styled-components";
import Article from "./Article";
import Pagination from "./Pagination";
import { HeaderStyles } from "./styles/HeaderStyles";
import { ErrorStyles } from "./styles/ErrorStyles";


const loaderCss = css`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
`;

const Articles = () => {
    const [data, setData] = useState({ articles: [], error: "", loading: true });
    const [subReddit, setSubReddit] = useState("webdev");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    useEffect(() => {
        const id = setTimeout(() => {
            axios.get(`https://www.reddit.com/r/${subReddit}.json`)
                .then(res => {
                    setData({ articles: res.data.data.children, error: "", loading: false })
                })
                .catch(error => {
                    setData({ articles: [], error: error.message, loading: false })
                })
        }, 2000)

        return () => {
            clearTimeout(id);

        };
    }, [subReddit])

    console.log(data.articles)

    // Get current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.articles.slice(indexOfFirstPost, indexOfLastPost);

    // Get page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <HeaderStyles>
                <input type="text" value={subReddit} onChange={(e) => setSubReddit(e.target.value)} />
            </HeaderStyles>
            <article>
                {data.loading ? <BeatLoader css={loaderCss} color="#fe4880" size={30} /> : currentPosts.map((article, index) => <Article key={index} data={article.data} />)}
            </article>

            {data.error ? <ErrorStyles>{data.error}</ErrorStyles> : null}

            <Pagination postsPerPage={postsPerPage} totalPosts={data.articles.length} paginate={paginate} />
        </div>
    );
};

export default Articles;