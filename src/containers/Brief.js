import React, { Component } from 'react';
// import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
// import RadioGroup from '../components/RadioGroup';
// import CheckboxGroup from '../components/CheckboxGroup';
// import SingleInput from '../components/SingleInput';
// import SingleInputFeel from '../components/SingleInputFeel';
// import SingleInputAnother from '../components/SingleInputAnother';
// import TextArea from '../components/TextArea';
// import SingleInputData from '../components/SingleInputData';
import NavBar from '../components/NavBar';
import Dropdown from '../components/Dropdown';
import Icon from '../components/Icon';
import logo from './../img/logo.png';
import { Route, Link } from "react-router-dom";
import BriefSite from './BriefSite';
import BriefMobile from './BriefMobile';
// let b;
class Brief extends Component {
   render() {
      return (
         <div>
            <header>
               <div className="uk-container uk-container-expand">
                  <NavBar className="uk-navbar-container uk-visible@m">
                     <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                           <li className="first"><Link to="/"><img src={logo} alt="" /></Link></li>
                        </ul>
                     </div>
                     <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                           <li className="uk-margin-right"><Link to="/" className="home_brief">Home</Link></li>
                           <li className="uk-margin-right"><Link to="/brief" className="mob_brief">Mobile brief</Link></li>
                           <li className="uk-margin-right"><Link to="/brief/:web" className="web_brief">Website brief</Link></li>
                        </ul>
                        <a href="#" className="translate-button" rel="ru">RU</a><span className="slash"> | </span><a href="#" className="translate-button" rel="en">EN</a>
                     </div>
                  </NavBar>
                  <div className="mobile-version uk-hidden@m">
                     <div className="boundary-align">
                        <Icon className="uk-button uk-button-default" type="button"></Icon>
                        <Dropdown className="uk-margin-remove" offset={'5'} mode={'click'}>
                           <ul className="uk-nav uk-dropdown-nav">
                              <li><a href="#service" className="translate">Services</a></li>
                              <li className="uk-nav-divider"></li>
                              <li><a href="#process" className="translate">Process</a></li>
                              <li className="uk-nav-divider"></li>
                              <li><a href="#projects" className="translate">Projects</a></li>
                              <li className="uk-nav-divider"></li>
                              <li className="technologies_head"><a href="#tech" className="translate">Technologies</a></li>
                              <li className="uk-nav-divider"></li>
                              <li className="last"><a href="" className="translate">Get in touch</a></li>
                           </ul>
                        </Dropdown>
                     </div>
                  </div>
               </div>
            </header>
            <Route exact path="/brief/:web" component={BriefSite} />
            <Route exact path="/brief" component={BriefMobile} />
         </div>
      );
   }
}

export default Brief;
