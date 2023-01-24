import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Image1 from '../../Images/RMT3.jpg';

import './home.css'


export default class Home extends Component {

    render() {
        return (
            <div>

            <section>
                <nav class="navbar navbar-default" id='sec1'>
                    <div class="container-fluid">
                        <div class="navbar-header">
                            {/* <div class="navbar-brand">
                                <img src={Image1} className="home-image1" />
                            </div> */}
                            
                            <div>
                                <span className='home-text1'>RRESEARCH MANAGEMENT TOOL</span>

                                <div id='login'>
                                <div id='btnlg1'>
                                    <Link className="Register-btn"  to="/register"> Register</Link>
                                </div>

                                <div id='btnlg2'>
                                    <Link className="login-btn" to="/login">Login</Link>
                                </div>
                            </div>
                            </div>

                            
      
                        </div>
                    </div>
                </nav>
            </section>

            <section id='sec4'>
                <div class="topnav">
                    <a class="active" href="#home">Home</a>
                    <a href="/studentHome/ViewCoSupervisor" style={{float:"right"}}>News</a>
                    <a href="#contact" style={{float:"right"}}>Contact Us</a>
                    <a href="#about" style={{float:"right"}}>About Us</a>
                </div>
            </section>

            <section id='sec3'>
                <img src={Image1} className="image-banner" alt="Responsive image" />
            </section>

            <section id='sec5'>
                <div>
                    <h1 id='text-home1'>Research Planner -2022</h1>
                </div>
                
            </section>



            </div>
        );
    }
}