import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import Signup from './SignUp';
import NavBar from './components/Navbar/navbar';
import Dashboard from './components/Dashboard/dashboard';
function App() {
  return (
    <>
    <NavBar />
    <Router>
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
    </Switch>
    </Router>
    </>
  );
}

export default App;
