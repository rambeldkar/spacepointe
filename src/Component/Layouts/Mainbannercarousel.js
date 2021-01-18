import React, { Component } from 'react';
import AOS from 'aos';
import carousel from '../../../node_modules/bootstrap/js/dist/carousel'

class Mainbannercarousel extends Component {
    componentDidMount() {
        AOS.init();
    }

    render() {
        return (
            <div id="carouselHome" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#carouselHome" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#carouselHome" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselHome" data-bs-slide-to="2"></li>
                    <li data-bs-target="#carouselHome" data-bs-slide-to="3"></li>
                    <li data-bs-target="#carouselHome" data-bs-slide-to="4"></li>
                    <li data-bs-target="#carouselHome" data-bs-slide-to="5"></li>
                    <li data-bs-target="#carouselHome" data-bs-slide-to="6"></li>
                    <li data-bs-target="#carouselHome" data-bs-slide-to="7"></li>
                </ol>
                <div class="carousel-inner bannercarousel-section" >
                    <div class="carousel-item active"  data-aos-duration="4000">
                        <img src={ this.props.mainBannerslide1Img } class="d-block w-100" alt="..."/>
                        <div className = "container d-flex flex-row h-100">
                            <div className = "col-lg-5 col-12 carousel-caption  overlay-data position-relative  text-start  align-self-center" >
                                <div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div>
                                <h2 className="mb-4" data-aos="fade-up" data-aos-duration="4000" dangerouslySetInnerHTML={{ __html:this.props.headingslide1Props}}></h2>  
                            </div> 
                        </div> 
                    </div>
                    <div class="carousel-item ">
                        <img src={ this.props.mainBannerslide2Img } class="d-block w-100" alt="..."/>
                        <div className = "container d-flex flex-row h-100">
                            <div className = "col-lg-5 col-12 carousel-caption overlay-data position-relative  text-start  align-self-center">
                                <div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div>
                                <h2 className="mb-4" data-aos="fade-up" data-aos-duration="4000" dangerouslySetInnerHTML={{ __html:this.props.headingslide2Props}}></h2>  
                            </div> 
                        </div> 
                    </div>
                    <div class="carousel-item ">
                        <img src={ this.props.mainBannerslide3Img } class="d-block w-100" alt="..."/>
                        <div className = "container d-flex flex-row h-100">
                            <div className = "col-lg-5 col-12 carousel-caption overlay-data position-relative  text-start  align-self-center">
                                <div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div>
                                <h2 className="mb-4" data-aos="fade-up" data-aos-duration="4000" dangerouslySetInnerHTML={{ __html:this.props.headingslide3Props}}></h2>   
                            </div> 
                        </div> 
                    </div>  
                    <div class="carousel-item ">
                        <img src={ this.props.mainBannerslide4Img } class="d-block w-100" alt="..."/>
                        <div className = "container d-flex flex-row h-100">
                            <div className = "col-lg-5 col-12 carousel-caption overlay-data position-relative  text-start  align-self-center">
                                <div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div>
                                <h2 className="mb-4" data-aos="fade-up" data-aos-duration="4000" dangerouslySetInnerHTML={{ __html:this.props.headingslide4Props}}></h2> 
                            </div> 
                        </div> 
                    </div>
                    <div class="carousel-item ">
                        <img src={ this.props.mainBannerslide5Img } class="d-block w-100" alt="..."/>
                        <div className = "container d-flex flex-row h-100">
                            <div className = "col-lg-5 col-12 carousel-caption overlay-data position-relative  text-start  align-self-center">
                                <div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div>
                                <h2 className="mb-4" data-aos="fade-up" data-aos-duration="4000" dangerouslySetInnerHTML={{ __html:this.props.headingslide5Props}}></h2> 
                            </div> 
                        </div> 
                    </div>
                    <div class="carousel-item ">
                        <img src={ this.props.mainBannerslide6Img } class="d-block w-100" alt="..."/>
                        <div className = "container d-flex flex-row h-100">
                            <div className = "col-lg-5 col-12 carousel-caption overlay-data position-relative  text-start  align-self-center">
                                <div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div>
                                <h2 className="mb-4" data-aos="fade-up" data-aos-duration="4000" dangerouslySetInnerHTML={{ __html:this.props.headingslide6Props}}></h2> 
                            </div> 
                        </div> 
                    </div>
                    <div class="carousel-item ">
                        <img src={ this.props.mainBannerslide7Img } class="d-block w-100" alt="..."/>
                        <div className = "container d-flex flex-row h-100">
                            <div className = "col-lg-5 col-12 carousel-caption overlay-data position-relative  text-start  align-self-center">
                                <div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div>
                                <h2 className="mb-4" data-aos="fade-up" data-aos-duration="4000" dangerouslySetInnerHTML={{ __html:this.props.headingslide7Props}}></h2> 
                            </div> 
                        </div> 
                    </div>
                    <div class="carousel-item ">
                        <img src={ this.props.mainBannerslide8Img } class="d-block w-100" alt="..."/>
                        <div className = "container d-flex flex-row h-100">
                            <div className = "col-lg-5 col-12 carousel-caption overlay-data position-relative  text-start  align-self-center">
                                <div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div>
                                <h2 className="mb-4" data-aos="fade-up" data-aos-duration="4000" dangerouslySetInnerHTML={{ __html:this.props.headingslide8Props}}></h2> 
                            </div> 
                        </div> 
                    </div>                    
                </div>                
            </div>
        )
    }
}

export default Mainbannercarousel