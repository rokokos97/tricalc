import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Link
        className="nav-link"
        to={'/run'}
      >
        run
      </Link>
      <Link
        className="nav-link"
        to={'/swim'}
      >
        swim
      </Link>
      <Link
        className="nav-link"
        to={'/tri'}
      >
        tri
      </Link>
    </>
  );
};
export default NavBar;
