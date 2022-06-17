import styled from "styled-components";


const ListStyled = styled.ul`
    display: inline-flex;
    justify-content: center;
    //align-items: center;
`;

export const PaginationStyle = styled(ListStyled)`
    li {
        list-style: none;
    }

    a {
        padding: 10px;
        margin: 20px -40px 16px ;
        border: 1px solid #2b2eff;
        border-radius: 5px;
        text-decoration: none;
        color: #2b2eff;
        cursor: pointer;
    }

    &:hover a {
        color: white;
        background-color: #2b2eff;
        transition: 0.4s all ease-in;
    }
`;