function News(props) {
  console.log(props);
  return (
    <div className="news">


      <div className="news-img">
        {
          props.article.urlToImage!==null?
          <img src={props.article.urlToImage} />:
          <img src="https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"/>
        }
        
      </div>



      <h1>{props.article.title}</h1>
      <p>
        {props.article.description?.substring(0, 100).concat("...")}{" "}
        <a href={props.article.url}>Read More</a>
      </p>

      {/* substring is js method used to limit the lenght of a paragraph. 
      In this case we use a null checking operator(?)it is because we 
      load our data from api so in initial stage it may take some time 
      to load the data, So ? ignores if there is no data and shortens 
      the paragraph if there is data */}

      <div className="source">
        <p>Author : {props.article.author}</p>
      </div>
    </div>
  );
}
export default News;
