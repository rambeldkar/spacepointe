import React, { Component } from 'react';
import AOS from 'aos';
import Revenuepointelogo from '../../assets/images/revenuepointe-logo.png'
import Revenuepointebg from '../../assets/images/revenuepointe-bg.jpg'
import Revenuepointe1 from '../../assets/images/revenuepointe-1.jpg'
import Revenuepointe2 from '../../assets/images/revenuepointe-2.jpg'
import Mainbannerinner from '../Layouts/Mainbannerinner'
import Leftimagetext from '../Layouts/Leftimagetext'
import Rightimagetext from '../Layouts/Rightimagetext'

class Revenuepointe extends Component {
    componentDidMount() {
        AOS.init();
    }    
    render() {
        const headinglogo = Revenuepointelogo;
        const subHeadingProp = '<strong>RevenuePointe</strong> is designed specifically for revenue collection for Government Ministries, Departments and Agencies at Federal, State and Local Government levels.';
        const mainBannerImg = Revenuepointebg;
        const leftDescriptionProp = '<div class="br-color-top" data-aos="fade-left" data-aos-duration="8000"></div><h2 class="pb-1">REVENUE AUTOMATION HAS NEVER BEEN EASIER</h2><p>Our Revenue management System and Payment solution platform enables revenue automation across different government ministries.</p><h2 class="pt-4 pb-1">SMART TOOLS</h2><p>RevenuePointe has features and tools that provides real-time visibility for all parties involved. The smart dashboard provides a comprehensive report of all transactions made including cash, credit card and cashless payments.</p>';
        const leftImgProp = Revenuepointe1;
        const rightDescriptionProp = '<div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div><h2 class="pb-1">SERVING GOVERNMENT AGENCIES EFFECTIVELY</h2><p>Government agencies and companies trust RevenuePointe to effectively deliver on revenue collection and create a system of trust, transparency and reliability.</p><h2 class="pt-4 pb-1">SIMPLIFIED PAYMENT CHANNELS</h2><p>The platform offers flexible payment channels which makes it easier to make payments. It also provides a range of payment channels to simplify making payments.</p><div class="col-sm-12 pt-4"><a href="#" class="btn btn-info buttonc-white">Learn More</a></div>';
        const rightImgProp = Revenuepointe2;
        return (
            <div>
                <main>      
                    <Mainbannerinner headinglogo={headinglogo}   subHeadingProp={subHeadingProp}  mainBannerImg={mainBannerImg} />                    
                    <Leftimagetext    leftImgProp={leftImgProp} leftDescriptionProp={leftDescriptionProp}/>
                    <Rightimagetext   rightImgProp={rightImgProp} rightDescriptionProp={rightDescriptionProp} />
                </main>
            </div>            
            )
        }
    }
    
export default Revenuepointe

