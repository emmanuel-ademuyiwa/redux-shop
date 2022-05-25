import React from 'react'
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <section className='nav'>
      <Link style={{ textDecoration: 'none' }} to='/'><h1>Redux Cart</h1></Link>
      <Link style={{ textDecoration: 'none' }} to='/cart'><Cart /></Link>
    </section>
  )
}

export default Header
