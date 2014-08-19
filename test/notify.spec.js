describe('NOTIFY module spec', function() {
    it('should pass this dummy test', function() {
        expect(false).not.toBe(true);
    });

    describe('testing the triggering of notification ', function() {
        var message;
        beforeEach(function() {
            message = 'this is a notification';

            NOTIFY.notify(message, {
                parent: document.body
            });
        });

        afterEach(function() {
            var notifications = document.querySelectorAll('.notification'), i;
            if(notifications) {
                for(i = 0; i < notifications.length; i += 1) {
                    document.body.removeChild(notifications[i]);
                }
            }
        });

        it('Calling NOTIFY.notify should create a div with "notification" class', function() {
            var notification = document.body.querySelector('.notification');
            expect(notification).toBeDefined();
        });

        it('Notification message should be the same as the first argument', function() {
            var spanNotification = document.body.querySelector('.notification span');
            expect(spanNotification).toBeDefined();
            expect(spanNotification.innerHTML).toEqual(message);
        });

        it('Notification div should have info class', function() {
            var notification = document.body.querySelector('.notification');
            expect(notification).toBeDefined();
            expect(notification.classList.contains('info')).toBe(true);
        });
    });

    describe('testing different types of notification ', function() {
        
        afterEach(function() {
            var notifications = document.querySelectorAll('.notification'), i;
            if(notifications) {
                for(i = 0; i < notifications.length; i += 1) {
                    document.body.removeChild(notifications[i]);
                }
            }
        });

        it('info level notification should have info class', function() {
            var message = 'Some Message';
            
            NOTIFY.notify(message, {
                parent: document.body,
                level: 'info'
            });

            var notification = document.body.querySelector('.notification');
            expect(notification).toBeDefined();
            expect(notification.classList.contains('info')).toBe(true);
        });

        it('warning level notification should have warning class', function() {
            var message = 'Some Message';

            NOTIFY.notify(message, {
                parent: document.body,
                level: 'warning'
            });

            var notification = document.body.querySelector('.notification');
            expect(notification).toBeDefined();
            expect(notification.className).toEqual('notification warning');
        });

        it('error level notification should have error class', function() {
            var message = 'Some Message';

            NOTIFY.notify(message, {
                parent: document.body,
                level: 'error'
            });

            var notification = document.body.querySelector('.notification');
            expect(notification).toBeDefined();
            expect(notification.className).toEqual('notification error');
        });
    });
});