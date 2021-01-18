import React, { Component } from 'react';
import AOS from 'aos';
import Homeslide1 from '../../assets/images/homeslide1.jpg'
import Homeslide2 from '../../assets/images/homeslide2.jpg'
import Homeslide3 from '../../assets/images/homeslide3.jpg'
import Homeslide4 from '../../assets/images/homeslide4.jpg'
import Homeslide5 from '../../assets/images/homeslide5.jpg'
import Homeslide6 from '../../assets/images/homeslide6.jpg'
import Homeslide7 from '../../assets/images/homeslide7.jpg'
import Homeslide8 from '../../assets/images/homeslide8.jpg'
import Home2 from '../../assets/images/home-bg1.jpg'
import Home3 from '../../assets/images/home-bg2.jpg'
import Home4 from '../../assets/images/home-bg3.jpg'
import Mainbannercarousel from '../Layouts/Mainbannercarousel'
import Leftimagetext from '../Layouts/Leftimagetext'
import Mainbannerright from '../Layouts/Mainbannerright'
import Mainbannerleft from '../Layouts/Mainbannerleft'

class Home extends Component {
    componentDidMount() {
        AOS.init();
    }

    render() {
        const headingslide1Props = "We help you do business the smart way";
        const mainBannerslide1Img = Homeslide1;
        const headingslide2Props = "Thousands of small businesses trust SpacePointe";
        const mainBannerslide2Img = Homeslide2;
        const headingslide3Props = "We offer solutions designed for business needs, large and small";
        const mainBannerslide3Img = Homeslide3;
        const headingslide4Props = "Experience Payment solutions​ that are smart, affordable, intuitive and user friendly";
        const mainBannerslide4Img = Homeslide4;
        const headingslide5Props = "Using our platforms, business owners can run their businesses smoothly";
        const mainBannerslide5Img = Homeslide5;
        const headingslide6Props = "We are helping manage businesses effectively, seamlessly and profitably";
        const mainBannerslide6Img = Homeslide6;
        const headingslide7Props = "Clearly different retail platform designed with your business in mind";
        const mainBannerslide7Img = Homeslide7;
        const headingslide8Props = "We lead in business innovations and payment solutions for small businesses";
        const mainBannerslide8Img = Homeslide8;
        const headingProp2 = 'Smart technology for Payment Solution';
        const mainBannerImg2 = Home2;
        const subHeadingProp2 = 'With years of innovation, expertise and experience, we are helping to redefine industries with advanced technology that is unmatched by its competitor.';
        const headingProp3 = 'FOCUSED ON GETTING BUSINESSES THROUGH COVID-19';
        const mainBannerImg3 = Home3;
        const subHeadingProp3 = 'With the hard hit that businesses have been faced with during this difficult time, we have gone back to the drawing board to design solutions that will help small businesses thrive through the pandemic.';
        const leftSecDescriptionProp = '<div class="br-color-top" data-aos="fade-left" data-aos-duration="8000"></div><h2 class="pb-1 text-uppercase">We support you every step of the way</h2><p class="mb-2">We enable payment technology that makes payment process simple and fast for business owners.</p><p>Our award-winning solutions brings everything a merchant needs to manage their business, drive sales, engage customers and take payments. </p>';
        const leftSecImgProp = Home4;
        return ( 
            <div>
                <main>
                    <Mainbannercarousel headingslide1Props = { headingslide1Props } headingslide2Props = { headingslide2Props } headingslide3Props = { headingslide3Props } headingslide4Props = { headingslide4Props } headingslide5Props = { headingslide5Props } headingslide6Props = { headingslide6Props } headingslide7Props = { headingslide7Props } headingslide8Props = { headingslide8Props }
                    mainBannerslide1Img = { mainBannerslide1Img } mainBannerslide2Img = { mainBannerslide2Img } mainBannerslide3Img = { mainBannerslide3Img } mainBannerslide4Img = { mainBannerslide4Img } mainBannerslide5Img = { mainBannerslide5Img } mainBannerslide6Img = { mainBannerslide6Img } mainBannerslide7Img = { mainBannerslide7Img } mainBannerslide8Img = { mainBannerslide8Img }/>                    
                    <Mainbannerright headingProp = { headingProp2 }
                    mainBannerImg = { mainBannerImg2 }
                    subHeadingProp = { subHeadingProp2 }
                    /> <Mainbannerleft headingProp = { headingProp3 }
                    mainBannerImg = { mainBannerImg3 }
                    subHeadingProp = { subHeadingProp3 }
                    /> <Leftimagetext leftImgProp={leftSecImgProp} leftDescriptionProp={leftSecDescriptionProp}/> 
                </main> 
            </div>            
        )
    }
}

export default Home