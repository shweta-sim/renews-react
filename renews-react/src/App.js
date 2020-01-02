import React, { Component } from 'react';
import Search from './components/Search';
import MyTopics from './components/MyTopics';
import DateTime from './components/DateTime';
import Weather from './components/Weather';
import Banner from './components/Banner';
import NewsCard from './components/NewsCard';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Search />
        </header>
        <MyTopics />

        <section class='widgets'>
          <aside>
            <DateTime />
            <Weather />
          </aside>
          <Banner />
        </section>
        <NewsCard />
        <Footer />
      </div>
    );
  }
}

export default App;
