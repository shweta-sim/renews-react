import React, { Component } from 'react';
const dummyImg = 'http://sofrehaghd.se/demo/renews/images/img-news11.jpg';

class NewsCard extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    window.open(this.props.url, '_blank');
  };

  render() {
    return (
      <article className='newsCard' onClick={this.handleClick}>
        <div>
          <img src={this.props.image ? this.props.image : dummyImg} />
          <h5>{this.props.title}</h5>
          <p className='datetime'>{this.props.published}</p>
          <p>{this.props.description}</p>
        </div>
      </article>
    );
  }
}

export default NewsCard;
