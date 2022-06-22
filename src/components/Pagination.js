import React from "react";
import { Link } from "react-router-dom";
import { PaginationStyle } from "./styles/PaginationStyles";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul>
            {
                pageNumbers.map((number, index) => (
                    <PaginationStyle key={index} onClick={() => paginate(number)} >
                        <Link to={`?page=${number}`}>{number}</Link>
                    </PaginationStyle>
                ))
            }
        </ul>
    );
};

export default Pagination;