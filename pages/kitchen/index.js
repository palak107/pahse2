// // pages/index.js
// import React from 'react';
// import ProductCard from '../components/ProductInfo/ProductCard';

// const HomePage = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Premium Kitchen Set",
//       price: 299.99,
//       rating: 4,
//       image: "/kitchen.jpg",
//       description: "High-quality kitchen equipment set"
//     },
//     {
//       id: 2,
//       name: "Chef's Knife",
//       price: 89.99,
//       rating: 5,
//       image: "/knife.jpg",
//       description: "Professional chef's knife"
//     }
//   ];
// console.log(products)
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Android Kitchen Products</h1>
//       <div style={{ 
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
//         gap: '20px'
//       }}>
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
// pages/index.js
// import React, { useState } from 'react';
// import ProductCard from '../components/ProductInfo/ProductCard';

// const HomePage = () => {
//   const [products] = useState([
//     {
//       id: 1,
//       name: "Premium Kitchen Set",
//       price: 299.99,
//       rating: 4,
//       image: "/kitchen.jpg",
//       description: "High-quality kitchen equipment set"
//     },
//     {
//       id: 2,
//       name: "Chef's Knife",
//       price: 89.99,
//       rating: 5,
//       image: "/knief.webp",
//       description: "Professional chef's knife"
//     },


//   {
//     id:3,
//     name:"Spoone set",
//     price:10,
//     rating:3,
//     image:"spoon.",
//     description:"High-quality kitchen equipment set"
//   }
//   ]);

//   return (
//     <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
//       <h1 style={{ marginBottom: '30px', color: '#131921' }}>Android Kitchen Products</h1>
//       <div style={{ 
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
//         gap: '20px',
       
//       }}>
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
// pages/index.js
// pages/index.js
import React from 'react';
import ProductCard from '../components/ProductInfo/ProductCard';

const HomePage = () => {
  const kitchenProducts = [
    {
      id: 1,
      name: "Premium Kitchen Set",
      price: 299.99,
      rating: 4,
      image: "/kitchen.jpg",
      description: "High-quality kitchen equipment set"
    },
    {
      id: 2,
      name: "Chef's Knife",
      price: 89.99,
      rating: 5,
      image: "/knief.webp",
      description: "Professional chef's knife"
    },
    {
      id: 3,
      name: "Spoon Set",
      price: 10,
      rating: 3,
      image: "/spoon.webp",
      description: "High-quality kitchen equipment set"
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Kitchen Products</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
{ kitchenProducts.map(product => (
    <ProductCard key={product.id} product={product}>
      <ProductCard.Image product={product} />
      <ProductCard.Info>
        <ProductCard.Title product={product} />
        <ProductCard.Price product={product} />
        <ProductCard.Rating product={product} />
      </ProductCard.Info>
      <ProductCard.AddToCart />
    </ProductCard>
))}

      </div>
    </div>
  );
};

export default HomePage;