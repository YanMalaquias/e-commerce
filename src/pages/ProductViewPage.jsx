import React from 'react';
import Layout from './Layout';
import Gallery from './Components/Gallery.jsx';
import BuyBox from './Components/BuyBox.js';
import Section from './Components/Section.js';
import ProductListing from './Components/ProductListing.jsx';

// ... (código do produto, imagens e produtos relacionados) ...
const ProductViewPage = () => {
  const product = {
    name: 'Produto Exemplo',
    reference: 'REF12345',
    stars: 4.5,
    rating: 123,
    price: 200,
    priceDiscount: 149.9,
    description: 'Descrição do produto...',
  };

  const galleryImages = [
    { src: '/product-image-1.png' },
    { src: '/product-image-2.png' },
  ];

  const relatedProducts = [
    { name: 'Produto 1', image: '/product-thumb-1.png', price: 200, priceDiscount: 149.9 },
    { name: 'Produto 2', image: '/product-thumb-2.png', price: 49.9 },
  ];

  return (
    <Layout>
      <div className="product-view">
        <Gallery 
        images={galleryImages} 
        width="700px" 
        height="570px" 
        radius="4px" 
        showThumbs
         />
        <BuyBox {...product} />
      </div>
      <Section title="Produtos Recomendados" titleAlign="left">
      <div className="related-products"> 
          <ProductListing products={relatedProducts} />
        </div>
      </Section>
    </Layout>
  );
};

export default ProductViewPage;
