import { Container } from "@mui/system" 
import { Typography } from "@mui/material" 
import CartCard from "./card" 
import { Grid, Box, Button } from "@mui/material" 
import {useState, useEffect} from 'react' 
import { useHistory, withRouter } from 'react-router-dom' 
import { useLocation } from 'react-router-dom' 


const ShoppingCart = () => {

	const [list, setList] = useState([])
	const [totalPrice, setTotalPrice] = useState(20000)

	useEffect(() => {

		// fetch('http://127.0.0.1:8000/Shopping/Cart/3/')
		// .then(res => {
		// 	return res.json() 
		// })
		// .then(data => {
		// 	data.map((pro) => (
		// 		fetch(`http://127.0.0.1:8000/Products/${pro.product}/`)
		// 		.then(res => {
		// 			return res.json()
		// 		})
		// 		.then(data => {
		// 			setList([...list,  data])
		// 		})
		// 	))
		// })
		const foo = async () => {
			const data = await (await fetch('http://127.0.0.1:8000/Shopping/Cart/3/')).json()
			const tempList = await Promise.all(data.map(async (cartItem)=> (await (await fetch(`http://127.0.0.1:8000/Products/${cartItem.product}/`)).json())))
			setList(tempList)
		}
		foo();
	}, []) 
	console.log(list);

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
						productName = {card.name}
						description = {card.description}
						quantity = {card.quantity}
						price = {card.price}
						id = {card.id}
						list = {list}
						setList = {setList}
						image = {card.image}
						key = {card.id}
						totalSum = {totalPrice}
						setTotalSum = {setTotalPrice}
					/>
				))}
			</Grid>
			<Box sx={{
				width: '53%',
				height: '100px',
				marginX: 'auto',
				marginBottom: '40px',
				boxShadow: '6px 6px 5px rgba(0, 0, 0, 0.3)',
				padding: '40px'
			}}>
				<Typography component="div" variant="h5" sx={{
					textAlign: 'center',
				}}>
					Total Price: &#8377; {totalPrice}
                </Typography>
				<Button size="large" variant="contained" sx={{
					marginLeft: '250px',
					marginTop: '30px'
				}}>PLACE ORDER</Button>
			</Box>
		</Container>
	) 
}

export default withRouter(ShoppingCart)