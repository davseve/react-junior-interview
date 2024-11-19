import './App.css';
import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Heading from "./components/Heading";
function App() {
    const [ products, setProducts] = useState([]);
    const getProductsRequest = async () => {
        const url = `https://fakestoreapi.com/products`,
            response =  await fetch( url ),
            responseJson = await response.json();

        if ( responseJson ) {
            console.log({responseJson})
            setProducts( responseJson );
        }
    }

    useEffect( () => {
        getProductsRequest();
    }, [] );

  return (
      <div className="App">
          <header className="App-header">
              <Heading products={ products }/>
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
