import React, { Component } from 'react';
import AOS from 'aos';
import ticketpointelogo from '../../assets/images/ticketpointe-logo.png'
import ticketpointebg from '../../assets/images/ticketpointe-bg.jpg'
import ticketpointefirst from '../../assets/images/ticketpointe-1.jpg'
import ticketpointesec from '../../assets/images/ticketpointe-2.jpg'
import Mainbannerinner from '../Layouts/Mainbannerinner'
import Leftimagetext from '../Layouts/Leftimagetext'
import Rightimagetext from '../Layouts/Rightimagetext'

class Ticketpointe extends Component {
    componentDidMount() {
        AOS.init();
    }    
    render() {
        const headinglogo = ticketpointelogo;
        const subHeadingProp = '<strong>TicketPointe</strong> is the ultimate tool for event planning, ticket sales and management.  It can be used for sporting, entertainment, business events, etc.  The app is linked to an online portal that people can buy tickets from.';
        const mainBannerImg = ticketpointebg;
        const leftDescriptionProp = '<div class="br-color-top" data-aos="fade-left" data-aos-duration="8000"></div><h2 class="pb-1">EVENT MANAGEMENT MADE SIMPLE</h2><p>TicketPointe is used for more than selling tickets, it is a platform to manage sales of your tickets, transactions, multiple sales personnel, as well as the management of specialized types of ticketing like VIP tickets.</p><h2 class="pt-4 pb-1">SMART FEATURES</h2><p>With real time reports and analytics, you are able to see how well your event planning is doing. Your dashboard gives you an insight into every area of your event planning and helps you make informed decisions to make your event a success. </p>';
        const leftImgProp = ticketpointefirst;
        const rightDescriptionProp = '<div class="br-normal-top" data-aos="fade-right" data-aos-duration="8000"></div><h2 class="pb-1">ENTERTAINMENT AND EVENT PLANNING, END TO END</h2><p>TicketPointe provides smart tools to help those in the entertainment and event industry plan and execute their events, from event planners and organizers to venues and to fans and customers.</p>';
        const rightImgProp = ticketpointesec;
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
    
export default Ticketpointe

