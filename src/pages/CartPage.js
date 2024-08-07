import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Box
} from '@mui/material';
import { removeFromCart, decreaseQuantity, addToCart } from '../features/cartSlice';

function CartPage() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

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
        Votre Panier
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Produit</TableCell>
              <TableCell align="right">Prix</TableCell>
              <TableCell align="right">Quantité</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <img src={item.image} alt={item.title} style={{ width: 50, height: 50 }} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.title}
                </TableCell>
                <TableCell align="right">{item.price} €</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </Button>
                  {item.quantity}
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </Button>
                </TableCell>
                <TableCell align="right">{(item.price * item.quantity).toFixed(2)} €</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Supprimer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4} align="right">Total</TableCell>
              <TableCell align="right">{calculateTotal()} €</TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => alert('Passer à la caisse')}
      >
        Passer à la caisse
      </Button>
    </Box>
  );
}

export default CartPage;
