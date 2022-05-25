import React from 'react';
import { connect } from 'react-redux';
import Product from './Product'

const Products = ({ products }) => {

//  const [product_data] = useState(products)

//  const productArray = products.map((product) => (
//    <Product 
//      key={product.id}
//      title = {product.title}
//      description = {product.description}
//      price = {product.price}
//    />
//  ))

  return (
    <div className="row align-items-start">
      {
        products.map(product => (
          <Product 
            key={product.id}
            id={product.id}
            title = {product.title}
            description = {product.description}
            price = {product.price}
            item = {product}
          />
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => { 
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(Products)