import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import CartCard from "./components/CartItems/card";
import {Grid} from "@mui/material";

const ShoppingCart = () => {
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
          Shopping Cart
        </Typography>
        <Grid container direction="column">
            <CartCard />
        </Grid>
        </Container>
     );
}
 
export default ShoppingCart;