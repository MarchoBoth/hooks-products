import React, { useState } from 'react';
import ProductList from './ProductList';
import Categories from './Categories';
import items from './data';
import Prices from './Prices';

//Get exist categories
const existCategories = items.map((item) => item.category);
//create set of unique category
const myset = new Set(existCategories);
//create array categories contains 'all' and exist categories
const allCategories = ['all', ...myset];
// Add Price List
const listPrices = [20000, 50000, 100000, 200000, 'all'];
function App() {
  //create state for product items
  const [productItems, setProductItems] = useState(items);
  //create state for array categories
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    //WRITE YOUR CODE
    if (category === 'all') {
      setProductItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setProductItems(newItems);
    }
  };
  //add Price filter function
  const filterByPrice = (price) => {
    if (price === 'all') {
      setProductItems(items);
    } else {
      const newItems = items.filter((item) => item.price <= price);
      setProductItems(newItems);
    }
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Products</h2>
          <div className="underline"></div>
        </div>
        {/* fill with state name*/}
        <Categories categories={categories} filterItems={filterItems} />
        {/* Pass listPrices and filterByPrice as props */}
        <Prices listPrices={listPrices} filterByPrice={filterByPrice} />
      </section>
      {/* fill with state name*/}
      <ProductList items={productItems} />
    </main>
  );
}

export default App;
