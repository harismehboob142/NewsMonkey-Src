import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'
import Spinner from './Spinner';


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState()

  document.title = `${props.category} - NewsMonkey`;

  const updateNews = async () => {
    props.setProgress(10);
    // let proxyUrl = "https://cors-anywhere.herokuapp.com/"
    let url = `https://newsapi.org/v2/top-headlines?language=en&country=${props.country}&category=${props.category}&apiKey=26c92b41998e4059a32348fb598c07ac&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(40);
    let data = await fetch(url); props.setProgress(50);
    setLoading(true)
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);

  }

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    // let proxyUrl = "https://cors-anywhere.herokuapp.com/"
    let url = `https://newsapi.org/v2/top-headlines?language=en&country=${props.country}&category=${props.category}&apiKey=26c92b41998e4059a32348fb598c07ac&page=${page}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    setLoading(true)
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }

  return (
    <>
      <h1 className='text-center' style={{ margin: '35px 0px', marginTop: '90px' }}>News Monkey - Top {props.category} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url} >  {/* medium devises take 3 columns from 12 columns total available in grid*/}
                <NewsItem title={element.title ? element.title : ""}
                  desc={element.title ? element.description : ""} imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author ? element.author : "Unknown Author"}
                  date={new Date(element.publishedAt).toGMTString()}
                  source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>

  )
}

News.defaultProps = {
  country: 'us',
  pageSize: 5,
  category: 'general'
}
export default News