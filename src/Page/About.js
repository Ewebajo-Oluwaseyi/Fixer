import React from 'react';

function About() {
  
  return (
    <div className='about'>
      <h2>About</h2>
      <hr/>
      <p>
      the Fixer currency App is capable of delivering real-time exchange rate data for 170 world currencies. 
      the core functionalities include getting the latest exchange rate data for all or a specific set of currencies, converting 
      amounts from one currency to another.  you can change the currency to which your output currency rates are relative
      to by appending the base parameter. 
      </p>
      <h3>Version: Fixer 1.0</h3>
      <h3>Made by Sheifunmi 
            <a target="_blank" rel="noreferrer" href='https://twitter.com/sheifunmi_'><i className='fab fa-twitter'/></a>
        </h3>
    </div>
  );
}

export default About;
