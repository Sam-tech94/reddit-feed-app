import React, {useState, useEffect} from "react";
import axios from "axios";
import {GlobalStyle} from "./components/styles/GlobalStyle"
import Header from "./components/Header";
import Articles from "./components/Articles";
import Pagination from "./components/Pagination";

function App() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [articles, setArticles] = useState([]);
    const [subReddit, setSubReddit] = useState('webdev');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    
    console.log(articles)

    useEffect(() => {
      axios.get(`https://www.reddit.com/r/${subReddit}.json`)
      .then(data => {
        setArticles(data.data.data.children)
        setError("")
      })
      .catch(err => {
        setArticles([])
        setError(err.message)
      })
      .finally(() => setLoading(false))
    }, [subReddit]);

      const handleInputChange = (e) => setSubReddit(e.target.value);

      // Get current page
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

      // Get page
      const paginate = pageNumber => setCurrentPage(pageNumber);



  return (
    <div className="App">
      <GlobalStyle />
      <Header handleInputChange={handleInputChange} subReddit={subReddit} />
      <Articles loading={loading} articles={currentPosts} error={error} />
      <Pagination postsPerPage={postsPerPage} totalPosts={articles.length} paginate={paginate}  />
    </div>
  );
}

export default App;
