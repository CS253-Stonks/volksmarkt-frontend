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
import {Paper, ButtonBase, Button} from '@mui/material';
import {styled} from "@mui/material/styles";

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

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function ComplexGrid(props) {

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 800,
        flexGrow: 1,
        marginBottom: 3,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    
    >
      <Grid container spacing={2} width={800}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Bourbon_biscuit.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                {props.name}
              </Typography>
              <Typography variant="body2" gutterBottom>

              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item marginLeft={4}>
            <Typography variant="subtitle1" component="div">
              ₹19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default function SellerDashboard() {
  const desc = "Just another shop"
    return (
      <Container>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
          marginTop={5}
        >
          Seller's Dashboard
        </Typography>
        <Grid container direction="column">
            
        <Button variant="outlined" sx={{marginX: 'auto'}} >Add an item</Button>
          <ComplexGrid name="Bourbon"/>
          <ComplexGrid name="Cookies"/>
          <ComplexGrid name="Cake"/>

        </Grid>
      </Container>
    )
}