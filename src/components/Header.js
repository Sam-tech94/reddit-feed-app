import React from "react";
import { HeaderStyles } from "./styles/HeaderStyles";

const Header = ({handleInputChange, subReddit}) => {
    return (
      <HeaderStyles>
        <input className="subreddit-input" type="text"  value={subReddit} onChange={handleInputChange} />
      </HeaderStyles>
    );
};

export default Header;