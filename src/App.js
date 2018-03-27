import React, { Component } from 'react';
import '../node_modules/spectre.css/dist/spectre.min.css';
import '../node_modules/spectre.css/dist/spectre-icons.css';
import '../node_modules/uikit/dist/css/uikit.min.css';
import './styles1.css';
import './styles.css';
import './landing.css';
// import FormContainer from './containers/FormContainer';
import HomePage from './containers/Home';

class App extends Component {
  render() {
    return (
      <HomePage />
      // {/* <div className="container">
      //   <div className="columns">
      //     <div className="col-lg-9 col-md-12 centered cont">
      //     </div>
      //   </div>
      // </div> */}
    );
  }
}

export default App;
