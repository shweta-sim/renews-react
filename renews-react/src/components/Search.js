import React from 'react';
import AddCategory from './AddCategory';

function Search() {
  return (
    <section class='search'>
      <input
        type='text'
        id='search'
        name='search'
        placeholder='What are we looking for?'
        onkeydown='getValueByEnter(this)'
      />
      <section class='searchbtn'>
        <a href='#' id='searchButton'>
          <i class='fas fa-search'></i>
        </a>
      </section>

      <AddCategory />
    </section>
  );
}

export default Search;
