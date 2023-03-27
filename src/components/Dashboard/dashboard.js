import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import shopImage from "./shopImage.jpg";
import { useHistory} from 'react-router-dom';


const getStores = () => {
	return [
		{
			"name": "E-shop",
			"description": "This is near GH",
			"id": 1
		},
		{
			"name": "C-shop",
			"description": "This is also near GH",
			"id": 2
		},
		{
			"name": "Old shop",
			"description": "Everything is near GH",
			"id": 3
		},
		{
			"name": "New shop",
			"description": "GH is at the centre of the universe",
			"id": 4
		},
	]
}



function StoreCard(props) {

	const history = useHistory();

	const linkToShop = () =>{
		history.push('/shop')
	}


	return (
		<Grid item xs={6}>
			<Card>
				<CardActionArea onClick={linkToShop}>
					<CardMedia
						component="img"
						height="140"
						image={shopImage}
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{props.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{props.desc}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>

	);
};

export default function Dashboard() {
	return (
		<Container>
			<Grid container spacing={5} marginTop={5}>
				{getStores().map((store) => (
					<StoreCard name={store.name} desc={store.description} key={store.id}/>
		  		))}
			</Grid>
		</Container>
	)
}