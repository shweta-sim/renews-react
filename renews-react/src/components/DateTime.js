import React, { useState, useEffect } from 'react';
import moment from '../../node_modules/moment/moment';

const DateTime = () => {
  let nTime = moment().format('LTS');
  const [time, setTime] = useState({ nTime });

  const updateClock = () => {
    setTime(moment().format('LTS'));
  };

  useEffect(() => {
    let interval = setInterval(() => {
      updateClock();
    }, 1000);
  });

  return (
    <section className='w-datetime'>
      <h6 id='date'>{moment().format('MMMM Do YYYY')}</h6>
      <h3 id='time'>
        <p>{time.toString()}</p>
      </h3>
    </section>
  );
};

export default DateTime;
