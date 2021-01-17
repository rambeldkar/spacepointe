import React, { Component } from 'react';
import AOS from 'aos';

class Rightimagetext extends Component {
    componentDidMount() {
        AOS.init();
     }
    
    render() {
        return (            
            <div className="container-fluid py--8 rightimagetext-section ">  
                <div className="container">    
                    <div className="row featurette">
                        <div className="col-md-6  align-self-center ">
                            <div className="text-white" data-aos="fade-up" data-aos-duration="4000" dangerouslySetInnerHTML={{ __html:this.props.rightDescriptionProp}}></div>                          
                        </div>
                        <div className="col-md-6 order-md-1 px-5">
                            <img src={this.props.rightImgProp} data-aos="flip-right" className="fluid-image h-100 w-100 shadow-sm" alt=""/>          
                        </div>
                    </div>
                </div>
            </div>     
            )
        }
    }
    
export default Rightimagetext