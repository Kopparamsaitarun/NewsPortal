import React, { Component } from 'react'

export default class NewsItem extends Component {
   
  render() {
    let {title,description,imageUrl ,newsUrl}= this.props
    return (
      <div className='my-3'>
    <div className="card" style={{width: "18rem"}}  >
        <img className="card-img-top" src={!imageUrl?"https://s3.cointelegraph.com/uploads/2023-02/c4187f18-db6a-4fc6-b52c-fae982338365.jpg":imageUrl}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl}  className="btn btn-sm btn btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

