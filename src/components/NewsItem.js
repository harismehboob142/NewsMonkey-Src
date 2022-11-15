import React, { Component } from 'react'


const NewsItem = (props) => {

  let { title, desc, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}</span>

        <img src={imageUrl ? imageUrl : "https://i.eurosport.com/2022/06/12/3391621-69312688-2560-1440.jpg"} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{desc}...</p>
          <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn btn-sm">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem