import React, { useState, useEffect } from 'react'
import Layout from './Layout';
import productImg from '../img/my.jpg';
//import { add, remove, del } from '../redux/actions'

import { connect } from 'react-redux';
import CartItem from './CartItem';


const CartPage = ({ id, title, price, description, cart }) => {

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  
  useEffect(() => { 
    let items = 0;
    let price = 0
    cart.forEach((item) => { 
      items += item.qty;
      price += item.qty * item.price
    })

    setTotalItems(items)
    setTotalPrice(price)
  }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice])

  return ( 
    <Layout>
        <div className="cart-container">

          <div>
          {
            cart.map(item => (

              <CartItem 
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                qty = {item.qty}
              />
            
            ))
           
          }
          </div>

          
          
          <div className="cart-checkout">
            <h5>Cart summary</h5>
            <div className='flex'>
              <p className=''>Total: ({totalItems} items)</p>
              <p className='' style={{ bottom:'0', fontWeight:'bold' }}>N {totalPrice}</p>
            </div>

            <button className=' btn-primary btn-middle'>Proceed to checkout</button>
          </div>
        </div>
    </Layout>
  )
}


const mapStateToProps = (state) => {
  return { 
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(CartPage);