import React from 'react';

const AddCategory = props => {
  const handleClick = () => {
    props.display();
  };

  return (
    <div>
      <section className='addtopic trigger'>
        <a href='#' onClick={handleClick}>
          <i className='fas fa-plus'></i>
        </a>
      </section>
    </div>
  );
};

export default AddCategory;
