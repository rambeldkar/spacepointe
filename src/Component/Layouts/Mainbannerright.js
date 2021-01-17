import React, { Component } from 'react';
import AOS from 'aos';

class Mainbannerright extends Component {
    componentDidMount() {
        AOS.init();
     }
    
    render() {
        return (
            
            <div  className="carousel slide bannerright-section">  
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={this.props.mainBannerImg} className="fluid-image" data-aos="fade-in" alt="" />                
                        <div className="container d-flex justify-content-end flex-row h-100">
                            <div className="col-lg-5 col-12 carousel-caption overlay-data position-relative  text-start  align-self-center">
                                <div class="br-normal-top" data-aos="fade-left" data-aos-duration="8000"></div>
                                <h2 className="mb-4" data-aos="fade-up" data-aos-duration="4000" dangerouslySetInnerHTML={{ __html:this.props.headingProp}}></h2>
                                <p data-aos="fade-up" data-aos-duration="3000">{this.props.subHeadingProp}<br/>{this.props.thirdSubHeadingProp}</p>                            
                            </div>
                        </div>
                    </div>                        
                </div>              
            </div> 
            )
        }
    }
    
export default Mainbannerright