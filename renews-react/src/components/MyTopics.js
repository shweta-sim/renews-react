import React, { useState, useEffect } from 'react';

const MyTopics = () => {
  const [userTopics, setUserTopics] = useState([
    'world',
    'nation',
    'business',
    'technology',
    'entertainment',
    'sports',
    'science',
    'health'
  ]);

  let buttonArray = [];

  const generateButton = () => {
    buttonArray = userTopics.map(topicName => {
      return <button>{topicName}</button>;
    });
    return buttonArray;
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h1>Choose News Topics</h1>
        <section id='addTopicsWrapper'>{generateButton()}</section>
      </div>
    </div>
  );
};

export default MyTopics;
