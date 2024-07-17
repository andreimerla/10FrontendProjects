import React, { createContext, useState } from 'react'
const CardNumberContext = createContext();

export const CardNumberProvider = ({ children }) => {
  const [cardNumber, setCardNumber] = useState(1);

  const addCardNumber = () => {
    setCardNumber(cardNumber + 1);
  }
  return (
    <CardNumberContext.Provider value={{ addCardNumber, cardNumber }}>
      {children}
    </CardNumberContext.Provider>
  )
}

export default CardNumberContext
