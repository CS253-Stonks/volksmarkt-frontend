import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import { Paper, ButtonBase, Button } from '@mui/material';
import { styled } from "@mui/material/styles";
import FormDialog from "./AddItemModal"
import FormDialog1 from "./EditItemModal"
import { useState } from 'react';


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
								{props.productName}
							</Typography>
							<Typography variant="body2" gutterBottom>
								{props.description}
							</Typography>
						</Grid>
						<Grid item>
						<FormDialog1 itemList={props.itemList} setItemList={props.setItemList} id={props.id} sx={{
							
						}}/>
						<Button 
							variant="outlined"  
							sx={{
                            	marginLeft: '5px',
                            	height: '30px'
                        	}}
						>
                            REMOVE ITEM
                        </Button>
						</Grid>
					</Grid>
					<Grid item marginLeft={4}>
						<Typography variant="subtitle1" component="div">
							{props.price}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
}

export default function SellerDashboard() {

	const foo = [
		{
			"productName": "A",
			"description": "This is near Hall 3",
			"price": 100,
			"id": 1,
		},
		{
			"productName": "B",
			"description": "This is near Hall 3",
			"price": 200,
			"id": 2,
		},
		{
			"productName": "C",
			"description": "This is near Hall 3",
			"price": 300,
			"id": 3,
		},
		{
			"productName": "D",
			"description": "This is near Hall 3",
			"price": 400,
			"id": 4,
		},
	];
	const [itemList, setItemList] = useState(foo);

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

				<FormDialog itemList={itemList} setItemList={setItemList} sx={{
					marginLeft: 50,
				}}/>
				{itemList.map((item) => (
					<ComplexGrid 
						productName = {item.productName}
						description = {item.description}
						price = {item.price}
						id = {item.id}
						itemList = {itemList}
						setItemList = {setItemList}
					/>
				))}

			</Grid>
		</Container>
	)
}