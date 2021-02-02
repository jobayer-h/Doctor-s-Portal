import './App.css';
import Home from './components/Homepage/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Loginpage/Login';
import { createContext, useState } from 'react';
import Appoinment from './components/Appoinmentpage/Appoinment';
import PriveteRoute from './components/Loginpage/PrivateRoute';




export const userContext = createContext()

function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({})

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
        <PriveteRoute path="/appoinment">
          <Appoinment />
        </PriveteRoute>
      </Switch>
    </Router >
  <h1>Loggedin User: {loggedInUser.displayName}</h1>
    </userContext.Provider>
  );
}

export default App;
