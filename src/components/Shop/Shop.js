import * as React from 'react';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GroupedButton from './GroupedButton';
import { useState, useEffect } from "react";
import { CardActionArea } from '@mui/material';

const theme = createTheme();


const ProductCard = (props) => {

	const productName = props.name;
	const productDescription = props.description;
	const [productQuantity, setProductQuantity] = useState(props.quantity);
	const productID = props.id;

	const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

	const anchor = 'right';
	

	const resetQuantity = () => {
		if (!productQuantity) return;
		console.log(productQuantity + ' Items added');
		setProductQuantity(0);
	}

	
    const list = (anchor) => (
		<div>
			<Box
				sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
				role="presentation"
				onClick={toggleDrawer(anchor, false)}
				onKeyDown={toggleDrawer(anchor, false)}
			>
			</Box>
			<GroupedButton
				sx={{
					marginLeft: '10px',
				}}
				quantity={productQuantity}
				setQuantity={setProductQuantity}
			/>
			<Button size="small" sx={{
				marginLeft: '13px',
			}} variant="contained" onClick={resetQuantity}>ADD TO CART</Button>
		</div>
    );


	return (
		<Grid item id={productID} xs={12} sm={6} md={3}>
			<CardActionArea
				onClick = {toggleDrawer(anchor, true)}
				sx={{ 
					height: '100%', 
					display: 'flex',
					flexDirection: 'column', 
				}}
			>	
				<CardMedia component="img" image="https://source.unsplash.com/random" alt="random" />
				<CardContent sx={{
					flexGrow: 1,
					marginRight: 'auto',
				}}>
					<Typography gutterBottom variant="h5" component="h2">
						{productName}
					</Typography>
					<Typography>
						{productDescription}
					</Typography>
				</CardContent>
				<CardActions sx={{
					display: 'none',
				}}>


					
				</CardActions>
			</CardActionArea>
			<Drawer
				anchor={anchor}
				open={state[anchor]}
				onClose={toggleDrawer(anchor, false)}
			>
				{list(anchor)}
			</Drawer>
		</Grid>
	)
}


export default function Shop() {

	
	const [cards, setCards] = useState([]);


	useEffect(() => {
		fetch('http://127.0.0.1:8000/Products/')
		.then(res => {
			return res.json();
		})
		.then(data => {
			setCards(data);
		})
	}, []);


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
				}} maxWidth="lg">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{cards.map((card) => (
							<ProductCard
								name={card.name}
								description={card.description}
								quantity={card.quantity}
								key={card.id}
							/>
						))}
					</Grid>
				</Container>
			</main>
		</ThemeProvider>
	);
}