import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
import Logoblack from '../../../assets/images/logo-black.png';

class Header extends Component {
    
    render() {
        return (
            <div>
                <header> 
                    <nav className="navbar navbar-expand-md navbar-dark shadow-sm fixed-top bg-white py-0">
                        <div className="container">
                            <Link to="/spacepointe" className="navbar-brand  me-md-auto w-25"><img src={Logoblack} className="w-100 py-2" alt="logo"/></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav  mb-2 mb-md-0 w-100 d-flex justify-content-end">
                                <li className="dropdown-mega">
                                <button className="dropbtn">For You  <i className="bi bi-chevron-down"></i>
                                </button>
                                <div className="dropdown-content">                     
                                    <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <ul className="submenu">
                                        <li> <Link to="/kardstash">KardStash</Link></li>
                                        </ul>
                                    </div>                      
                                    </div>
                                </div>
                                </li>
                                <li className="dropdown-mega">
                                <button className="dropbtn">For Businesses <i className="bi bi-chevron-down"></i>
                                </button>
                                <div className="dropdown-content h-120">                     
                                    <div className="row">
                                    <div className="col-lg-2 offset-lg-1">
                                        <ul className="submenu">
                                        <li className="child"> <h6>Point of Sale</h6></li>
                                        <li className="child"> <Link to="/ekikart">Ekikart</Link></li>
                                        </ul>                        
                                    </div>                                   
                                    <div className="col-lg-2">
                                        <ul className="submenu">
                                        <li> <h6>Retail Loyalty</h6></li>
                                        <li className="child"> <Link to="/kardstashloyalty">KardStash</Link></li>
                                        </ul>                        
                                    </div>
                                    <div className="col-lg-2">
                                        <ul className="submenu">
                                        <li> <h6>Digital Content</h6></li>
                                        <li className="child"> <Link to="/digipointe">Digipointe</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-2">
                                        <ul className="submenu">
                                        <li> <h6>Hospitality</h6></li>
                                        <li className="child"> <Link to="/ticketpointe">Ticketpointe</Link></li>
                                        </ul>
                                    </div> 
                                    <div className="col-lg-2">
                                        <ul className="submenu">
                                        <li> <h6>Transport</h6></li>
                                        <li className="child"> <Link to="/taxipointe">Taxipointe</Link></li>
                                        </ul>
                                    </div>
                                                        
                                    </div>
                                </div>
                                </li> 
                                <li className="dropdown-mega">
                                <button className="dropbtn">For Governments <i className="bi bi-chevron-down"></i>
                                </button>
                                <div className="dropdown-content">                     
                                    <div className="row">
                                    <div className="col-lg-2 offset-lg-5">
                                        <ul className="submenu">
                                        <li>  <Link to="/demandpointe">Demandpointe</Link></li>
                                        </ul>
                                        
                                    </div>                      
                                    <div className="col-lg-2">
                                        <ul className="submenu">
                                        <li>  <Link to="/revenuepointe">Revenuepointe</Link></li>
                                        </ul>
                                    </div> 
                                    </div>
                                </div>
                                </li> 
                            </ul>                        
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
            )
        }
    }
    
export default Header