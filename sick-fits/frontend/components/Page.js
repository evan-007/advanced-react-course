import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Meta from './Meta';

class Page extends React.Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
