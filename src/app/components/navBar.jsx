import React from 'react';
import {Link} from 'react-router-dom';
import {Radio} from 'antd';

const NavBar = () => {
  return (
    <div className="navigation">
      <Radio.Group size={'large'}>
        <Radio.Button value="large">
          <Link
            className="nav-link"
            to={'/run'}
          >
          RUN
          </Link>
        </Radio.Button>
        <Radio.Button value="default">
          <Link
            className="nav-link"
            to={'/swim'}
          >
            SWIM
          </Link>
        </Radio.Button>
        <Radio.Button value="small">
          <Link
            className="nav-link"
            to={'/tri'}
          >
            TRI
          </Link>
        </Radio.Button>
      </Radio.Group>
    </div>
  );
};
export default NavBar;
