import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import CartCard from "./components/CartItems/card";
import { Grid } from "@mui/material";
import {useState} from 'react';



const ShoppingCart = () => {

	const foo = [
		{
			"productName": "E-shop",
			"description": "This is near Hall 3",
			"quantity": 10,
			"price": 150,
			"id": 1,
		},
		{
			"productName": "F-shop",
			"description": "This is near Hall 3",
			"quantity": 9,
			"price": 250,
			"id": 2,
		},
		{
			"productName": "G-shop",
			"description": "This is near Hall 3",
			"quantity": 8,
			"price": 350,
			"id": 3,
		},
		{
			"productName": "H-shop",
			"description": "This is near Hall 3",
			"quantity": 7,
			"price": 450,
			"id": 4,
		},
	];
	const [list, setList] = useState(foo);
	
	return (
		<Container>
			<Typography
				component="h1"
				variant="h3"
				align="center"
				color="text.primary"
				gutterBottom
				marginY={5}
			>
				Shopping Cart
			</Typography>
			<Grid container direction="column">
				{list.map((card) => (
					<CartCard 
						productName = {card.productName}
						description = {card.description}
						quantity = {card.quantity}
						price = {card.price}
						id = {card.id}
						list = {list}
						setList = {setList}
					/>
		  		))}
			</Grid>
		</Container>
	);
}

export default ShoppingCart;