import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let { tittle, description, imageUrl, newsUrl, author, source, date } = this.props;
        return (
            <div>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={!imageUrl ? "https://assets.thehansindia.com/h-upload/2022/06/09/1296838-ios.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{tittle}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By{!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
