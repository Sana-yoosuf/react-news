
import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {
  // let [articles,setArticles]=useState([]);



  // useEffect(()=>{
  //   fetch("https://newsapi.org/v2/everything?q=india&from=2024-03-13&apiKey=1583f7cca9134acea33080d819e86625")
  //   .then((response)=>response.json())
  //   .then((news)=>{
  //     setArticles(news.articles)
  //   })
  // },[])

  

// At first then(watever data we are fetching from api we get that as response
// and we convert them as json data)

// At second then(We are printing that data)

  return (
    <div className="App">
      <header className='header'>
        <h1>Now Times</h1>
        <input type='text' placeholder=' Search News'/>
      </header>
      <section className='news-articles'>

      
      <News/>
      <News/>
      <News/>
      <News/>
      <News/>
      </section>
    </div>
  );
}

export default App;
