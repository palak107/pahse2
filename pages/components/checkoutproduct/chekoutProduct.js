// // import React from 'react';
// // import styles from './checkoutproduct.module.css';
// // import { useDispatch } from 'react-redux';
// // import { addToBasket, removeFromBasket } from '../../slices/basketSlice';
// // import { useSelector } from 'react-redux';
// // const CheckoutProduct = ({
// //   id,
// //   title,
// //   image,
// //   price,
// //   description,
// //   rating,
// //   prime
// // }) => {
// //   const dispatch = useDispatch();

// //   const addItemToBasket = () => {
// //     const product = {
// //       id,
// //       title,
// //       image,
// //       price,
// //       description,
// //       rating,
// //       prime,
// //     };
// //     dispatch(addToBasket(product));
// //   };


// //   const removeItemFromBasket = () => {
// //     // Make sure we're just passing the id for removal
// //     console.log("Removing item with id:", id);
// //     dispatch(removeFromBasket({ id }));
    
// //   };
// //   const basket = useSelector((state) => state.basket.basket);
// // console.log(basket); // Check the basket state here


// //   return (
// //     <div className={styles.chekout}>
// //       <img src={image} width={200} height={200} alt="image is displaying" />
// //       <div className={styles.chekout_info}>
// //         <p>{title}</p>
// //         <div>
// //           {Array(rating).fill().map((_, i) => (
// //             <span key={i}>⭐</span>
// //           ))}
// //         </div>
// //         <p>{description}</p>
// //         <p>${price}</p>
// //         {prime && (
// //           <div>
// //             <img src="/prime.png" alt="prime delivery" />
// //             <p>Prime Delivery</p>
// //           </div>
// //         )}
// //       </div>
// //       <div className={styles.chekout_info}>
// //         <button onClick={addItemToBasket} className={styles.button}>
// //           Add to basket
// //         </button>
// //         <button onClick={removeItemFromBasket} className={styles.button}>
// //           Remove from basket
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CheckoutProduct;


// import React, { useContext } from 'react';
// import styles from './checkoutproduct.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToBasket, removeFromBasket } from '../../slices/basketSlice';
// import { DeliveryContext } from '../../context/DeliverContext'; // Import the context

// const CheckoutProduct = ({
//   id,
//   title,
//   image,
//   price,
//   description,
//   rating,
//   prime,
  
// }) => {
//   const dispatch = useDispatch();
//   const { userLocation, deliveryOptions } = useContext(DeliveryContext); // Get location data
//   const basket = useSelector((state) => state.basket.basket);
  
//   // Check if same-day delivery is available for this product
//   const isSameDayAvailable = deliveryOptions.some(
//     option => option.isSameDay && option.availableProducts.includes(id)
//   );

//   // Check if store pickup is available
//   const isStorePickupAvailable = deliveryOptions.some(
//     option => option.isPickup && option.availableProducts.includes(id)
//   );

//   const addItemToBasket = () => {
//     const product = {
//       id,
//       title,
//       image,
//       price,
//       description,
//       rating,
//       prime,
//     };
//     dispatch(addToBasket(product));
//   };

//   const removeItemFromBasket = () => {
//     dispatch(removeFromBasket({ id }));
//   };

//   return (
//     <div className={styles.chekout}>
//       <img src={image} width={200} height={200} alt={title} />
//       <div className={styles.chekout_info}>
//         <p>{title}</p>
//         <div>
//           {Array(rating).fill().map((_, i) => (
//             <span key={i}>⭐</span>
//           ))}
//         </div>
//         <p>{description}</p>
//         <p>${price}</p>
        
//         {/* Location-based delivery options */}
//         {userLocation ? (
//           <div className={styles.delivery_options}>
//             {prime && (
//               <div className={styles.prime_delivery}>
//                 <img src="/prime.png" alt="prime delivery" />
//                 <p>Prime Delivery to {userLocation.city}</p>
//               </div>
//             )}
            
//             {isSameDayAvailable && (
//               <div className={styles.same_day}>
//                 <span>🚚</span>
//                 <p>Same-Day Delivery Available</p>
//               </div>
//             )}
            
//             {isStorePickupAvailable && (
//               <div className={styles.store_pickup}>
//                 <span>🏪</span>
//                 <p>Pickup Today at {userLocation.nearestStore}</p>
//               </div>
//             )}
//           </div>
//         ) : (
//           <p className={styles.location_prompt}>Set location for delivery options</p>
//         )}
//       </div>
      
//       <div className={styles.chekout_info}>
//         <button onClick={addItemToBasket} className={styles.button}>
//           Add to basket
//         </button>
//         <button onClick={removeItemFromBasket} className={styles.button}>
//           Remove from basket
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutProduct;
import React from 'react';
import styles from './checkoutproduct.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../slices/basketSlice';
import { useDelivery } from '../../context/DeliverContext';

const CheckoutProduct = ({
  id,
  title,
  image,
  price,
  description,
  rating,
  prime
}) => {
  const dispatch = useDispatch();
  const { userLocation, deliveryOptions } = useDelivery();
  const items = useSelector(state => state.basket.items);

  // Check delivery options
  const isSameDayAvailable = deliveryOptions.some(
    option => option.isSameDay && option.availableProducts.includes(id)
  );

  const addItemToBasket = () => {
    const product = { id, title, image, price, description, rating, prime };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    console.log('Removing item with id:', id);
    dispatch(removeFromBasket(String(id)));
  };

  // For debugging, use this effect instead
  React.useEffect(() => {
    console.log('Basket items updated:', items);
  }, [items]);

  return (
    <div className={styles.chekout}>
      <img src={image} width={200} height={200} alt={title} />
      <div className={styles.chekout_info}>
        <p>{title}</p>
        <div>
          {Array(rating).fill().map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        <p>{description}</p>
        <p>${price}</p>
        
        <div className={styles.delivery_options}>
          {prime && (
            <div className={styles.prime_delivery}>
              <img src="/prime.png" alt="prime delivery" />
              <p>Prime Delivery to {userLocation.city}</p>
            </div>
          )}
          
          {isSameDayAvailable && (
            <div className={styles.same_day}>
              <span>🚚</span>
              <p>Same-Day Delivery Available</p>
            </div>
          )}
        </div>
      </div>
      
      <div className={styles.chekout_info}>
        <button onClick={addItemToBasket} className={styles.button}>
          Add to basket
        </button>
        <button onClick={removeItemFromBasket} className={styles.button}>
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
