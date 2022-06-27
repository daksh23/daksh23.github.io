import React, {useEffect, useRef} from 'react'
import $ from "jquery";
import Profile from './Components/Profile';
import Story from './Components/Story';
import SocialMedia from './Components/SocialMedia';
import Resume from './Components/Resume';
import PG from './Components/Education/PG';
import Bachelor from './Components/Education/Bachelor';
import Skills from './Components/Skills';
import Interest from './Components/Interest';
import JPstarview from './Components/Work/JPstarview';
import Motivation from './Components/Motivation';
import TinderSaySo from './Components/Projects/TinderSaySo';
import Svg from './Extra/Svg';
import CompanyNGames from './Components/Projects/CompanyNGames';
import Symoti from './Components/Projects/Symoti';
import { BETA } from './Components/BETA';
import Zorens from './Components/Work/Zorens';

function App() {

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

    useEffect(() => {
        $.dragScroll(); //actual function call
    });

    return (
            <div style={{
                color: "white"
            }}>
                <Profile />
                <Story />
                <SocialMedia />
                <Resume />
                <PG />
                <Bachelor />
                <Skills />
                <Interest />
                <JPstarview />
                <Zorens />
                <Motivation />
                <TinderSaySo />
                {/* <Svg /> */}
                <CompanyNGames />
                <Symoti />
                <BETA />
            </div>
    );
}

export default App;