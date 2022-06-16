import React, {useState, useEffect} from "react";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import Article from "./components/Article";


function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [articles, setArticles] = useState([]);
  const [subReddit, setSubReddit] = useState('webdev');
  console.log(articles)

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/${subReddit}.json`)
    .then(data => {
      setLoading(false)
      setArticles(data.data.data.children)
      setError("")
    })
    .catch(err => {
      setLoading(false)
      setArticles([])
      setError("Something went wrong!")
    })
  }, [subReddit]);

  return (
    <div className="App">
      <header>
        <input className="subreddit-input" type="text"  value={subReddit} onChange={e => setSubReddit(e.target.value)} />
      </header>
      
      <div className="articles">
        {
          loading ? <BeatLoader />
          : articles.map((article, index) => <Article key={index} article={article.data} />)
        }
        {error ? error : null}
      </div>
    
    </div>
  );
}

export default App;
