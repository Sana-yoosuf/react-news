
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q=microsoft&from=2024-03-13&apiKey=1583f7cca9134acea33080d819e86625")
    .then((response)=>response.json())
    .then((news)=>{
      console.log(news.articles)
    })
  },[])

  

// At first then(watever data we are fetching from api we get that as response
// and we convert them as json data)

// At second then(We are printing that data)

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
