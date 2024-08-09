import React from 'react';
import { Typography, Box } from '@mui/material';

function Home() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Bienvenue sur notre boutique en ligne
      </Typography>
      <Typography variant="body1" paragraph>
        Nous sommes ravis de vous accueillir dans notre boutique en ligne ! Découvrez une
        large sélection de produits allant des vêtements aux accessoires. Profitez de
        nos offres spéciales et trouvez les articles parfaits pour vous et vos proches.
        N'hésitez pas à explorer notre catalogue et à ajouter vos produits préférés au panier.
      </Typography>
      <Typography variant="body1" paragraph>
        Pour toute question ou assistance, veuillez contacter notre service client. Nous
        sommes là pour vous aider !
      </Typography>
    </Box>
  );
}

export default Home;
