import Head from 'next/head';
import PropTypes from 'prop-types';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link rel="stylesheet" text="text/css" href="/static/nprogress.css" />
    <title>Sick Fits</title>
  </Head>
);

Meta.propTypes = {

}

export default Meta;
