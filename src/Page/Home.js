import React from 'react';

function Home() {
  
  return (
    <div className='home'>
      <div className='homeContainer'>
        <div className='homeText item1'>
          <h4>Hello 👋, welcome to</h4>
          <h1>Fixer Converter</h1>
          <h2>A currecncy converter</h2>
          <p className=''>The primary functionality is to be able to take on a currency value from a user and output
          equivalent currency in relation to the user's choice currency.</p>
          <a href='/calculator' className='cal-btn'>
          Calculator  
          </a>
        </div>
        <div className='homeImg item2'>
          <img src='image/currencies.png' alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Home;
