import React, { Component } from 'react';

class NewsCard extends Component {
  render() {
    return (
      <article className='newsCard'>
        <div>
          <img src='imgs/img-news1.jpg' />
          <h5>{this.props.title}</h5>
          <p className='datetime'>29-10-2019 06:30PM</p>
          <p>{this.props.description}</p>
        </div>
      </article>
    );
  }
}

export default NewsCard;
