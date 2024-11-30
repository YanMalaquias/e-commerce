import React from 'react';
import Layout from './Components/Layout.jsx'; 
import Gallery from './Components/Gallery.jsx';
import Section from './Components/Section.jsx'; 
import ProductListing from './Components/ProductListing.jsx'; 

// ... (código das imagens, coleções e produtos) ...
const HomePage = () => {
  const galleryImages = [
    { src: '/home-slide-1.jpeg' },
    { src: '/home-slide-2.jpeg' },
  ];

  const featuredCollections = [
    { src: '/collection-1.png' },
    { src: '/collection-2.png' },
    { src: '/collection-3.png' },
  ];

  const topProducts = [
    { name: 'Produto 1', image: '/product-thumb-1.png', price: 200, priceDiscount: 149.9 },
    { name: 'Produto 2', image: '/product-thumb-2.png', price: 49.9 },
  ];

  return (
    <Layout>
      <Gallery 
      images={galleryImages} 
      width="1440px" 
      height="681px" 
      />

      <Section title="Coleções em Destaque" titleAlign="center">
        <div className="featured-collections">
          {featuredCollections.map((collection, index) => (
            <img 
            key={index} 
            src={collection.src} 
            alt={`Collection ${index + 1}`} 
            />
          ))}
        </div>
      </Section>

      <Section 
      title="Produtos em Alta" 
      titleAlign="left">
        <ProductListing products={topProducts} />
        
      </Section>
    </Layout>
  );
};

export default HomePage;
