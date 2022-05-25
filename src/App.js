import HomePage from "./components/HomePage";
import SingleProduct from "./components/SingleProduct";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CartPage from "./components/CartPage";
import { connect } from "react-redux";
// import { useEffect, useState } from "react";

function App({ currentItem }) {

  
  /* const [products, fetchProducts] = useState([])

  const getData = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchProducts(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  */

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route 
          path="/"
            element={
              <HomePage />
          }
        />

        <Route 
          path="/single-product/:id"
            element={ !currentItem ? <Navigate to="/" /> :
              <SingleProduct />
          }
        />

        <Route 
          path="/cart"
            element={
              <CartPage />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
 
const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem
  }
}

export default connect(mapStateToProps)(App);
