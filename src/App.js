import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';



import Header from './components/all-header/header/header.component';
import HomePage from './pages/home/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up-page';
import BookingPage from './pages/booking-page/booking-page';
import EditProfile from './pages/edit-profile/edit-profile.component';
import AccountPage from './pages/my-account-page/account-page.component';









class App extends React.Component {
  render() {
    return (
      <div> 
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/sigin-signup' component={SignInAndSignUpPage} />
            <Route exact path='/bookride' component={BookingPage} />
            <Route exact path='/editprofile' component={EditProfile} />
            <Route exact path='/my-account' component={AccountPage} />
          </Switch>
      </div>
    );    
  }
}

export default App;
