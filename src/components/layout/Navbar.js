import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
};

// do not need 'static' for functional components
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};
// static constructor
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

// only need export statement once
export default Navbar;
