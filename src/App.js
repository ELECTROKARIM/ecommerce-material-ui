import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import PaymentForm from './pages/PaymentForm'; // Importez le composant PaymentForm

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Box sx={{ mt: 4 }}>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment-form" element={<PaymentForm />} /> {/* Ajoutez la route PaymentForm */}
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
