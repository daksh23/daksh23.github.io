import React, {useEffect} from 'react';
import $ from "jquery";

import TinderSaySo from './Components/Projects/TinderSaySo';
import CompanyNGames from './Components/Projects/CompanyNGames';
import Symoti from './Components/Projects/Symoti';
import SpringBootSSO from './Components/Projects/SpringBootSSO';

import Interest from './Components/Personal/Interest';
import Profile from './Components/Personal/Profile';
import Story from './Components/Personal/Story';
import Resume from './Components/Personal/Resume';
import Skills from './Components/Personal/Skills';
import SocialMedia from './Components/Personal/SocialMedia';

import JPstarview from './Components/Work/JPstarview';
import Zorens from './Components/Work/Zorens';

import PG from './Components/Education/PG';
import Bachelor from './Components/Education/Bachelor';

import Motivation from './Components/ExtraCards/Motivation';
import Watch from './Components/ExtraCards/Watch';
import WebVersion from './Components/ExtraCards/WebVersion';


function App() {

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
                <Resume />
                <JPstarview />
                <Zorens />
                {/* Extra Stuffs */}
                <SocialMedia />
                <Interest />
                <Motivation />
                <WebVersion />
                <Watch />
            </div>
    );
}

export default App;