import React, { Component } from 'react'

export class NewsLayout1 extends Component {
  render() {
    let { title, description, urlToImage, news} = this.props;
    return (
        <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
                <img src={urlToImage} className="card-img-top" alt="..."/>
                <p class="tag" style={{ backgroundColor: "#a71a1a", color: "white", padding: "1px 10px", width: "180px", top: "-26px", position: "relative", font: "14px" }}>{news}</p>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsLayout1
