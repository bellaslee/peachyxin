import React from 'react';
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
      >
        {content}
      </li>
    )
  });
  console.log(renderLinks);
  return (
    <ul className="nav">
      {renderLinks}
    </ul>
  );
};

export default Nav;