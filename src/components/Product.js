import React from 'react';
import productImg from '../img/my.jpg';
import { connect, useDispatch } from 'react-redux';
// import { add } from '../redux/actions'
import { Link } from 'react-router-dom';

import { addToCart, loadCurrentItem } from '../redux/Shopping/shopping-action';
// import { connect } from 'react-redux';

const Product = ({ id, title, price, description, item, loadCurrentItem }) => {
    const dispatch = useDispatch()

  return (
    <div className="col col_">
      <img src={productImg}  alt="" />

      <div className='product-description'>
        <h6>{item.title}</h6>
        <p>{item.description}</p>
        <p>N{item.price}</p>
      </div>

      <div className='col__btn'>
          <Link style={{ textDecoration: 'none' }} to={`/single-product/${item.id}`}><button onClick={() => loadCurrentItem(item)} type='button' className='btn btn-light btn-sm'>View product</button></Link>
          <button  onClick={() => dispatch(addToCart(id))} className='btn btn-secondary btn-block btn-sm'>Add to cart</button>
      </div>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => { 
  return {
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
  }
}

export default connect(null, mapDispatchToProps)(Product);