import React, { Component } from 'react';
import AOS from 'aos';
import ekikartlogo from '../../assets/images/ekikart-logo-blue.png'
import ekikartbg from '../../assets/images/ekikart-banner.jpg'
import ekikartfirst from '../../assets/images/ekikart-3.jpg'
import ekikartsec from '../../assets/images/ekikart-4.jpg'
import ekikartthird from '../../assets/images/ekikart-5.jpg'
import Mainbannerinner from '../Layouts/Mainbannerinner'
import Leftimagetext from '../Layouts/Leftimagetext'
import Rightimagetext from '../Layouts/Rightimagetext'

class Ekikart extends Component {
    componentDidMount() {
        AOS.init();
    }    
    render() {
        const headinglogo = ekikartlogo;
        const subHeadingProp = '<strong>EKIKART</strong> is a mobile point of sale that can be used for any business retail to manage and sell products and services.  Designed to help retailers manage and run their businesses, enable payment, provide excellent service and maximize profit.';
        const thirdSubHeadingProp  = '';
        const mainBannerImg = ekikartbg;
        const leftImgProp = ekikartfirst;
        const leftDescriptionProp = '<div class="br-color-top" data-aos="fade-left" data-aos-duration="8000"></div><h2 class="pb-4">THE POINT OF SALE DESIGNED WITH YOUR BUSINESS IN MIND</h2><p>We lead in mobile point of sale solutions for the small and medium sized business owner. Built with the latest technology that makes the payment process simple and fast for retail businesses.  Our devices are EMV and PCIDSS certified.</p>Automated and manual fraud monitoring is used to protect your business from internal and external fraud.​';
        const rightImgProp = ekikartsec;
        const rightDescriptionProp = '<div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div><h2>SMART DASHBOARD</h2>​The Dashboard gives you the tools to manage your business, it shows you at a glance what makes money for you and what doesn’t. Get insight into your business and view transactions, total sales and top selling products per terminal and per employee.<h2 class="pt-4 pb-1">MORE THAN JUST A POINT OF SALE</h2>​Offering more than just payment processing, merchants can now check reports, manage their inventory, manage employees and manage their discount offers all on one platform. They can also get analytics and insights to help them make better business decisions, grow their business and optimize profit.<h2 class="pt-4 pb-1">BECOME A RESELLER OR BROKER</h4>​With EkiKart, you can become a reseller or a broker where you can add and manage your merchants and get reports from your merchants.<h2 class="pt-4 pb-1">BUILD YOUR OWN PACKAGE</h2>Use only the features that you need. Ekikart is robust enough for the heavy users and simple enough for the users with lighter business needs. EkiKart is built for easy and seamless integration into your business.';
        const leftSecImgProp = ekikartthird;
        const leftSecDescriptionProp = '<div class="br-color-top" data-aos="fade-left" data-aos-duration="8000"></div><h2 class="pb-1">MANAGE YOUR BUSINESS,END TO END</h2>​From managing your sales, inventory, employees and your customers. Ekikart gives you the features to run your business smoothy in store or on the go.<h2 class="pt-5 pb-1">INTEGRATED WITH KARDSTASH</h2><h5 class="pb-1">KardStash is a digital and discount offers platform, where businesses can load up offers.​</h5>​You can encourage your customers and attract new customers on the Ekikart platform by creating and loading discount offers, which your customers can download and redeem when they spend in your business.<div class="col-sm-12 pt-5"><a href="#" class="btn btn-info buttonc-primary">Learn More</a></div>​';
        return (
            <div>
                <main>      
                    <Mainbannerinner headinglogo={headinglogo}   subHeadingProp={subHeadingProp} thirdSubHeadingProp={thirdSubHeadingProp} mainBannerImg={mainBannerImg} kardstashBannerImg="kardstashBannerImg" />                    
                    <Leftimagetext    leftImgProp={leftImgProp} leftDescriptionProp={leftDescriptionProp}/>
                    <Rightimagetext   rightImgProp={rightImgProp} rightDescriptionProp={rightDescriptionProp} />
                    <Leftimagetext     leftImgProp={leftSecImgProp} leftDescriptionProp={leftSecDescriptionProp}/>
                </main>
            </div>            
            )
        }
    }
    
export default Ekikart

