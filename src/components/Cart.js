import React, { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa';

// import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

const Cart = ({ cart }) => {

  const [cartCount, setCartCount] = useState(0);
  
  useEffect(() => { 
    let count = 0;
    cart.forEach((item) => { 
      count += item.qty
    })

    setCartCount(count)
  }, [cart, cartCount])

  return (
    <div className='cart'>
        <h5>Cart</h5>
        <FaShoppingCart className='cart__icon' />
        <h6 className='counter'>{cartCount}</h6>
    </div>
  )
}

const mapStateToProps = (state) => { 
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Cart);