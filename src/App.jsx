import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Importando componentes
import Header from './compoments/Header/Header.jsx'; 
import Footer from './compoments/Footer/Footer.jsx'; 
import Caruosel from './compoments/Caruosel/Caruosel.jsx'; 
import NewColections from './compoments/NewColections/NewColections.jsx'; 
import ProductListing from './compoments/ProductListing/ProductListing.jsx'; 
import OfertaESpecial from './compoments/SpecialOffer/SpecialOffer.jsx';

// Importando páginas
import HomePage from './pages/HomePage.jsx'
import ProductListingPage from './pages/ProductListingPage.jsx';
import ProductViewPage from './pages/ProductViewPage.jsx'; 

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ 
          <> 
            <Caruosel />
            <NewColections/>
            <ProductListing tamanho={8} />
            <OfertaESpecial />
          </>
        } />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
      <Footer /> 
    </>
  );
};

export default App;