import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  // set default in case none provided
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
  };
  // static constructor
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon}></i> {this.props.title}
        </h1>
      </nav>
    );
  }
}
// only need export statement once
export default Navbar;
