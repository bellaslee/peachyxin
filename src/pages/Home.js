import React from 'react';

const Home = () => {
  return (
    <React.Fragment>
      <section className='section section--row'>
        <div className='section__columns'>
          <div className='section__column section__column--center-items'>
            <h2>commissions</h2>
            <p>order custom art by me</p>
            <button className='button button--pink'>Go to page</button>
          </div>
          <div className='section__column section__column--center-items'>
            <h2>prints</h2>
            <p>external link to Inprnt</p>
            <button className='button button--blue'>Go to page</button>
          </div>
          <div className='section__column section__column--center-items'>
            <h2>ko-fi</h2>
            <p>external link to hi-res downloads of my work, exclusive content, and a place to support me</p>
            <button className='button button--yellow'>Go to page</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
};

export default Home;