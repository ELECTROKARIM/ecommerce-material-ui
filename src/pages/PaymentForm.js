import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid
} from '@mui/material';

export default function PaymentForm() {
  const cartItems = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    alert('Paiement effectué !');
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        Formulaire de paiement
      </Typography>
      <Typography variant="h6" gutterBottom>
        Montant total: {calculateTotal()} €
      </Typography>
      <Paper sx={{ p: 2 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nom"
                name="name"
                fullWidth
                variant="outlined"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                variant="outlined"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Numéro de carte"
                name="cardNumber"
                fullWidth
                variant="outlined"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Date d'expiration"
                name="expirationDate"
                type="text"
                fullWidth
                variant="outlined"
                value={formData.expirationDate}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="CVV"
                name="cvv"
                type="text"
                fullWidth
                variant="outlined"
                value={formData.cvv}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Payer maintenant
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
