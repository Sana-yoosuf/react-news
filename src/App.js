import { useEffect, useState } from "react";
import "./App.css";
import News from "./News";

function App() {
  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("india");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${category}&from=2024-03-13&apiKey=1583f7cca9134acea33080d819e86625`
    )
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        console.log(news.articles);
      });
  }, [category]);

  // At first then(watever data we are fetching from api we get that as response
  // and we convert them as json data)

  // At second then(We are printing that data)

  return (
    <div className="App">
      <header className="header">
        <h1>Now Times</h1>


        <input
          type="text"
          onChange={(event) => {
            if (event.target.value != "") {
              setCategory(event.target.value);
            }
            else{
              setCategory("india")
            }
          }}
          placeholder=" Search News"
        />
        {/* In this input field if there is no data it shows error,it is
         because useeffect is calling category so,it input field is not
          empty set that typing value and if the field is empty we set
          back out category to india */}

      </header>
      <section className="news-articles">


        {
          articles.length!==0?
        
        
        articles.map((article) => {
          return <News article={article} />;
        }):
        <h3>No News Found For Search</h3>}
      </section>
    </div>
  );
}

export default App;
