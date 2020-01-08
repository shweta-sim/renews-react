import React from 'react';

let defaultTopics = [
  'world',
  'nation',
  'business',
  'technology',
  'entertainment',
  'sports',
  'science',
  'health'
];

const MyTopics = () => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h1>Choose News Topics</h1>
        <section id='addTopicsWrapper'></section>
      </div>
    </div>
  );
};

export default MyTopics;
