import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import Signup from './SignUp';
import NavBar from './components/Navbar/navbar';
import Dashboard from './components/Dashboard/dashboard';
import SellerSignIn from './SellerSignIn';
import SellerSignUp from './SellerSignUp';
import SellerDashboard from './components/Dashboard/SellerDashboard';
import ShoppingCart from './ShoppingCart';
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
        <Route exact path='/seller/'>
          <SellerDashboard />
        </Route>
        <Route exact path='/cart/'>
          <ShoppingCart />
        </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
