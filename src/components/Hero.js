import React from 'react'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="container">
          <input type="email" className="form-control" placeholder="Search here" />
          <button className='btn btn-primary'>Search</button>
        </div>
    </section>
  )
}

export default Hero