import React from 'react';
import './App.css';
import './components/components-styles/style.css'
import { Header } from './components/header/Header';
import { Routes, Route } from "react-router-dom";
import { Products } from './components/products/ProductsContainer';
import { ProductViewContainer } from './components/product-view/ProductViewContainer';
import { CategoriesContainer } from './components/categories/categories/CategoriesContainer';
import { SearchContainer } from './components/search/SearchContainer';
import { AddProductContainer } from './components/add-product/AddProductContainer';
import { CategoriesProductsContainer } from './components/categories/categories-products/CategoriesProductsContainer';

function App() {

  return (
    <div className="App">
      <header className=' w-full sticky top-0 py-3 px-3 header bg-[#2a978b]'>
        <Header/>
      </header>
      <section className='p-2'>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path='/products/product/:id' element={<ProductViewContainer />} />
          <Route path='/products/search' element={<SearchContainer />} />
          <Route path="/products/categories" element={<CategoriesContainer />} />
          <Route path="/products/category/:category" element={<CategoriesProductsContainer />} />
          <Route path="/products/add" element={<AddProductContainer />} />
        </Routes>
      </section>
      {/* <Categories /> */}
    </div>
  );
}

export default App;
