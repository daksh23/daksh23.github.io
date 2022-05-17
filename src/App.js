import React, {useEffect, useRef} from 'react'
import CopyRight from './Components/CopyRight';
import $ from "jquery";
import {MapInteractionCSS } from 'react-map-interaction';

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
                <div
                    style={{
                    position: "absolute",
                    top: '298px',
                    left: "725px",
                    opacity: 1
                }}>
                    <CopyRight/>
                </div>
            </div>
    );
}

export default App;