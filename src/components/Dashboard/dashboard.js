import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import shopImage from "./shopImage.jpg";

function StoreCard(props) {
  return (
    <Grid item xs = {6}>
      <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={shopImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    
  );
};

export default function Dashboard() {
  const desc = "Just another shop"
    return (
      <Container>
        <Grid container spacing={5} marginTop={5}>
          <StoreCard name="E-Shop" desc={desc}/>
          <StoreCard name="F-Shop" desc={desc}/>
          <StoreCard name="G-Shop" desc={desc}/>
          <StoreCard name="H-Shop" desc={desc}/>

        </Grid>
      </Container>
    )
}