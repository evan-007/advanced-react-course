import App, { Container } from 'next/app';
import React from 'react';
import PropTypes from 'prop-types';

import Page from '../components/Page';

class MyApp extends App {
  static propTypes = {

  }

  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
