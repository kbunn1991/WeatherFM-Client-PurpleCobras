import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import RegistrationPage from './registration-page';
import Discover from './discover';
import { refreshAuthToken } from '../actions/auth';
import PlaylistPage from './playlist-page';
// import { fetchWeather } from '../actions/weather';
import Playlist from './playlist';
import Onboarding from './onboarding';
import {wakeUp} from '../actions/wake-up';
import '../css/app.css';

export class App extends React.Component {
  componentDidMount(){
    wakeUp();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }

  // getLocation() {
  //   let latitude, longitude;
  //   const { dispatch } = this.props;
  //   if ('geolocation' in navigator) {
  //     /* geolocation is available */
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       latitude = position.coords.latitude;
  //       longitude = position.coords.longitude;
  //       dispatch(fetchWeather(latitude, longitude, '_'));
  //     });
  //   } else {
  //     /* geolocation IS NOT available */
  //     console.log('geolocation is not available');
  //     alert("Location not provided; defaulting to Sunny Weather.")
  //   }
  // }

  render() {
    return (
      <main className="app">
        <Route exact path="/(discover|playlists)/" component={HeaderBar} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/onboarding" component={Onboarding} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/playlists" component={PlaylistPage} />
        <Route exact path="/playlist/:name" component={HeaderBar} />
        <Route exact path="/playlist/:name" component={Playlist} />
        <Route exact path="/register" component={RegistrationPage} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
