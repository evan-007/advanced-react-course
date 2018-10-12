import PropTypes from 'prop-types';
import Link from 'next/link';

const Home = (props) => (
  <div>
    <p>Home</p>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
  </div>
);

Home.propTypes = {

}

export default Home;
