import React, { Component } from 'react';
import AOS from 'aos';
import Demandpointelogo from '../../assets/images/demandpointe-logo.png'
import Demandpointebg from '../../assets/images/demandpointe-bg.jpg'
import Demandpointe1 from '../../assets/images/demandpointe-1.jpg'
import Demandpointe2 from '../../assets/images/demandpointe-2.jpg'
import Mainbannerinner from '../Layouts/Mainbannerinner'
import Leftimagetext from '../Layouts/Leftimagetext'
import Rightimagetext from '../Layouts/Rightimagetext'

class Demandpointe extends Component {
    componentDidMount() {
        AOS.init();
    }    
    render() {
        const headinglogo = Demandpointelogo;
        const subHeadingProp = '<strong>DemandPointe</strong>is a solution developed for government agencies and other organizations to enable their agency/company to generate and manage demand notices (Bill) due to the payer. This notice enables the payer to know the amount that is due at the end of the billing cycle.';
        const mainBannerImg = Demandpointebg;
        const leftDescriptionProp = '<div class="br-color-top" data-aos="fade-left" data-aos-duration="8000"></div><h2 class="pb-1">GENERATE AND EXECUTE DEMAND NOTICES</h2><p>Demand notice is automatically generated based on a template setup by a government official or consultant with an access and sent to a company for a particular levi due to them, it usually consists of the name of the company, the amount due, the period and date of expected payments.  The notices can be sent to the company via email or a physical copy.</p><h2 class="pt-4 pb-1">SIMPLE TO USE AND IMPLEMENT</h2><p>DemandPointe has made it very easy to generate, deliver and manage demand notices. With a system that shows you insights and real time reporting, it is easy to manage the process from generating notices, to printing, delivery and to payment and verification.</p>';
        const leftImgProp = Demandpointe1;
        const rightDescriptionProp = '<div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div><h2 class="pb-1">DESIGNED FOR COMPANIES AND ORGANIZATIONS</h2><p>DemandPointe can be used by companies and organizations such as schools, government, hospitals and corporate bodies to demand payment due to them. The process enables transparency and real time visibility for all parties involved. DemandPointe generates a unique QR code that enables tracking and verification of each demand notice.</p><div class="col-sm-12 pt-4"><a href="#" class="btn btn-info buttonc-white">Learn More</a></div>';
        const rightImgProp = Demandpointe2;
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
    
export default Demandpointe

