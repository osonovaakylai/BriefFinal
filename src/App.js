import React, { Component } from 'react';
import '../node_modules/spectre.css/dist/spectre.min.css';
import '../node_modules/spectre.css/dist/spectre-icons.css';
import '../node_modules/uikit/dist/css/uikit.min.css';
import './styles_media.css';
import './styles.css';
import './landing.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './containers/Home';
import BriefMobile from './containers/BriefMobile';
import { Route } from 'react-router-dom';
import Grid from './components/Grid';
import logo from './img/logo.png';
import BriefSite from './containers/BriefSite';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/brief" component={() => <BriefMobile />} />
          <Route exact path="/brief-web" component={() => <BriefSite />} />
          <footer>
            <div className="uk-container uk-container-expand">
              <Grid className="uk-grid uk-grid-match">
                <div className="logo uk-width-1-5@m uk-width-1-2@s uk-width-1-1"><a href="index.html"><img src={logo} alt="" /></a></div>
                <div className="item uk-width-3-5@s"></div>
                <div className="item uk-text-right uk-width-auto@m uk-width-1-2@s uk-width-1-1">
                  <div className="address">
                    <p className="com-text uk-margin-remove-bottom translate">Reach out</p><a href="mailto:hello@nambasoft.com">hello@nambasoft.com</a><br /><a href="tel:+996 553 03 30 00">+996 553 03 30 00</a>
                    <div className="uk-margin-top"></div>
                    <p className="com-text uk-margin-remove-bottom translate">Location</p><a href="https://www.google.com/maps/place/66+Kalyk+Akiev+St+Bishkek+723000+Kyrgyzstan" target="_blank">66 Kalyk Akiev St <br />Bishkek 723000 Kyrgyztan</a>
                  </div>
                </div>
              </Grid>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}
export default App;
