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
import { useEffect, useState } from 'react';

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


const theme = createTheme();


const OrderCard = (props) => {

    const orderName = props.name;
    const orderDescription = props.description;
    const orderKey = props.id;
    const orderStatus = props.status;
    const image = props.image;

    return (

        <>
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
                            <Button size="medium" sx={{
                                height: '30px'
                            }} variant="contained">RATE THE PRODUCT</Button>
                            <Button size="medium" sx={{
                                height: '30px'
                            }} variant="contained">BUY AGAIN</Button>
                        </CardActions>
                    </Paper>
                    <CardMedia
                        component="img"
                        image={image}
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
        </>
    )
}


export default function MyOrders() {

    const [cards, setCards] = useState([])

    useEffect(() => {
		fetch('http://127.0.0.1:8000/Products/')
		.then(res => {
			return res.json() 
		})
		.then(data => {
			setCards(data) 
		})
	}, []) 

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
                        boxShadow: '6px 6px 5px rgba(0, 0, 0, 0.3)',
                        width: '55%',
                        marginX: 'auto',
                        paddingX: '200px',
                        fontWeight: 'bold',
                        fontSize: '45px',
                        marginTop: '20px'
                    }}
                >
                    MY PAST ORDERS
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
                                image={card.image}
                            />
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}