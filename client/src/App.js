import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './layout/navbar/Navbar';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Sign_In from './pages/sign_in/Sign_In';
import Footer from './layout/footer/Footer';

import './app.css';


const App = () => {
  return (
    <div className='app bg-light'>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/sign-in' component={Sign_In} />
        <Route exact path='/register' component={Register} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
