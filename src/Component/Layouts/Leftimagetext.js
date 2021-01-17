import React, { Component } from 'react';
import AOS from 'aos';

class Leftimagetext extends Component {
    componentDidMount() {
        AOS.init();
     }
    
    render() {
        return (
            <div className="container py--8 leftimagetext-section">      
                <div className="row featurette">
                    <div className="col-md-6 order-md-2 align-self-center p-5">
                        <div  data-aos="fade-up" data-aos-duration="4000" dangerouslySetInnerHTML={{ __html:this.props.leftDescriptionProp}}></div>
                    </div>
                    <div className="col-md-6 order-md-1">
                        <img src={this.props.leftImgProp} data-aos="flip-right" className="fluid-image shadow-sm h-100 w-100" alt=""/>          
                    </div>
                </div>
            </div>     
            )
        }
    }
    
export default Leftimagetext