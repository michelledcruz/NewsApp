import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, author, source} = this.props;
    return (
      <div>
        <div className="card">
            <img src={urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
            <span class="badge bg-danger">{source}</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {/* {author
              ? <p class="card-text">By {author}  </p>
              : ""
            }  */}
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
