/* exported NOTIFY */
var NOTIFY = (function (d) {
    "use strict";

    /**
        According to this source (http://www.sitepoint.com/css3-animation-javascript-event-handlers/)
        there is a discrepancy in the capitalization of the event names.
        I am just being lazy and making sure all bases covered by adding both lowecase and capitalized
        versions of the event names.
     */
    var _fn_crossBrowserEventRegistery = function (element, eventType, fn) {
        var prefixes = ['webkit', 'moz', 'ms', 'o', ''];
        var i;

        for(i = 0; i < prefixes.length; i += 1) {
            element.addEventListener(prefixes[i] + eventType, fn, false);
            element.addEventListener(prefixes[i] + eventType.toLowerCase(), fn, false);
        }
    };

    var _fn_createNotification = function(text) {
        var divNotification = d.createElement('div');
        var spanMessage = d.createElement('span');
        var options = arguments[1] || {};

        spanMessage.innerHTML = text;
        divNotification.appendChild(spanMessage);
        
        divNotification.className = 'notification';
        divNotification.className += ' ' + (options.level !== undefined ?options.level : 'info');
        
        if(options.top) {
            divNotification.style.top = options.top + 'px';
        }
        else if(options.bottom) {
            divNotification.style.bottom = options.bottom + 'px';
        }

        _fn_crossBrowserEventRegistery(divNotification, 'AnimationEnd', function (e) {
            if(e.animationName === 'slideIn') {
                this.parentNode.removeChild(divNotification);
            }
        });

        if(options.parent) {
            options.parent.appendChild(divNotification);
        }
        
        return divNotification;
    };
    
    return {
        notify: _fn_createNotification
    };
})(document);
