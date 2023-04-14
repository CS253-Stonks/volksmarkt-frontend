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
import Drawer from '@mui/material/Drawer' 

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

const OrderItem = (props) => {

    const [card, setCard] = useState(({
        product: {
            name: " ",
            image: "https://source.unsplash.com/random"
        }
    }))

    useEffect(() => {
		fetch(`http://127.0.0.1:8000/Shopping/ViewOrderItem/${props.id}/`)
		.then(res => {
			return res.json() 
		})
		.then(data => {
			setCard(data) 
		})
	}, [])

    const product = card.product

    return (
        <Grid item id={props.id} xs={12} sx={{
            marginY: '20px',

        }}>
            <Card
                sx={{ height: '200px', display: 'flex', flexDirection: 'row' , borderRadius: '15px'}}
            >
                <Paper sx={{
                    marginRight: 'auto',
                    boxShadow: 'none',
                }}>
                    <Card sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        boxShadow: 'none',
                        width: '100%'
                    }}>
                        <CardContent sx={{
                            flexGrow: 1,
                            marginTop: '20px',
                            marginLeft: '30px',
                        }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {product.name}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {product.price}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.quantity}
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
                <CardMedia
                    component="img"
                    image={"http://127.0.0.1:8000" + product.image}
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


const OrderCard = (props) => {

    const {cost, address, date, items} = props

	const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    }) 

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return 
        }

        setState({ ...state, [anchor]: open }) 
    } 

	const anchor = 'right'
	
    const sidedrawer = (anchor) => (

		<Box sx={{
            width: '600px',
        }}>
			<Box
				sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
				role="presentation"
				onClick={toggleDrawer(anchor, false)}
				onKeyDown={toggleDrawer(anchor, false)}
			>
			</Box>
            <Box sx={{
				display: 'flex',
				flexDirection: 'column',
                marginX: '40px',
                marginY: '30px',
                padding: '20px',
                borderBottom: '3px solid black'
			}}>
                <Typography gutterBottom variant="h5" component="h2" sx={{marginX: 'auto'}}>
                    ORDER DETAILS
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" sx={{marginX: 'auto'}}>
                    Date Of Purchase: {props.date}
                </Typography>
            </Box>

			<Grid sx={{
                display: 'flex',
				flexDirection: 'column',
                marginX: '40px',
                marginY: '30px'
			}}>
                {
                    items.map((item) => (
                        <OrderItem id={item} key={item}/>
                    ))
                }
			</Grid>

            <Box sx={{
				display: 'flex',
				flexDirection: 'column',
                marginX: '40px',
                marginY: '30px',
                padding: '20px',
                borderTop: '3px solid black'
			}}>
                
                <Typography gutterBottom variant="h5" component="h2" sx={{
                    marginLeft: 'auto', 
                    marginRight: 0,
                }}>
                    Total:  &#8377;{props.cost}
                </Typography>
            </Box>


		</Box>
    ) 

    return (

        <>
            <Grid xs={12}>
                <Card
                    sx={{ height: '200px', display: 'flex', flexDirection: 'row', marginY: '20px'}}
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
                                    Date of Purchase: {date}
                                </Typography>
                                <Typography>
                                    Total Cost: &#8377;{cost}
                                </Typography>
                                <Typography>
                                    Delivery Address: {address}
                                </Typography>
                            </CardContent>
                            <ColorChips status={"D"} sx={{
                                flexGrow: 1,
                            }}/>
                        </Card>
                        <CardActions sx={{
                            marginLeft: '40px',
                        }}>
                            <Button size="medium" onClick = {toggleDrawer(anchor, true)} sx={{
                                height: '30px'
                            }} variant="contained">VIEW ORDER DETAILS</Button>
                            <Button size="medium" sx={{
                                height: '30px'
                            }} variant="contained">BUY AGAIN</Button>
                        </CardActions>
                    </Paper>
                </Card>
            </Grid>
            <Drawer
				anchor={anchor}
				open={state[anchor]}
				onClose={toggleDrawer(anchor, false)}
			>
				{sidedrawer(anchor)}
			</Drawer>
        </>
    )
}


export default function MyOrders() {

    const [cards, setCards] = useState([])
    const user = localStorage.getItem('userID')

    useEffect(() => {
		fetch(`http://127.0.0.1:8000/Shopping/MyOrders/${user}/`)
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
                        marginY: '20px'
                    }}
                >
                    <Typography gutterBottom variant="h4" component="h1" sx={{
                        marginX: 'auto',
                        width: '60%',
                        fontWeight: 'bold',
                        fontSize: '45px',
                    }}>
                        MY PAST ORDERS
                    </Typography>
                </Box>
                <Container sx={{
                    py: 3,
                    width: '650px',
                }} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <OrderCard
                                cost = {card.total_cost}
                                address = {card.deliveryaddress}
                                date = {card.order_date}
                                items = {card.order_items}
                                key = {card.id}
                            />
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}