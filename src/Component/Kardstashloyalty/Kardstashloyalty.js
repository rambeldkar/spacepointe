import React, { Component } from 'react';
import AOS from 'aos';
import kardstashlogo from '../../assets/images/kardstash-logo-white.svg';
import kardstashloyalaltybg from '../../assets/images/kardstash-loyalalty-banner.png'
import kardstashloyalaltyfirst from '../../assets/images/kardstash-loyalalty-1.png'
import kardstashloyalaltythird from '../../assets/images/kardstash-loyalalty-2.png'
import kardstashloyalaltysec from '../../assets/images/kardstash-loyalalty-3.png'
import Mainbannerinner from '../Layouts/Mainbannerinner'
import Leftimagetext from '../Layouts/Leftimagetext'
import Rightimagetext from '../Layouts/Rightimagetext'

class Kardstashloyalty extends Component {
    componentDidMount() {
        AOS.init();
    }    
    render() {
        const headinglogo = kardstashlogo;
        const subHeadingProp = ' The <strong>KardStash</strong> platform connects small business owners to consumers via offers and digital gift cards.  The business owners load up offers for consumers to download via the KardStash app and the consumers redeem these offers when they spend instore.';
        const mainBannerImg = kardstashloyalaltybg;
        const leftImgProp = kardstashloyalaltyfirst;
        const leftDescriptionProp = '<div class="br-color-top" data-aos="fade-left" data-aos-duration="8000"></div><h2 class="pb-1">GUARANTEED PROFITS,<br/>EVEN WITH DISCOUNT OFFERS</h2><p>It’s as easy as creating offers, and watching customers redeem these offers as they spend in your business.</p><h2 class="pt-4 pb-1">SMART FEATURES</h2><p>KardStash offers you a smart dashboard that gives you insight into your business and all transaction reports. You can manage, add, edit and load offers and see what is working for your business, and make informed decisions.</p><h2 class="pt-4 pb-1">CONTACTLESS PAYMENT</h2><p>Combat fraud in your business by encouraging contactless payments. Customers redeem their offers in your business by simply scanning the QR code.</p>';
        const rightImgProp = kardstashloyalaltysec;
        const rightDescriptionProp = '<div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div><h2>GET THE CUSTOMER COMING TO YOU</h2>​KardStash connects your local business with customers who want great deals across the US and Africa.<h2 class="pt-4">GIVE YOUR BUSINESS THE ADVANTAGE</h2>Offer digital and discounted offers to your customers.  Register for free and load up offers and watch your business grow.<h2 class="pt-4">CHOOSE FROM BEAUTIFAL TEMPLATES</h4>​With EkiKart, you can become a reseller or a broker where you can add and manage your merchants and get reports from your merchants.';
        const leftSecImgProp = kardstashloyalaltythird;
        const leftSecDescriptionProp = '<div class="br-color-top" data-aos="fade-left" data-aos-duration="8000"></div><h2 class="pb-1">TRUSTED BY THOUSANDS OF BUSINESSES</h2>KardStash is designed for all kinds of businesses, merchants and service providers.<br/>With hundreds of merchants and many more joining every day, this is the easiest and fastest way to impress your customers and get new customers.<div class="col-sm-12 pt-5"><a href="#" class="btn btn-info buttonc-primary">Learn More</a></div>​​';
        return (
            <div>
                <main>      
                    <Mainbannerinner headinglogo={headinglogo}   subHeadingProp={subHeadingProp}  mainBannerImg={mainBannerImg} kardstashBannerImg="kardstashBannerImg" />                    
                    <Leftimagetext    leftImgProp={leftImgProp} leftDescriptionProp={leftDescriptionProp}/>
                    <Rightimagetext   rightImgProp={rightImgProp} rightDescriptionProp={rightDescriptionProp} />
                    <Leftimagetext     leftImgProp={leftSecImgProp} leftDescriptionProp={leftSecDescriptionProp}/>
                </main>
            </div>            
            )
        }
    }
    
export default Kardstashloyalty

