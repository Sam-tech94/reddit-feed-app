import React from "react";
import { PaginationStyle } from "./styles/PaginationStyle";
import { Link} from "react-router-dom"

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
            <ul>
                {
                    pageNumbers.map(number => (
                        <PaginationStyle onClick={() => paginate(number)} key={number}>
                            <Link to={`?page=${number}&limit=${postsPerPage}`}>
                                {number}
                            </Link>
                        
                        </PaginationStyle>
                    ))
                }
            </ul>
    );
};

export default Pagination;