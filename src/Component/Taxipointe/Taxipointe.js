import React, { Component } from 'react';
import AOS from 'aos';
import taxipointelogo from '../../assets/images/taxipointe-logo.png'
import taxipointebg from '../../assets/images/taxipointe-bg.jpg'
import taxipointefirst from '../../assets/images/taxipointe-1.jpg'
import taxipointesec from '../../assets/images/taxipointe-2.jpg'
import Mainbannerinner from '../Layouts/Mainbannerinner'
import Leftimagetext from '../Layouts/Leftimagetext'
import Rightimagetext from '../Layouts/Rightimagetext'

class Taxipointe extends Component {
    componentDidMount() {
        AOS.init();
    }    
    render() {
        const headinglogo = taxipointelogo;
        const subHeadingProp = '<strong>TaxiPointe</strong>  is for cab-drivers and Rickshaw drivers (Keke Napep or Keke Marwa). The app helps them manage their trips based upon fixed locations or distance-based trips.';
        const mainBannerImg = taxipointebg;
        const leftDescriptionProp = '<div class="br-color-top" data-aos="fade-left" data-aos-duration="8000"></div><h2 class="pb-1">FAST, CONVENIENT AND SAFE WAY TO TRAVEL</h2><p>TaxiPointe provides security and convenience.  It is easy for riders to hail a cab or Rickshaw from wherever they are, track their drivers and pay conveniently, while providing a safe environment for the users.</p>';
        const leftImgProp = taxipointefirst;
        const rightDescriptionProp = '<div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div><h2 class="pb-1">HELPING DRIVERS EARN EXTRA INCOME</h2><p>TaxiPointe offers drivers the opportunity to earn good money with lower commission rates and no monthly fees.</p>';
        const rightImgProp = taxipointesec;
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
    
export default Taxipointe

