import styled from "styled-components";

export const HeaderStyles = styled.header`
    background-color: #ffce00;
    background-image: linear-gradient(to right, #fe4880, #ffce00);
    box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
    padding: 15px;

    input {
        display: inline-block;
        color: #f3f3f3;
        font-size: 32px;
        font-weight: 600;
        font-style: italic;
        text-transform: uppercase;
        background: none;
        border: none;
        outline: none;
        appearance: none;
    }

    &::before {
        content: "/r/";
        display: inline-block;
        color: #f3f3f3;
        font-size: 32px;
        font-weight: 600;
        font-style: italic;
        text-transform: uppercase;
        text-align: center;
    }
`;