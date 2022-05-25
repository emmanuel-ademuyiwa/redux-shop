import React from 'react'
import Layout from './Layout'
import productImg from '../img/my.jpg';

import { connect } from 'react-redux';
import { addToCart } from '../redux/Shopping/shopping-action';

const SingleProduct = ({ currentItem, addToCart }) => {


  return (
    <Layout>
      <div className="single-product">
        <img className='single-product-img' src={productImg}  alt="" />

        <div className='single-product-description'>
          <h5>{currentItem.title}</h5>
          <h6>{currentItem.description}</h6>
          <p>N{currentItem.price}</p>
          <button onClick={() => addToCart(currentItem.id)} className='btn btn-secondary btn-block btn-sm'>Add to cart</button>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => { 
  return {
    currentItem: state.shop.currentItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);