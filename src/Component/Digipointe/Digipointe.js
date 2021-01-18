import React, { Component } from 'react';
import AOS from 'aos';
import digipointelogo from '../../assets/images/digipointe-logo.png'
import digipointebg from '../../assets/images/digipointe-bg.jpg'
import digipointefirst from '../../assets/images/digipointe-3.jpg'
import digipointesec from '../../assets/images/digipointe-2.jpg'
import Mainbannerinner from '../Layouts/Mainbannerinner'
import Leftimagetext from '../Layouts/Leftimagetext'
import Rightimagetext from '../Layouts/Rightimagetext'

class Digipointe extends Component {
    componentDidMount() {
        AOS.init();
    }    
    render() {
        const headinglogo = digipointelogo;
        const subHeadingProp = '<strong>DigiPointe</strong> is a digital content delivery engine that delivers digital content such as PINS, airtime and data top up, movies, games and pinless transactions, seamlessly, from content partners to distribution partners (banks, telecos etc) and ultimately to the users, optimizing digital delivery and experience.';
        const mainBannerImg = digipointebg;
        const leftImgProp = digipointefirst;
        const leftDescriptionProp = '<div class="br-color-top" data-aos="fade-left" data-aos-duration="8000"></div><h2 class="pb-1">OPTIMIZE DIGITAL CONTENT EXPERIENCE</h2><p>Deliver smooth and seamless digital content to your users with DigiPointe. With high end technology tools and features, you can ensure your users get the ultimate experience from your content.</p><h2 class="pt-4 pb-1">GENERATE, MANAGE AND DELIVER PIN AND PINLESS TRANSACTIONS</h2><p>DigiPointe provides you with tools that will keep track of pin and pinless transactions. The platform acts as a gateway connecting content partners to various distributions partners through whom these contents would get to the final consumers.</p>';
        const rightImgProp = digipointesec;
        const rightDescriptionProp = '<div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div><h2>CUTTING EDGE  TECHNOLOGY</h2>​<strong>DigiPointe</strong> has the capacity for fast digital delivery of content.  No more dealing with lagging delivery or slow performance of content.';
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
    
export default Digipointe

