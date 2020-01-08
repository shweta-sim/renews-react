import React, { useState, useEffect } from 'react';

// BANNER CONFIG
const banner_url =
  'https://api.unsplash.com/photos/random?orientation=landscape&client_id=';
const banner_api_key =
  'fbad019b2bc99126150dbdab0a1abfc55c48f2162ee9e5d6fd991778600ca6ef';

const Banner = () => {
  const [banner, setBanner] = useState();

  useEffect(() => {
    fetch(`${banner_url}${banner_api_key}`)
      .then(res => res.json())
      .then(data => {
        setBanner(data.urls.full);
      })
      .catch(console.log);
  }, []);

  return (
    <section
      className='w-banner'
      style={{
        backgroundImage: `url('${banner}')`
      }}></section>
  );
};

export default Banner;
