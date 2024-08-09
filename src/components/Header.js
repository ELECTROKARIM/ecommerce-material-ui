import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-Commerce
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Accueil
        </Button>
        <Button color="inherit" component={Link} to="/products">
          Produits
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          Panier
        </Button>
        <Button color="inherit" component={Link} to="/checkout">
          Passer à la caisse
        </Button>
      </Toolbar>
    </AppBar>
  );
}
