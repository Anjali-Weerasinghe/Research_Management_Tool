import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './studentNav.css'
import LOGO from '../../Images/RMTlogo.png'


export default class StudentNav extends Component {

    render() {
        return (
            <div>

            

            <section id='st-sec4'>
                <div class="topnav1" >
                    <a href="#"><img src={LOGO} id="Logo1"/></a>
                    <a href="/studentHome/chat" style={{float:"right", marginTop:'0.5cm'}}>Chat Service</a>
                    <a href="/studentHome/ViewSupervisor" style={{float:"right", marginTop:'0.5cm'}}>Request Management</a>
                    <a href="/studentHome/AddGroups" style={{float:"right", marginTop:'0.5cm'}}>Research Group Management</a>
                    <a href="/studentHome/AddResearchTopic" style={{float:"right", marginTop:'0.5cm'}}>Research Topic Management</a>
                </div>
            </section>

            


            </div>
        );
    }
}