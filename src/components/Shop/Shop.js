import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
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
import { useState } from "react";

// import ProductModal from './productModal';

const cards = [
	{
		name: "Product 1",
		description: "Description 1",
		quantity: 0,
		key: 1,
	},
	{
		name: "Product 2",
		description: "Description 2",
		quantity: 0,
		key: 2,
	},
	{
		name: "Product 3",
		description: "Description 3",
		quantity: 0,
		key: 3,
	},
	{
		name: "Product 4",
		description: "Description 4",
		quantity: 0,
		key: 4,
	},
	{
		name: "Product 5",
		description: "Description 5",
		quantity: 0,
		key: 5,
	},
	{
		name: "Product 6",
		description: "Description 6",
		quantity: 0,
		key: 6,
	},
	{
		name: "Product 7",
		description: "Description 7",
		quantity: 0,
		key: 7,
	},
	{
		name: "Product 8",
		description: "Description 8",
		quantity: 0,
		key: 8,
	},
];

const theme = createTheme();


const ProductCard = (props) => {

	const productName = props.name;
	const productDescription = props.description;
	const [productQuantity, setProductQuantity] = useState(props.quantity);
	const productKey = props.id;

	const resetQuantity = () => {
		if (!productQuantity) return;
		alert(productQuantity + ' Items added');
		setProductQuantity(0);
	}


	// const productModal = () =>{
	// 	return (
	// 		<ProductModal />
	// 	)
	// }


	return (
		<Grid item id={productKey} xs={12} sm={6} md={3}>
			<Card
				// onClick = {productModal}
				sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
			>	
				<CardMedia
					component="img"
					image="https://source.unsplash.com/random"
					alt="random"
				/>
				<CardContent sx={{ flexGrow: 1 }}>
					<Typography gutterBottom variant="h5" component="h2">
						{productName}
					</Typography>
					<Typography>
						{productDescription}
					</Typography>
				</CardContent>
				<CardActions>
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
				</CardActions>
			</Card>
		</Grid>
	)
}


export default function Shop() {

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
								key={card.key}
							/>
						))}
					</Grid>
				</Container>
			</main>
		</ThemeProvider>
	);
}