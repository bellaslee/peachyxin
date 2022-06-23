import React, { useEffect } from 'react';
import Gallery from '../Components/PortfolioGallery';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Gallery />
    </React.Fragment>
  )
};

export default Portfolio;