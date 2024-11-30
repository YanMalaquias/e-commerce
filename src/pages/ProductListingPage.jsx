import React from 'react';
import Layout from './Components/Layout.jsx'; 
import Section from './Components/Section.jsx';
import FilterGroup from './Components/FilterGroup.jsx';
import ProductListing from './Components/ProductListing.jsx';

// ... (código dos filtros e produtos) ...
const ProductListingPage = () => {
  const filters = [
    { text: 'Opção 1', value: 'opt1' },
    { text: 'Opção 2', value: 'opt2' },
  ];

  const products = [
    { name: 'Produto 1', image: '/product-thumb-1.png', price: 200, priceDiscount: 149.9 },
    { name: 'Produto 2', image: '/product-thumb-2.png', price: 49.9 },
  ];

  return (
    <Layout>
      <Section title="Listagem de Produtos" titleAlign="left">
        <div className="filters-and-listing"> 
        <FilterGroup 
        title="Filtrar por" 
        inputType="checkbox" 
        options={filters} 
        />
        <ProductListing products={products} />
        </div>
      </Section>
    </Layout>
  );
};

export default ProductListingPage;
