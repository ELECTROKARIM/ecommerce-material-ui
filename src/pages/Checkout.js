import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <Typography variant="h5" sx={{ mt: 2 }}>
        Votre panier est vide.
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        Passer à la caisse
      </Typography>
      <Typography variant="h6" gutterBottom>
        Montant total: {calculateTotal()} €
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/payment-form"
        >
          Passer à la caisse
        </Button>
      </Box>
    </Box>
  );
}
