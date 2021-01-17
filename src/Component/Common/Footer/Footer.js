import React, { Component } from 'react';
import Logo  from  '../../../assets/images/logo-white.png'
import {
    Link
  } from "react-router-dom";

class Footer extends Component {   
    render() {
        
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="effect aeneas">
                                    <div className="buttons">
                                        <a href="https://www.facebook.com/SpacePointe" target="_blank" className="fb" title="Join us on Facebook"><i class="bi bi-facebook" aria-hidden="true"></i></a>
                                        <a href="https://twitter.com/spacepointe" target="_blank" className="tw" title="Join us on Twitter"><i class="bi bi-twitter" aria-hidden="true"></i></a>                                    
                                        <a href="https://www.youtube.com/channel/UCndN1qZBYysoJwbLsIlv4Ew" target="_blank" className="pinterest" title="Join us on Youtube"><i class="bi bi-youtube" aria-hidden="true"></i></a>
                                        <a href="#" target="_blank" className="insta" title="Join us on Instagram"><i class="bi bi-instagram" aria-hidden="true"></i></a>
                                        <a href="#" target="_blank" className="in" title="Join us on Linked In"><i class="bi bi-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <img src={Logo} className="fluid-image w-75 pb-4" alt="logo"/>
                            </div>                            
                            <div className="col-lg-3 col-12">
                                <h6 className="text-uppercase mb-4">Company </h6>
                                <ul>
                                    <li><Link to="/">About us </Link></li>
                                    <li><Link to="/">Contact us </Link></li>
                                    <li><Link to="/">Career</Link></li>
                                    <li><Link to="/">Investor Relations</Link></li>
                                    <li><Link to="/">Partners</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-12">
                                <h6 className="text-uppercase mb-4">SpacePointe Websites </h6>
                                <ul>
                                    <li><a href="https://ekikart.com/" target="_blank">Ekikart </a></li>
                                    <li><a href="https://demandpointe.com/" target="_blank">DemandPointe</a></li>
                                    <li><a href="/" target="_blank">DigiPointe</a></li>
                                    <li><a href="https://kardstash.com/" target="_blank">KardStash </a></li>
                                    <li><a href="https://revenuepointe.com/" target="_blank">RevenuePointe </a></li>
                                    <li><a href="/" target="_blank">TaxiPointe </a></li>
                                    <li><a href="/" target="_blank">TicketPointe </a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-12">
                                <h6 className="text-uppercase mb-4">Other information  </h6>
                                <ul>
                                    <li><Link to="/">Corporate Rules</Link></li>
                                    <li><Link to="/">Privacy Notice</Link></li>
                                    <li><Link to="/">Terms of Use </Link></li>
                                </ul>  
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            )
        }
    }
    
export default Footer