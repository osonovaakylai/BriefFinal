import React, { Component } from 'react';
// import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
// import RadioGroup from '../components/RadioGroup';
// import CheckboxGroup from '../components/CheckboxGroup';
// import SingleInput from '../components/SingleInput';
// import SingleInputFeel from '../components/SingleInputFeel';
// import SingleInputAnother from '../components/SingleInputAnother';
// import TextArea from '../components/TextArea';
// import SingleInputData from '../components/SingleInputData';
// import NavBar from '../components/NavBar';
// import Dropdown from '../components/Dropdown';
// import Icon from '../components/Icon';
// import logo from './../img/logo.png';
// import { Route, Link } from "react-router-dom";
import { Route } from "react-router-dom";
import BriefSite from './BriefSite';
import BriefMobile from './BriefMobile';
// let b;
class Brief extends Component {
   render() {
      return (
         <div>
            <Route exact path="/brief/web" component={BriefSite} />
            <Route exact path="/brief" component={BriefMobile} />
         </div>
      );
   }
}

export default Brief;
