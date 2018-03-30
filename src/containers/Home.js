import React, { Component } from 'react';
import web from './../img/svg/web.svg';
import app from './../img/svg/app.svg';
import xd from './../img/svg/xd.svg';
import network from './../img/svg/network.svg';
import game from './../img/svg/game.svg';
import project from './../img/svg/project.svg';
import idea from './../img/svg/idea.svg';
import ux from './../img/svg/ux.svg';
import launch from './../img/svg/launch.svg';
import four from './../img/svg/4.svg';
import two from './../img/svg/2.svg';
import three from './../img/svg/3.svg';
import one from './../img/svg/1.svg';
import a from './../img/svg/a.svg';
import kotlin from './../img/svg/kotlin.svg';
import java from './../img/svg/java.svg';
import js from './../img/svg/js.svg';
import xcode from './../img/svg/xcode.svg';
import swift from './../img/svg/swift.svg';
import google from './../img/svg/google.svg';
import fire from './../img/svg/fire.svg';
import git from './../img/png/git.png';
import node from './../img/svg/node.svg';
import docker from './../img/png/docker.png';
import max from './../img/png/max.png';
import Grid from '../components/Grid';
import logo from './../img/logo.png';
import NavBar from '../components/NavBar';
import Sticky from '../components/Sticky';
import Dropdown from '../components/Dropdown';
import Icon from '../components/Icon';
import {Link} from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div>
            <Sticky>
            <header>
              <div className="uk-container uk-container-expand">
                <NavBar className="uk-navbar-container uk-visible@m">
                  <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                    <li className="first"><Link to="/"><img src={logo} alt=""/></Link></li>
                    </ul>
                  </div>
                  <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                      <li>
                        <a href="#service" className="translate">Services</a>
                      </li>
                      <li><a href="#process" className="translate">Process</a></li>
                      <li><a href="#projects" className="translate">Projects</a></li>
                      <li className="uk-margin-right"><a href="#tech" className="translate technologies_head">Technologies</a></li>
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
          </Sticky>
                <section className="banner" id="process">
                    <div className="uk-background-cover uk-background-fixed uk-height-large-l uk-panel uk-flex uk-flex-center uk-flex-middle banner_div">
                        <div className="uk-text-center">
                            <h1 className="com-header translate">Technological solutions that suit you</h1>
                            <p className="com-text translate">Results-driven. Timely. Affordable.</p>
                            <div className="uk-margin-large-top"></div><a className="go translate" href="#scroll-down" >Let's go</a>
                        </div>
                    </div>
                </section>
                <section className="technologies" id="service">
                    <div className="uk-text-center">
                        <h2 className="com-header translate">We have a proven track record</h2>
                        <p className="com-text translate">From product development process to building <br /> the right business model</p>
                    </div>
                    <div className="uk-container uk-container-smaller">
                        <Grid className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-1" uk-grid="">
                            <div>
                                <div className="uk-card uk-box-shadow-hover-xlarge">
                                    <div className="img uk-cover-container">
                                        <img src={web} alt="" />
                                    </div>
                                    <div className="text uk-text-center">
                                        <p className="about translate">Websites, landing pages, e-commerce platforms, and web applications of any complexity.</p>
                                        <p className="com-text translate">Web applications</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-box-shadow-hover-xlarge">
                                    <div className="img uk-cover-container">
                                        <img src={app} alt="" />
                                    </div>
                                    <div className="text uk-text-center">
                                        <p className="about translate">Messengers, location based applications, corporate and business tools and services.</p>
                                        <p className="com-text translate">iOS & Android</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-box-shadow-hover-xlarge">
                                    <div className="img uk-cover-container">
                                        <img src={xd} alt="" />
                                    </div>
                                    <div className="text uk-text-center">
                                        <p className="about translate">Visual prototype of your product, including the user experience and interface.</p>
                                        <p className="com-text translate">UX / UI Design</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-box-shadow-hover-xlarge">
                                    <div className="img uk-cover-container"><img src={network} alt="" />
                                    </div>
                                    <div className="text uk-text-center">
                                        <p className="about translate">Social network supporting services including chat bots.</p>
                                        <p className="com-text translate">Chat bots and more</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-box-shadow-hover-xlarge">
                                    <div className="img uk-cover-container"><img src={game} alt="" />
                                    </div>
                                    <div className="text uk-text-center">
                                        <p className="about translate">Mobile games for iOS and Android platforms.</p>
                                        <p className="com-text translate">Mobile Games</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-box-shadow-hover-xlarge">
                                    <div className="img uk-cover-container"><img src={project} alt="" />
                                    </div>
                                    <div className="text uk-text-center">
                                        <p className="about translate">Individual product ideas that were not described in this section.</p>
                                        <p className="com-text translate">Individual Projects</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </div>
                </section>
                <section className="how-we-work">
                    <div className="uk-text-center">
                        <h2 className="com-header translate">How Do We Work</h2>
                        <p className="com-text translate">We have a clear steps to turn your idea into a working product</p>
                    </div>
                    <div className="uk-container uk-container-smaller">
                        <Grid className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-1">
                            <div>
                                <div className="uk-card uk-box-shadow-hover-xlarge">
                                    <div className="img uk-cover-container"><img src={idea} alt="" />
                                    </div>
                                    <div className="text uk-text-center">
                                        <p className="com-text translate">Idea</p>
                                        <p className="about translate">Tell us your idea that you have on your mind.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-box-shadow-hover-xlarge">
                                    <div className="img uk-cover-container"><img src={ux} alt="" />
                                    </div>
                                    <div className="text uk-text-center">
                                        <p className="com-text translate">UX/UI interface</p>
                                        <p className="about translate">We design a wireframe prototype of your product and if you are happy with it, we will create design.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-box-shadow-hover-xlarge">
                                    <div className="img uk-cover-container"><img src={launch} alt="" />
                                    </div>
                                    <div className="text uk-text-center">
                                        <p className="com-text translate">Product</p>
                                        <p className="about translate">We identify the technologies that fit best to turn your idea into a real product.</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </div>
                </section>
                <section className="projects" id="projects">
                    <div className="uk-text-center">
                        <h2 className="com-header translate">Highlighted projects</h2>
                        <p className="com-text translate">Some of our recent products</p>
                    </div>
                    <div className="uk-container uk-container-smaller">
                        <Grid className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-4@m uk-child-width-1-2@s uk-child-width-1-1">
                            <div>
                                <div className="uk-card uk-box-shadow-hover-xlarge"><a href="http://namba.one/" target="_blank">
                                    <div className="img uk-cover-container"><img src={four} alt="" />
                                    </div>
                                    <div className="text uk-text-center">
                                        <p className="com-text translate">Location based social network</p>
                                    </div></a></div>
                            </div>
                            <div>
                                <div className="uk-card uk-box-shadow-hover-xlarge"><a href="https://www.getmitty.com/" target="_blank">
                                    <div className="img uk-cover-container"><img src={three} alt="" />
                                    </div>
                                    <div className="text uk-text-center">
                                        <p className="com-text translate">All in one app for travellers</p>
                                    </div></a></div>
                            </div>
                            <div>
                                <div className="uk-card uk-box-shadow-hover-xlarge"><a href="https://play.google.com/store/apps/details?id=kg.vain.warcars" target="_blank">
                                    <div className="img uk-cover-container"><img src={two} alt="" />
                                    </div>
                                    <div className="text uk-text-center">
                                        <p className="com-text translate">Action mobile game</p>
                                    </div></a></div>
                            </div>
                            <div>
                                <div className="uk-card uk-box-shadow-hover-xlarge"><a href="https://be.kg/" target="_blank">
                                    <div className="img uk-cover-container"><img src={one} alt="" />
                                    </div>
                                    <div className="text uk-text-center">
                                        <p className="com-text translate" >Special Deals sercvice</p>
                                    </div></a></div>
                            </div>
                        </Grid>
                    </div>
                </section>
                <section className="tech" id="tech">
                    <div className="uk-text-center">
                        <h2 className="com-header translate">Technologies</h2>
                        <p className="com-text translate">We use technologies that help you scale and cut <br /> extra infrastructure costs.</p>
                    </div>
                    <div className="uk-container uk-container-smaller">
                        <Grid className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-4@m uk-child-width-1-2@s uk-child-width-1-2">
                            <div>
                                <div className="uk-card">
                                    <div className="img uk-cover-container"><img src={a} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div className="img uk-cover-container"><img src={kotlin} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div className="img uk-cover-container"><img src={java} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div className="img uk-cover-container"><img src={js} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div className="img uk-cover-container"><img src={xcode} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div className="img uk-cover-container"><img src={swift} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div className="img uk-cover-container"><img src={google} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div className="img uk-cover-container"><img src={fire} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div className="img uk-cover-container"><img src={git} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div className="img uk-cover-container"><img src={node} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div className="img"><img src={docker} alt="" className="img_item" /></div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div className="img"><img src={max} alt="" className="img_item" /></div>
                                </div>
                            </div>
                        </Grid>
                    </div>
                </section>
                <section className="your-idea" id="scroll-down">
                    <div className="uk-text-center">
                        <h2 className="com-header translate">Tell us more about your idea or <br /> project.</h2>
                        <p className="com-text translate">Send us an enquiry, so that we can arrange a <br /> quick video call and get started.</p>
                    </div>
                    <div className="uk-container uk-container-xsmall uk-text-center">
                        <form className="uk-margin-large-top" action="mailto:a.sadraliev@gmail.com">
                            <div className="uk-margin">
                                <label htmlFor="name" className="translate">Name</label>
                                <input className="uk-input uk-input-default" type="text" id="name" />
                            </div>
                            <div className="uk-margin">
                                <label htmlFor="email" className="translate">Email Address</label>
                                <input className="uk-input uk-input-default" type="email" id="email" />
                            </div>
                            <div className="uk-margin">
                                <label htmlFor="phone" className="translate">Phone Number</label>
                                <input className="uk-input uk-input-default" type="phone" id="phone" />
                            </div>
                            <div className="uk-margin">
                                <label htmlFor="descript" className="translate">Description of your project</label>
                                <textarea className="uk-textarea" id="descript" name="" cols="10" rows="10"></textarea>
                            </div>
                            <div className="uk-margin">
                                <input className="uk-button uk-button-default" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage;