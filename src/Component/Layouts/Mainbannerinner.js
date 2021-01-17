import React, { Component } from 'react';
import AOS from 'aos';

class Mainbannerinner extends Component {
    componentDidMount() {
        AOS.init();
     }
    
    render() {
        return (
            
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel"> 
            <React.Fragment>                    
                <div className="carousel-inner">
                    <div className={`carousel-item active ${this.props.kardstashBannerImg}`}>
                        <img src={this.props.mainBannerImg} className="fluid-image" data-aos="fade-in" alt="" />  
                        <div className="container h-100">            
                        <div className="col-sm-8 offset-sm-2  d-flex flex-row h-100">
                            <div className="carousel-caption position-relative w-100 text-center overlay-data  align-self-center" >
                                <img src={this.props.headinglogo} data-aos="fade-up" data-aos-duration="4000"   alt=""/>
                                <h1 className="mb-4" data-aos="fade-up" data-aos-duration="4000" dangerouslySetInnerHTML={{ __html:this.props.headingProp}}></h1>
                                <p data-aos="fade-up" data-aos-duration="3000" className="mb-0" dangerouslySetInnerHTML={{ __html:this.props.subHeadingProp}}></p>                            
                            </div>
                        </div>
                        </div>  
                    </div>                        
                </div>  
                </React.Fragment>                  
            </div> 
            )
        }
    }
    
export default Mainbannerinner