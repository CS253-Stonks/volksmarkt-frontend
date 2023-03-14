import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Select, MenuItem, Box } from '@mui/material';

const StoreCard = ({ product }) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Card>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <CardMedia component="img" height="200" image={product.imageUrl} alt={product.name} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {product.description}
            </Typography>
            <Grid container justifyContent="space-between" alignItems="center" mt={2}>
              <Grid item>
                <Typography variant="body1" color="textSecondary">
                  Quantity:
                </Typography>
                <Select
                  value={quantity}
                  onChange={handleQuantityChange}
                  sx={{ marginLeft: '8px' }}
                >
                  {[...Array(10).keys()].map((quantity) => (
                    <MenuItem key={quantity + 1} value={quantity + 1}>
                      {quantity + 1}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item>
                <Typography variant="h6">${product.price * quantity}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default function Dashboard() {
    return (
    <>
    <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <StoreCard product={{"name" : "Pen", "description":"Reynolds Pen","price":10 , "imageUrl":"/pen.jpg"}}/>
        </Grid>
        <Grid item xs={6}>
            <StoreCard product={{"name" : "Pen", "description":"Reynolds Pen","price":10 , "imageUrl":"/pen.jpg"}}/>
        </Grid>
        <Grid item xs={6}>
            <StoreCard product={{"name" : "Pen", "description":"Reynolds Pen","price":10 , "imageUrl":"/pen.jpg"}}/>
        </Grid>
        <Grid item xs={6}>
            <StoreCard product={{"name" : "Pen", "description":"Reynolds Pen","price":10 , "imageUrl":"/pen.jpg"}}/>
        </Grid>
      </Grid>
    </Box>
    </>
    )
}