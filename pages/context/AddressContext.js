// AddressContext.js
import React, { createContext, useState } from 'react';

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [deliveryLocation, setDeliveryLocation] = useState("America"); // Initial location

  return (
    <AddressContext.Provider value={{ deliveryLocation, setDeliveryLocation }}>
      {children}
    </AddressContext.Provider>
  );
};