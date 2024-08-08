import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const handleItemClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} onClick={handleItemClick}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">
          Rs {props.new_price}
        </div>
        <div className="item-price-old">
          Rs {props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
