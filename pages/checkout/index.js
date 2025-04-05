import React from 'react';
import axios from 'axios'; // Add axios import
import { loadStripe } from '@stripe/stripe-js';
import Navbarbelt from '../components/nabar/navabrbelt/navbarbelt';
import Navbanner from '../components/nabar/navabrbelt/Nabarbanner/navbanner';
import styles from './checkout.module.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from '@/slices/basketSlice';
import CheckoutProduct from '../components/checkoutproduct/chekoutProduct';
import { useSession } from 'next-auth/react';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const items = useSelector(selectItems) || [];
  console.log('Basket Items:', items)
  const total = items.reduce((total, item) => total + item.price, 0);
  const { data: session } = useSession();

  const createCheckoutSession = async () => {
    try {
      if (!session?.user?.email) {
        alert('Please sign in to proceed with checkout');
        return;
      }

      if (items.length === 0) {
        alert('Your basket is empty');
        return;
      }

      const stripe = await stripePromise;

      const response = await axios.post('/api/create-checkout-session', {
        items,
        email: session.user.email,
      });

      if (response.status !== 200) {
        throw new Error(`Error: ${response.data.error || 'Unknown error'}`);
      }

      console.log('Checkout session created:', response.data);
      const result = await stripe.redirectToCheckout({
        sessionId: response.data.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
     
      <main className={styles.checkout}>
         {/* Left Section - Shopping Basket */}
         <div className={styles.leftSection}>
          <div className={styles.imageContainer}>
            <Image src='/prime.jpg' width={1020} height={250} alt="Amazon Prime Banner" />
          </div>
          
          <div className={styles.shoppingBasket}>
             <div className={styles.heading}>
               <h1>{items.length === 0 ? "Your Amazon basket is empty" : "Shopping Basket"}</h1>
            </div>
            
           {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                description={item.description}
                 prime={item.prime}
               />
            ))}
          </div>
        </div>
        
        {/* Right Section - Subtotal */}
        {items.length > 0 && (
         <div className={styles.rightSection}>
           <h2>
             Subtotal ({items.length} items):{" "}
              <span>
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)}
              </span>
            </h2>
             <button 
            onClick={session ? createCheckoutSession : undefined}
               className={styles.button}
             disabled={!session}
            >
              {!session ? 'Sign in to Checkout' : 'Proceed to Checkout'}
            </button>
          </div>
        )}
      </main>  
    </div>
  );
};

export default Checkout;
