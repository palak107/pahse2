import React from 'react';
import styles from '../../styles/product.module.css';
import { addToBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';
import Rating from './Myproduct/ratng'
const Product = ({ id,title, image, price, rating, description, prime ,isNewRelease}) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      image,
      price,
      description,
      rating,
      prime,
      isNewRelease
    };
    dispatch(addToBasket(product));
  };

  return (
    <div className={styles.product}>
      <div className={styles.product_info}>
        <p className={styles.product_title}>{title}</p>
        <p className={styles.product_price}>
          <small>$</small>
          <strong>{price}</strong>
         
        </p>
        <p>{description}</p>
      </div>

      <div className={styles.product_rating}>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <span key={i}>⭐</span>
          ))}
       
      </div>

      <img src={image} alt={title} />

      {/* Conditionally Render Prime Logo */}
      {prime && (
        <div className={styles.product_prime}>
          <img src="/prime.png" alt="Prime Delivery" />
          <span>Prime Delivery</span>
        </div>
      )}

<div>

{isNewRelease && (
  <div className={styles.newReleaseBadge}>
    <span>NEW</span>
    <div className={styles.ribbon}></div>
  </div>
)}
</div>
      <button onClick={addItemToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
