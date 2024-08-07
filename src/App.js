import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';

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
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
