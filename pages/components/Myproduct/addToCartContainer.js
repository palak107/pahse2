// import React from 'react';
// import styles from '../../styles/mystyles.module.css';
// import { useDispatch } from 'react-redux';
// import { addToBasket } from '../slices/basketSlice';


// const AddToCartContainer = ({ id, title, image, price, description, rating, prime }) => {
//   const dispatch = useDispatch();

//   const addItemToBasket = () => {
//     const product = { id, title, image, price, description, rating, prime };
//     console.log('Adding to basket:', product);
//     dispatch(addToBasket(product));
//   };

//   const product = { id, title, image, price, description, rating, prime };

//   // Function to format date as "Day, Month Date"
//   const formatDate = (date) => {
//     const options = { weekday: 'long', month: 'long', day: 'numeric' };
//     return date.toLocaleDateString('en-US', options);
//   };

//   // Calculate delivery dates
//   const today = new Date();
//   const freeDeliveryDate = new Date(today);
//   freeDeliveryDate.setDate(today.getDate() + 3); // Assuming free delivery is 3 days from now
//   const fastestDeliveryDate = new Date(today);
//   fastestDeliveryDate.setDate(today.getDate() + 1); // Assuming fastest delivery is tomorrow

//   // Calculate time remaining for fastest delivery
//   const fastestDeliveryTime = new Date(fastestDeliveryDate);
//   fastestDeliveryTime.setHours(23, 59, 59, 999); // Set to end of the day
//   const timeRemaining = fastestDeliveryTime - today;

//   // Function to format time remaining as "X hrs Y mins"
//   const formatTimeRemaining = (milliseconds) => {
//     const hours = Math.floor(milliseconds / (1000 * 60 * 60));
//     const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
//     return `${hours} hrs ${minutes} mins`;
//   };

//   console.log(product);

//   return (
//     <div>
//       <div className={styles.date}>
//         <h3>FREE delivery {formatDate(freeDeliveryDate)} on your first order</h3>
//         <h3>Or fastest delivery {formatDate(fastestDeliveryDate)}. Order within {formatTimeRemaining(timeRemaining)}</h3>
//         <p>Delivering to palak</p>
//         <div className={styles.chekout_info}>
//           <button onClick={addItemToBasket}>add to basket</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCartContainer;

import React, { useContext } from 'react';
import styles from './mystyles.module.css';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../slices/basketSlice';
import { AddressContext } from '../../context/AddressContext'; // Import AddressContext

const AddToCartContainer = ({ id, title, image, price, description, rating, prime , stock}) => {
  const dispatch = useDispatch();
  const { deliveryLocation } = useContext(AddressContext); // Get deliveryLocation from context

  const addItemToBasket = () => {
    const product = { id, title, image, price, description, rating, prime };
    console.log('Adding to basket:', product);
    dispatch(addToBasket(product));
  };

  const product = { id, title, image, price, description, rating, prime };

  // Function to format date as "Day, Month Date"
  const formatDate = (date) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Calculate delivery dates
  const today = new Date();
  const freeDeliveryDate = new Date(today);
  freeDeliveryDate.setDate(today.getDate() + 3);
  const fastestDeliveryDate = new Date(today);
  fastestDeliveryDate.setDate(today.getDate() + 1);

  // Calculate time remaining for fastest delivery
  const fastestDeliveryTime = new Date(fastestDeliveryDate);
  fastestDeliveryTime.setHours(23, 59, 59, 999);
  const timeRemaining = fastestDeliveryTime - today;

  // Function to format time remaining as "X hrs Y mins"
  const formatTimeRemaining = (milliseconds) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours} hrs ${minutes} mins`;
  };

  const getStockStatus = (stock) => {
    if (stock > 10) return { text: 'In Stock', class: styles.inStock };
    if (stock > 0) return { text: 'Only few left!', class: styles.lowStock };
    return { text: 'Out of Stock', class: styles.outOfStock };
  };
  
  const stockStatus = getStockStatus(stock);
  console.log(product);

  return (
    <div>
      <div className={styles.date}>
        <h3>FREE delivery {formatDate(freeDeliveryDate)} on your first order</h3>
        <h3>Or fastest delivery {formatDate(fastestDeliveryDate)}. Order within {formatTimeRemaining(timeRemaining)}</h3>
        <p>Delivering to {deliveryLocation}</p> {/* Use deliveryLocation from context */}
        <div className={`${styles.stock} ${stockStatus.class}`}>
  {stockStatus.text}
</div>  
        <div className={styles.chekout_info}>
          <button onClick={addItemToBasket}>add to basket</button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartContainer;