import React, { Component } from 'react';
import AddCategory from './components/AddCategory';
import MyTopics from './components/MyTopics';
import DateTime from './components/DateTime';
import Weather from './components/Weather';
import Banner from './components/Banner';
import NewsCard from './components/NewsCard';
import Footer from './components/Footer';

// NEWS CONFIG
const search_url = 'https://gnews.io/api/v3/search';
const _api_key = '9479c5195f851b70901766087171c584';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
    this.handleFetch = this.handleFetch.bind(this);
    this.getValueByEnter = this.getValueByEnter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleFetch = searchVal => {
    fetch(`${search_url}?q=${searchVal}&token=${_api_key}`)
      .then(res => res.json())
      .then(data => {
        /*{showCards(data);}*/
        this.setState({
          articles: data.articles
        });
        console.log(data);
      })
      .catch(console.log);
  };

  getValueByEnter = event => {
    if (event.key === 'Enter') {
      const searchVal = document.querySelector('#search').value;
      this.handleFetch(searchVal);
    }
  };

  handleSearch = event => {
    event.preventDefault();
    const searchVal = document.querySelector('#search').value;
    this.handleFetch(searchVal);
  };

  render() {
    return (
      <div>
        <header>
          <section className='search'>
            <input
              type='text'
              id='search'
              name='search'
              placeholder='What are we looking for?'
              onKeyDown={this.getValueByEnter}
            />
            <section className='searchbtn'>
              <a href='#' id='searchButton' onClick={this.handleSearch}>
                <i className='fas fa-search'></i>
              </a>
            </section>

            <AddCategory />
          </section>
        </header>
        <MyTopics />

        <section class='widgets'>
          <aside>
            <DateTime />
            <Weather />
          </aside>
          <Banner />
        </section>

        <section class='newsfeed'>
          {this.state.articles.map((article, id) => {
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
  }
}

export default App;
