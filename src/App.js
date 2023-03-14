import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import Signup from './SignUp';
import NavBar from './components/Navbar/navbar';
import Dashboard from './components/Dashboard/dashboard';
import SellerSignIn from './SellerSignIn';
import SellerSignUp from './SellerSignUp';
function App() {
  return (
    <>
    <Router>
    <NavBar />
      <Switch>
        <Route exact path='/'>
        <Dashboard />
        </Route>
        <Route exact path='/SignIn'>
          <SignIn />
        </Route>
        <Route exact path='/SignUp'>
          <Signup />
        </Route>
        <Route exact path='/seller/SignIn'>
          <SellerSignIn />
        </Route>
        <Route exact path='/seller/SignUp'>
          <SellerSignUp />
        </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
