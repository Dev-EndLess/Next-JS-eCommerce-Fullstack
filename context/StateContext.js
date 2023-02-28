import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast'

const Context = createContext()

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [quantity, setQuantity] = useState(1)

  let foundProduct
  let index

  // Add Product to Cart with Quantity
  const addToCart = (product, quantity) => {
    const checkProductInCart = cartItems.find(item => item._id === product.id)

    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity)
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity)

    if (checkProductInCart) {
      const updateCartItems = cartItems.map(cartProduct => {
        if (cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setCartItems(updateCartItems)
    } else {
      product.quantity = quantity

      setCartItems([...cartItems, { ...product }])
    }

    toast.success(`${quantity} ${product.name} added to the cart.`)
  }

  const removeItemFromCart = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id)
    const newCartItems = cartItems.filter((item) => item._id !== product._id)

    setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price * foundProduct.quantity)
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity)
    setCartItems(newCartItems)
  }

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)

    if (value === 'increment') {
      const updatedData = cartItems.map(item => (item._id === id ? { ...item, quantity: item.quantity + 1 } : item))
      setCartItems(updatedData)
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if (value === 'decrement') {
      if (foundProduct.quantity > 1) {
        const updatedData = cartItems.map(item => (item._id === id ? { ...item, quantity: item.quantity - 1 } : item))
        setCartItems(updatedData)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }

  // Increment Item Quantity
  const incrementQuantity = () => {
    setQuantity((prevQty) => prevQty + 1)
  }

  // Decrement Item Quantity
  const decrementQuantity = () => {
    setQuantity((prevQty) => {
      if (prevQty <= 1) return 1;

      return prevQty - 1;
    });
  }

  return (
    <Context.Provider value={{
      showCart,
      setShowCart,
      cartItems,
      totalPrice,
      totalQuantities,
      quantity,
      incrementQuantity,
      decrementQuantity,
      addToCart,
      toggleCartItemQuantity,
      removeItemFromCart,
      setCartItems,
      setTotalPrice,
      setTotalQuantities
    }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)