import React, { useState } from 'react'
import productImg from '../img/my.jpg';

import { useDispatch, connect } from 'react-redux';
import { adjustQty, removeFromCart } from '../redux/Shopping/shopping-action';


const CartItem = ({ id, title, description, price, qty, adjustQty }) => {

    const dispatch = useDispatch()

    const [input, setInput] = useState(qty);

    function onChangeHandler(event){ 
        setInput(event.target.value)
        adjustQty(id, event.target.value)
    }

  return (
    
    <div className="cart-list">
        <div className="col">
            <img src={productImg}  alt="" />
            <div className='product-description'>
                <h6>{title}</h6>
                <p>{description}</p>
                <div className="cart-footer">
                <p>N{price}</p>
                <div className="flex">
                    <p>Qty: </p>
                    <input 
                        min='1' 
                        type="number" 
                        id='qty' 
                        name='qty' 
                        value={input}
                        onChange={onChangeHandler}
                    />
                </div>
                <p  onClick={() => dispatch(removeFromCart(id ))}>del</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (id, value) => dispatch(adjustQty(id, value))
    }
}

export default connect(null, mapDispatchToProps)(CartItem) 