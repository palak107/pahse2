// // components/Product/ProductCard.js
// import styles from './ProdcutCar.module.css';

// export default function ProductCard({ product }) {
//     return (
//       <div className={styles.card}>
//         <div className={styles.imageContainer}>
//           <img 
//             src={product.image} 
//             alt={product.name} 
//             className={styles.image}
//           />
//         </div>
//         <div className={styles.info}>
//           <h3 className={styles.title}>{product.name}</h3>
//           <div className={styles.price}>${product.price.toFixed(2)}</div>
//           <div className={styles.rating}>
//             {Array(5).fill().map((_, i) => (
//               <span key={i}>{i < product.rating ? '★' : '☆'}</span>
//             ))}
//           </div>
//           <div className={styles.actions}>
//             <button>Add to Cart</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// components/Product/ProductCard.js
// components/ProductInfo/ProductCard.js
import React from 'react';
import styles from './ProdcutCar.module.css'; // Fix filename typo!
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../slices/basketSlice';

// Main container component
const ProductCard = ({ children, product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToBasket({
      id: product.id,
      title: product.name,
      image: product.image,
      price: product.price,
      description: product.description,
      rating: product.rating,
      prime: product.prime || false
    }));
  };

  // Clone children and inject product/addToCart handler
  return (
    <div className={styles.card}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            product,
            onAddToCart: handleAddToCart
          });
        }
        return child;
      })}
    </div>
  );
};

// Sub-components
const Image = ({ product }) => (
  <div className={styles.imageContainer}>
    <img src={product.image} alt={product.name} className={styles.image} />
  </div>
);

const Info = ({ children }) => (
  <div className={styles.info}>{children}</div>
);

const Title = ({ product }) => (
  <h3 className={styles.title}>{product.name}</h3>
);

const Price = ({ product }) => (
  <div className={styles.price}>${product.price.toFixed(2)}</div>
);

const Rating = ({ product }) => (
  <div className={styles.rating}>
    {Array(5).fill().map((_, i) => (
      <span key={i}>{i < product.rating ? '★' : '☆'}</span>
    ))}
  </div>
);

const AddToCart = ({ onAddToCart }) => (
  <button className={styles.addToCart} onClick={onAddToCart}>
    Add to Cart
  </button>
);

// Attach sub-components
ProductCard.Image = Image;
ProductCard.Info = Info;
ProductCard.Title = Title;
ProductCard.Price = Price;
ProductCard.Rating = Rating;
ProductCard.AddToCart = AddToCart;

export default ProductCard;