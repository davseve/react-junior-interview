import './App.css';
import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Heading from "./components/Heading";
function App() {
    // Fetch data from `https://fakestoreapi.com/products`
    // and set the state of the products to the fetched data
    // Display "Fetching Products" till the data from the API is fetched
    // Once the data is fetched create a list of products using the ProductList component
    // Pass the fetched data to the ProductList component as props
    // The ProductList component should display the list of products
    // The ProductItem component should display the details of the product


    useEffect( () => {
        getProductsRequest();
    }, [] );

  return (
      <div className="App">
          <header className="App-header">
              <Heading />
          </header>

          <h1>products</h1>
          <div>
              <ProductList
                  products={ products }
              />
          </div>
      </div>
  );
}

export default App;
