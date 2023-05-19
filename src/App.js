import React, { useState, useEffect } from "react";
import "./App.css";
import data from './product.json'
import Cart from '../src/component/cart'
import Search from "./component/search";
import Products from "./component/products";

function App() {
  let [productList, setProductList] = useState([]);
  let [checkoutList, setCheckoutList] = useState([]);
  let [itemsInCart, setItemsInCart] = useState([]) 

  useEffect(()=>{
     getProductList()
  },[])

  const getProductList = () =>{
    setProductList(data)
  }

  const searchContactByName = (name) =>{
    if(name){
      let updatedProductList = [...productList]
      updatedProductList= updatedProductList.filter((product)=> product.name.includes(name))
      setProductList(updatedProductList)
    }else{
      getProductList()
    }
  }

  const addToCart = (product) => {
    const updatedCheckoutList = [...checkoutList]
    const updatedItemsInCart = [...itemsInCart]
    updatedCheckoutList.push(product)
    updatedItemsInCart.push(product.id)
    setCheckoutList(updatedCheckoutList)
    setItemsInCart(updatedItemsInCart)
  }

  const removeToCart = (id) =>{
    let updatedCheckoutList = [...checkoutList]
    let updatedItemsInCart = [...itemsInCart]
    updatedCheckoutList = updatedCheckoutList.filter((item)=> item.id !== id)
    updatedItemsInCart = updatedItemsInCart.filter((item) => item !== id)
    setCheckoutList(updatedCheckoutList)
    setItemsInCart(updatedItemsInCart)
  }

  const checkout = () =>{
    console.log('checkout items are:::', checkoutList)
  }

  return (
    <div className="App">
     
      <Cart checkoutList={checkoutList} checkout={checkout} />
      <Search searchContactByName={searchContactByName} />
      <Products 
        productList={productList}
        itemsInCart={itemsInCart}
        addToCart={addToCart}
        removeToCart={removeToCart}
      />
    </div>
  );
}

export default App;
