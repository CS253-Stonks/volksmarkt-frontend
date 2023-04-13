import { Container } from "@mui/system"
import { Typography } from "@mui/material"
import CartCard from "./card"
import { Grid, Box, Button } from "@mui/material"
import { useState, useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom'


const TotalPrice = (props) => {
	return (
		<Typography component="div" variant="h5" sx={{
			textAlign: 'center',
		}}>
			Total Price: &#8377; {props.sum + props.z}
		</Typography>
	)
}


const ShoppingCart = () => {

	const history = useHistory()

	const [list, setList] = useState([])
	const [cart, setCart] = useState([])

	var dict = {}
	var dict2 = {}
	var user = localStorage.getItem('userID')
	
	const handleOrder = (e) =>{
		console.log(e)
		alert('Order Placed')
		history.push('/')
	}

	useEffect(() => {
		const foo = async () => {
			const data = await (await fetch(`http://127.0.0.1:8000/Shopping/Cart/${user}/`)).json()
			const tempList = await Promise.all(data.map(async (cartItem) => (await (await fetch(`http://127.0.0.1:8000/Products/${cartItem.product}/`)).json())))
			setCart(data)
			setList(tempList)
		}
		foo()
	}, [user])


	var z=0
	for (const cartItem of cart){
		dict[cartItem.product] = cartItem.quantity
		dict2[cartItem.product] = cartItem.id
	}
	
	for (const item of list){
		item.quantity = dict[item.id]
		z += dict[item.id] * item.price
	}
	const [sum, setSum] = useState(z)

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
						productName={card.name}
						description={card.description}
						quantity={dict[card.id]}
						totalq={card.quantity}
						price={card.price}
						id={card.id}
						list={list}
						cartItemId={dict2[card.id]}
						setList={setList}
						image={card.image}
						key={card.id}
						sum = {sum}
						setSum = {setSum}
						init = {z}
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
				<TotalPrice sum={sum} z={z}/>
				<Button size="large" variant="contained" onClick={handleOrder } sx={{
					marginLeft: '250px',
					marginTop: '30px'
				}}>PLACE ORDER</Button>
			</Box>
		</Container>
	)
}

export default withRouter(ShoppingCart)