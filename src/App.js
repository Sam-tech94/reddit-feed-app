import React from "react";
import Articles from "./components/Articles";
import { GlobalStyle } from "./components/styles/GlobalStyles";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
       <Articles />
    </div>
  );
}

export default App;
