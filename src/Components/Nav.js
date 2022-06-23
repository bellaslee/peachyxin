import React, { useRef } from 'react';
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
  const renderLinks = links.map((link) => {
    const content = link.url ? <a href={link.url} target="_blank" rel="noreferrer">{link.page}</a> : <Link to={link.route}>{link.page}</Link>;

    return (
      <li
        key={link.page}
        className={`nav__item`}
        onMouseOver={(e) => {
          setRandomColor(e.currentTarget);
        }}
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
    <header>
      <h1 onMouseOver={(e) => {
        setRandomColor(e.currentTarget);
      }}>
        <Link to="/">peachyxin</Link>
      </h1>
      <ul className="nav">
        {renderLinks}
      </ul>
    </header>
  );
};

export default Nav;