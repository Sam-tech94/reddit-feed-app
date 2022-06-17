import styled from "styled-components";

export const ArticleStyles = styled.article`
    padding: 30px 15px;
    background-origin: #fff;
    color: #212121;

    a {
        text-decoration: none;
    }

    h3 {
        color: #212121;
    }

    &:nth-child(2n) {
        background-color: #f3f3f3;
    }

    &:hover {
        background-image: linear-gradient(to left, #fe4880, #ffce00);
    }

    &:hover h3 {
        color: #fff;
    }
`;

