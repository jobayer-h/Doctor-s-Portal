import './App.css';
import Home from './components/Homepage/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Loginpage/Login';
import { createContext, useState } from 'react';




export const userContext = createContext()

function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({})

console.log(loggedInUser.email);

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router >
  <h1>Loggedin User: {loggedInUser.displayName}</h1>
    </userContext.Provider>
  );
}

export default App;
