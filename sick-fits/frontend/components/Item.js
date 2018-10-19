import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

class Item extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  }

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.image && <img src={item.image} alt={image.title} />}
        <Link href={{ pathname: "item", query: { id: item.id } }}>
          <a>
            <Title>{item.title}</Title>
          </a>
        </Link>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <div className="buttonList">
          <Link href={{ pathname: "update", query: { id: item.id } }}>
            <a>Edit</a>
          </Link>
          <button>Add to cart</button>
          <button>Delete</button>
        </div>
      </ItemStyles>
    );
  }
}

export default Item;
