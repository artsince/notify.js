var NOTIFY = (function () {
    var _fn_createNotification = function(text) {
        var divNotification = document.createElement('div');
        var spanMessage = document.createElement('span');
        var options = arguments[1] || {};
    
        spanMessage.innerHTML = text;
        divNotification.appendChild(spanMessage);
        
        divNotification.className = 'notification';
        divNotification.className += ' ' + (options.level !== undefined ?options.level : 'info');
        
        if(options.top) {
            divNotification.style.top = options.top + 'px';
        }

        setTimeout(function () {
            divNotification.parentNode.removeChild(divNotification);
        }, options.lifetime ? lifeTime : 2500);
    
        if(options.parent) {
            options.parent.appendChild(divNotification);
        }
        
        return divNotification;
    };
    
    return {
        notify: _fn_createNotification
    };
})();
