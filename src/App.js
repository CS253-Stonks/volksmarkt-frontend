import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import Signup from './SignUp';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
        </Route>
        <Route exact path='/SignIn'>
          <SignIn />
        </Route>
        <Route exact path='/SignUp'>
          <Signup />
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
