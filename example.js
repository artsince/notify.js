var btnInfo = document.getElementById('btnInfo');
btnInfo.addEventListener('click', function() {
    NOTIFY.notify('Home is where I want to be!', {
        parent: document.body,
        top: 20
    });
});

var btnWarning = document.getElementById('btnWarning');
btnWarning.addEventListener('click', function() {
    NOTIFY.notify('Lift me up and turn me around!', {
        parent: document.body,
        level: 'warning',
        top: 20
    });
});

var btnError = document.getElementById('btnError');
btnError.addEventListener('click', function() {
    NOTIFY.notify('I feel numb!', {
        parent: document.body,
        level: 'error'
    });
});