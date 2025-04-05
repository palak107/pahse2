// context/DeliverContext.js
import { createContext, useState, useContext } from 'react';

const DeliveryContext = createContext();

export function DeliveryProvider({ children }) {
  const [deliveryOptions, setDeliveryOptions] = useState([
    {
      id: 'prime',
      name: 'Prime Delivery',
      price: 0,
      estimatedDays: 1,
      isPrime: true,
      availableProducts: ['12321341', '49538094'], // Add your actual product IDs
      isSameDay: false
    },
    {
      id: 'same-day',
      name: 'Same Day Delivery',
      price: 9.99,
      estimatedDays: 0,
      isPrime: false,
      availableProducts: ['12321341', '4903850'], // Add your actual product IDs
      isSameDay: true
    }
  ]);

  const [userLocation, setUserLocation] = useState({
    city: "New York", // Default location
    nearestStore: "Amazon Fresh NYC"
  });

  return (
    <DeliveryContext.Provider value={{ 
      deliveryOptions, 
      userLocation, 
      setUserLocation 
    }}>
      {children}
    </DeliveryContext.Provider>
  );
}

export function useDelivery() {
  const context = useContext(DeliveryContext);
  if (!context) {
    throw new Error('useDelivery must be used within a DeliveryProvider');
  }
  return context;
}