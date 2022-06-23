import '../assets/css/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    page: "home",
    route: "/"
  },
  {
    page: "commissions",
    route: "../commissions"
  },
  {
    page: "portfolio",
    route: "../portfolio"
  },
  {
    page: "about",
    route: "../about"
  },
  {
    page: "ko-fi",
    url: "http://ko-fi.com/peachyxin"
  },
  {
    page: "inprnt",
    url: "https://www.inprnt.com/profile/peachyxin/"
  }
];

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    if (isNavExpanded) document.body.classList.add('stop-scrolling');
    else document.body.classList.remove('stop-scrolling');
  }, [isNavExpanded])

  const renderLinks = links.map((link) => {
    const content = link.url ? <a href={link.url} target="_blank" rel="noreferrer">{link.page}</a> : <Link to={link.route}>{link.page}</Link>;

    return (
      <li
        key={link.page}
        className={`nav__menu__item`}
        onMouseOver={(e) => {
          setRandomColor(e.currentTarget);
        }}
        onClick={() => setIsNavExpanded(false)}
      >
        {content}
      </li>
    )
  });

  const colors = ['#fc7b72', '#fcd372', '#66b2de'];

  const setRandomColor = (element) => {
    let color = Math.floor(Math.random() * 3);
    document.body.style.setProperty('--random-color', colors[color]);
  };

  return (
    <nav className="nav">
      <h1 onMouseOver={(e) => {
        setRandomColor(e.currentTarget);
      }}>
        <Link to="/">peachyxin</Link>
      </h1>
      <button
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
        className="nav__hamburger">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
      <ul className={`nav__menu ${isNavExpanded ? '' : 'nav__menu--hidden'}`}>
        {renderLinks}
      </ul>
    </nav>
  );
};

export default Nav;