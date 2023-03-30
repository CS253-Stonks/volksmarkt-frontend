import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import RatingModal from './ratingModal';
import { useState } from 'react';


const ColorChips = (props) => {

    if(props.status === "OFD"){
        return (
            <Stack spacing={1} alignItems="center" sx={{
                marginRight: '50px',
            }}>
                <Chip sx={{
                    marginY: 'auto',
                }} label="Status: Out For Delivery" color="primary" variant='outlined' />
            </Stack>
        );
    }
    else{
        return (
            <Stack spacing={1} alignItems="center" sx={{
                marginRight: '50px',
            }}>
                <Chip sx={{
                    marginY: 'auto',
                }} label="Status: Delivered" color="success" variant='outlined' />
            </Stack>
        );
    }
}


const cards = [
    {
        name: "Order 1",
        description: "Description 1",
        quantity: 0,
        key: 1,
        status: "OFD",
    },
    {
        name: "Order 2",
        description: "Description 2",
        quantity: 0,
        key: 2,
        status: 'OFD',
    },
    {
        name: "Order 3",
        description: "Description 3",
        quantity: 0,
        key: 3,
        status: 'OFD',
    },
    {
        name: "Order 4",
        description: "Description 4",
        quantity: 0,
        key: 4,
        status: 'D',
    },
    {
        name: "Order 5",
        description: "Description 5",
        quantity: 0,
        key: 5,
        status: 'D',
    },
    {
        name: "Order 6",
        description: "Description 6",
        quantity: 0,
        key: 6,
        status: 'D',
    },
    {
        name: "Order 7",
        description: "Description 7",
        quantity: 0,
        key: 7,
        status: 'D',
    },
    {
        name: "Order 8",
        description: "Description 8",
        quantity: 0,
        key: 8,
        status: 'D',
    },
];

const theme = createTheme();


const OrderCard = (props) => {

    const orderName = props.name;
    const orderDescription = props.description;
    const orderKey = props.id;
    const orderStatus = props.status;
    const [rating, setRating] = useState(0);

    return (
        <Grid item id={orderKey} xs={12}>
            <Card
                sx={{ height: '200px', display: 'flex', flexDirection: 'row' }}
            >
                <Paper sx={{
                    marginRight: 'auto',
                    boxShadow: 'none',
                }}>
                    <Card sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        boxShadow: 'none',
                        width: '650px'
                    }}>
                        <CardContent sx={{
                            flexGrow: 1,
                            marginTop: '20px',
                            marginLeft: '30px',
                        }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {orderName}
                            </Typography>
                            <Typography>
                                {orderDescription}
                            </Typography>
                        </CardContent>
                        <ColorChips status={orderStatus} sx={{
                            flexGrow: 1,
                        }}/>
                    </Card>
                    <CardActions sx={{
                        marginLeft: '40px',
                    }}>
                        <RatingModal rating={rating} setRating={setRating}/>
                        <Button size="medium" sx={{
                            height: '30px'
                        }} variant="contained">BUY AGAIN</Button>
                    </CardActions>
                </Paper>
                <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                    sx={{
                        height: "200px",
                        width: "200px",
                        display: 'flex',
                        alignSelf: 'flex-end'
                    }}
                />
            </Card>
        </Grid>
    )
}


export default function MyOrders() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                </Box>
                <Container sx={{
                    py: 3,
                }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <OrderCard
                                name={card.name}
                                description={card.description}
                                quantity={card.quantity}
                                key={card.key}
                                status={card.status}
                            />
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}