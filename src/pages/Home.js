import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <section className='section section--row section--first'>
        <div className='section__columns'>
          <div className='section__column section__column--center-items'>
            <h2>commissions</h2>
            <p>order custom art by me</p>
            <Link to="/commissions"> <button className='button button--pink'>Go to page</button></Link>
          </div>
          <div className='section__column section__column--center-items'>
            <h2>prints</h2>
            <p>external link to Inprnt</p>
            <a href="https://www.inprnt.com/profile/peachyxin/" target="_blank" rel="noreferrer"><button className='button button--blue'>Go to page</button></a>
          </div>
          <div className='section__column section__column--center-items'>
            <h2>ko-fi</h2>
            <p>external link to hi-res downloads of my work, exclusive content, and a place to support me</p>
            <a href="http://ko-fi.com/peachyxin" target="_blank" rel="noreferrer"><button className='button button--yellow'>Go to page</button></a>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
};

export default Home;