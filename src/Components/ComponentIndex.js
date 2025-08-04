import React, {useEffect} from 'react';
import $ from "jquery";

import TinderSaySo from './Projects/TinderSaySo';
import CompanyNGames from './Projects/CompanyNGames';
import Symoti from './Projects/Symoti';
import SpringBootSSO from './Projects/SpringBootSSO';

import Interest from './Personal/Interest';
import Profile from './Personal/Profile';
import Story from './Personal/Story';
import Skills from './Personal/Skills';
import SocialMedia from './Personal/SocialMedia';
import Certification from './Personal/Certification';

import JPstarview from './Work/JPstarview';
import Zorens from './Work/Zorens';

import PG from './Education/PG';
import Bachelor from './Education/Bachelor';

import Motivation from './ExtraCards/Motivation';
import Watch from './ExtraCards/Watch';
import WebVersion from './ExtraCards/WebVersion';


const ComponentIndex = () => {

    const xCoordinate = 300;
    const yCoordinate = 300; 

    $.dragScroll = function () {
        var settings = $.extend({scrollVertical: true, scrollHorizontal: true});

        var clicked = false,
            clickY,
            clickX;

        //fn that takes event and element as arguments
        var updateScrollPos = function (e, el) {
            var $el = $(el);

            settings.scrollVertical && $el.scrollTop($el.scrollTop() + (clickY - e.pageY));
            settings.scrollHorizontal && $el.scrollLeft($el.scrollLeft() + (clickX - e.pageX));
        };

        $(document).on({
            mousemove: function (e) {
                clicked && updateScrollPos(e, this);
            },
            mousedown: function (e) {
                clicked = true;
                //storing the current point value to click vars
                clickY = e.pageY;
                clickX = e.pageX;
            },
            mouseup: function () {
                //setting click as false when mouse click is lifted
                clicked = false;
            }
        });
    };
  
    const scrollToPosition = () => {
        const $el = $('html, body');
        $el.scrollTop(yCoordinate);
        $el.scrollLeft(xCoordinate);
      };

    useEffect(() => {
        $.dragScroll();
        scrollToPosition();
    });

    return (
            <div style={{
                color: "white"
            }}>
                {/* Projects */}
                <TinderSaySo />
                <CompanyNGames />
                <Symoti />
                <SpringBootSSO />
                {/* Personal Details */}
                <Profile />
                <Story />
                {/* Skills and Experience */}
                <PG />
                <Bachelor />
                <Skills />
                <JPstarview />
                <Zorens />
                {/* Extra Stuffs */}
                <SocialMedia />
                <Interest />
                <Motivation />
                <WebVersion />
                <Watch />
                <Certification />
            </div>
    );
}

export default ComponentIndex;