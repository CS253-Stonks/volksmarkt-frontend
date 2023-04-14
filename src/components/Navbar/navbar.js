import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/Menu'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import { useHistory, withRouter } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Badge } from '@mui/material'
import { styled } from '@mui/material/styles'
import MailIcon from '@mui/icons-material/Mail'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useLocation } from 'react-router-dom'


const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}))



function NavBar() {
	const history = useHistory();
	const openSide = (text) => {
		console.log("openside")
		console.log(text);
		if(text === 'Cart') history.push('/cart/')
		else if(text === 'Log Out'){
			console.log("there")
			localStorage.removeItem('first_name')
			localStorage.removeItem('last_name')
			history.push('/')
		}
		else if(text === 'Home'){
			history.push('/')
		}
		else if(text === 'My Orders'){
			history.push('/MyOrders/')
		}
	}
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

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{['Home', 'My Orders', 'Cart', 'Log Out'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton onClick={() => openSide(text)}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			{/* <List>
				{['Log Out'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon onClick={() => {
								console.log("called")
								openSide(text)
							}}>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List> */}
		</Box>
	)



	const handleLogin = () => {
		history.push("/SignIn")
	}
	const handleLoginSeller = () => {
		history.push('/seller/SignIn')
	}
	const movetoCart = () => {
		history.push('/cart/')
	}
	const moveToMyOrders = () => {
		history.push('/MyOrders');
	}
	const RightSide = (type) => {
		if(localStorage.getItem('first_name') === null){
			if(type === 'Seller'){
				return (
					<Button color="inherit" onClick={handleLoginSeller} sx={{ marginX: 2 }}>Login</Button>
				)
			}
			else{
				return (
					<Button color="inherit" onClick={handleLogin} sx={{ marginX: 2 }}>Login</Button>
				)
			}
		}
		else{
			return (
				<Button color="inherit" onClick = {moveToMyOrders} sx={{ marginX: 2 }}>{localStorage.getItem('first_name') + ' ' + localStorage.getItem('last_name')}</Button>
			)
		}
	}
	const CartButton = () => {
		return (
			<IconButton onClick={movetoCart}>
				<StyledBadge badgeContent={0} color="secondary">
					<ShoppingCartIcon />
				</StyledBadge>
			</IconButton>
		)
	}
	const anchor = 'left'
	let location = useLocation()
	const heading1 = location.pathname.substring(1)
	const heading = (heading1.substring(0, 4)==="shop" ? "Shop" : heading1.charAt(0).toUpperCase() + heading1.slice(1))

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={toggleDrawer(anchor, true)}
					>
						<MenuIcon />
					</IconButton>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
					<Switch>
						<Route exact path="/">
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								Dashboard
							</Typography>
							<CartButton />
							{RightSide('Buyer')}
						</Route>
						<Route exact path="/SignIn">
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								Sign In
							</Typography>
						</Route>
						<Route exact path="/SignUp">
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								Sign Up
							</Typography>
							<CartButton />
							{RightSide('buyer')}
							{/* <Button color="inherit" onClick={handleLogin} sx={{ marginX: 2 }}>Login</Button> */}
						</Route>
						<Route exact path='/seller/SignIn'>
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								Seller Sign In
							</Typography>
						</Route>
						<Route exact path='/seller/SignUp'>
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								Seller Sign Up
							</Typography>
							{RightSide('Seller')}
							{/* <Button color="inherit" onClick={handleLoginSeller} sx={{ marginX: 2 }}>Login</Button> */}
						</Route>
						<Route exact path='/seller/'>
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								Seller Dashboard
							</Typography>
							{RightSide('Seller')}
							{/* <Button color="inherit" onClick={handleLoginSeller} sx={{ marginX: 2 }}>Login</Button> */}
						</Route>
						<Route path='/'>
							{heading}
						</Route>
					</Switch>

				</Toolbar>
			</AppBar>
		</Box>
	)
}
export default withRouter(NavBar)