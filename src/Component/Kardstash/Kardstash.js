import React, { Component } from 'react';
import AOS from 'aos';
import Kardstashlogo from '../../assets/images/kardstash-logo-white.png'
import Kardstashbg from '../../assets/images/kardstash-bg1.jpg'
import Kardstash1 from '../../assets/images/kardstash-3.jpg'
import Kardstash2 from '../../assets/images/kardstash-1.jpg'
import Mainbannerinner from '../Layouts/Mainbannerinner'
import Leftimagetext from '../Layouts/Leftimagetext'
import Rightimagetext from '../Layouts/Rightimagetext'

class Kardstash extends Component {
    componentDidMount() {
        AOS.init();
    }    
    render() {
        const headinglogo = Kardstashlogo;
        const subHeadingProp = '<h5><strong>Your Smart Digital Offers Platform</strong></h5>Is an App that makes digital and discount offers available to consumers from local merchants and businesses. Users browse and download these offers and redeem them at their favorite local business.';
        const mainBannerImg = Kardstashbg;
        const leftDescriptionProp = '<div class="br-color-top" data-aos="fade-left" data-aos-duration="8000"></div><h2 class="pb-1">SUPPORT YOUR LOCAL BUSINESS</h2><p>We have made it easy to support your local businesses by offering you discount offers on the KardStash platform that you can stash and redeem in your local area.</p><h2 class="pt-4 pb-1">SEARCH FOR DISCOUNT OFFERS BY GEOLOCATION OR INDUSTRY </h2><p>With one touch, you can filter offers by geolocation and by industry, and see what offers are available from your local businesses.</p><h2 class="pt-4 pb-1">MANAGE YOUR STASH </h2><p>Your Stash is your digital wallet and you have complete control of stashing your offers, unstashing an offer, gifting an offer or redeeming an offer, all from the KardStash app.</p>';
        const leftImgProp = Kardstash1;
        const rightDescriptionProp = '<div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div><h2 class="pb-1">CONTACTLESS PAYMENTS</h2><p>With your KardStash app, you can limit your cash spending, all you need to do to redeem your offer is to scan the <strong>QR Code</strong>.</p><h2 class="pt-4 pb-1">IT IS EASY AND CONVENIENT TO SHOP, SPEND AND SAVE</h2><p>With the KardStash App available for IOS and Android, saving wherever you spend is always at the tip of your fingers.</p><h2 class="pt-4 pb-1">ENJOY INCREDIBLE DEALS EVERYDAY</h2><p>Hundreds of merchants are joining KardStash every day, and that means more and more great deals are available to you every day.</p><div class="col-sm-12 pt-4"><a href="#" class="btn btn-info buttonc-white">Download the App</a></div>';
        const rightImgProp = Kardstash2;
        return (
            <div>
                <main>      
                    <Mainbannerinner headinglogo={headinglogo}   subHeadingProp={subHeadingProp}  mainBannerImg={mainBannerImg} kardstashBannerImg="kardstashBannerImg" />                    
                    <Leftimagetext    leftImgProp={leftImgProp} leftDescriptionProp={leftDescriptionProp}/>
                    <Rightimagetext   rightImgProp={rightImgProp} rightDescriptionProp={rightDescriptionProp} />
                </main>
            </div>            
            )
        }
    }
    
export default Kardstash

