import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory, withRouter } from 'react-router-dom';
function NavBar() {

  const history = useHistory();

  const handleLogin = () => {
    console.log("hello" , history)
    history.push("/SignIn");
  }
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
          >
            <MenuIcon />
          </IconButton>
            <Switch>
              <Route exact path="/">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Dashboard
                </Typography>
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
              </Route>
            </Switch>
          <Button color="inherit" onClick={handleLogin}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default withRouter(NavBar)