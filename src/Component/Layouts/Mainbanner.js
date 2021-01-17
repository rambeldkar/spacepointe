import React, { Component } from 'react';
import AOS from 'aos';

class Mainbanner extends Component {
    componentDidMount() {
        AOS.init();
     }
    
    render() {
        return (
            
            <div  className="carousel slide"> 
            <React.Fragment>                    
                <div className="carousel-inner">
                    <div className={`carousel-item active ${this.props.kardstashBannerImg}`}>
                        <img src={this.props.mainBannerImg} className="fluid-image" data-aos="fade-in" alt="" />                
                        <div className="container d-flex flex-row h-100">
                            <div className="carousel-caption position-relative w-75 text-start  align-self-center">
                                <h1 className="mb-4" data-aos="fade-up" data-aos-duration="4000" dangerouslySetInnerHTML={{ __html:this.props.headingProp}}></h1>
                                <p data-aos="fade-up" data-aos-duration="3000">{this.props.subHeadingProp}<br/>{this.props.thirdSubHeadingProp}</p>                            
                            </div>
                        </div>
                    </div>                        
                </div>  
                </React.Fragment>                  
            </div> 
            )
        }
    }
    
export default Mainbanner