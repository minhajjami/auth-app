import React from 'react'
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Login from './Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import ForgetPassword from './ForgetPassword';

function App() {
  return (

    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard}/>
              <Route path='/signup' component={SignUp} />
              <Route path='/login' component={Login} />
              <Route path='/forget-password' component={ForgetPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
