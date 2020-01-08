import React, { useState, useEffect } from 'react';
import AddCategory from './components/AddCategory';
import DateTime from './components/DateTime';
import Weather from './components/Weather';
import Banner from './components/Banner';
import NewsCard from './components/NewsCard';
import Footer from './components/Footer';
import MyTopics from './components/MyTopics';

// NEWS CONFIG
const search_url = 'https://gnews.io/api/v3/search';
const top_news_url = 'https://gnews.io/api/v3/top-news';
const _api_key = '608c2ec46030a003e81b7c14ebc58777';

const App = () => {
  const [articles, setArticles] = useState([]);

  const handleFetch = searchVal => {
    fetch(`${search_url}?q=${searchVal}&token=${_api_key}`)
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles);
        console.log(data.articles);
      })
      .catch(console.log);
  };

  const getValueByEnter = event => {
    if (event.key === 'Enter') {
      const searchVal = document.querySelector('#search').value;
      handleFetch(searchVal);
    }
  };

  const handleSearch = event => {
    event.preventDefault();
    const searchVal = document.querySelector('#search').value;
    handleFetch(searchVal);
  };

  useEffect(() => {
    // Request for random top news items
    fetch(`${top_news_url}?token=${_api_key}`)
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles);
      })
      .catch(console.log);
  }, []);

  const showModal = () => {
    document.getElementById('catgModal').style.display = 'block';
  };

  return (
    <div>
      <header>
        <section className='search'>
          <input
            type='text'
            id='search'
            name='search'
            placeholder='Search news...'
            onKeyDown={getValueByEnter}
          />
          <section className='searchbtn'>
            <a href='#' id='searchButton' onClick={handleSearch}>
              <i className='fas fa-search'></i>
            </a>
          </section>
          <AddCategory display={showModal} />
          {/* MODAL STARTS */}
          <div id='catgModal' style={{ display: 'none' }}>
            <MyTopics />
          </div>
          {/* MODAL ENDS */}
        </section>
      </header>

      <section className='widgets'>
        <aside>
          <DateTime />
          <Weather />
        </aside>
        <Banner />
      </section>

      <section className='newsfeed'>
        {articles.map((article, id) => {
          return (
            <NewsCard
              key={id}
              title={article.title}
              description={article.description}
              published={article.publishedAt}
              image={article.image}
              url={article.url}
            />
          );
        })}
      </section>

      <Footer />
    </div>
  );
};

export default App;
