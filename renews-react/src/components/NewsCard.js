import React from 'react';
const dummyImg = 'http://sofrehaghd.se/demo/renews/images/img-news11.jpg';

const NewsCard = props => {
  const handleClick = () => {
    window.open(props.url, '_blank');
  };
  return (
    <article className='newsCard' onClick={handleClick}>
      <div>
        <img src={props.image ? props.image : dummyImg} />
        <h5>{props.title}</h5>
        <p className='datetime'>{props.published}</p>
        <p>{props.description}</p>
      </div>
    </article>
  );
};

export default NewsCard;
