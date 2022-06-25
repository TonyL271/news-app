import React, { useState, useEffect } from 'react'
import { ArticleCard } from '.'
import Masonry from 'react-masonry-component';
import newsData from '../data/newsData.json'
const masonryOptions = {
  transitionDuration: 0
};
const imagesLoadedOptions = { background: '.article-card' }

const getWidth = () => {
  let width = Math.floor(50 / Math.pow(2, Math.random() * 3))
  return `${Math.max(width, 20)}%`;
}


const ArticleGrid = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);
  const [urls, setUrls] = useState({});
  // Uncomment when in production
  // const url = 'https://newsapi.org/v2/everything?' +
  //   'q=Apple&' +
  //   'from=2022-06-15&' +
  //   'sortBy=popularity&' +
  //   'apiKey=407bfef306444abbba571029556f5c5a';
  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setArticles(result.articles);
  //         setUrls(result.articles.urlToImage);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [])

  useEffect(() => {

    setArticles(newsData.articles);
    setUrls(newsData.articles.urlToImage);


  }, [])

  return (
    <Masonry
      className={'my-gallery-class'} // default ''
      elementType={'ul'} // default 'div'
      options={masonryOptions} // default {}
      disableImagesLoaded={true} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      imagesLoadedOptions={imagesLoadedOptions} // default {}
    >
      {
        // articles.map((article) => <img style={{width:'100%'}} src={article.urlToImage}></img>)
        articles.map((article, idx) => <ArticleCard key={idx} title={article.title} newsSource={article.source.name} desc={article.description} style={{ width: getWidth(), margin: '3rem' }} imgSrc={article.urlToImage}></ArticleCard>)
        // imgWidths.map((imgWidth, idx) => (<ArticleCard key={idx} imgwidth={imgwidth + '%'} imgheight={imgwidth + '%'} imgsrc={imgsrc} title={title} newssource={newssource} desc={desc} />))
      }
    </Masonry >
  )
}

export default ArticleGrid