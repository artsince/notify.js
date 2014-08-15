# Notify.js

Notify.js is a small Javascript module to show animated notification messages.

### Usage
First of all, you need add the notify.css and notify.js files to your html file.
```html
<link rel="stylesheet" href="css/notify.css">
<script type="text/javascript" src="js/notify.js"></script>
```

To trigger a notification call ```NOTIFY.notify(msg, opts)``` method.
```js
NOTIFY.notify('Home is where I want to be!', {
    parent: document.body,
    top: 20
});
```
__Options:__ You can customize the notification by passing options.
* parent: The element under which the new notification DOM will be added.
* level: The level of the notifitication. Valid values are: info, warning and error.
* top: margin with respect to top. (Use either top or bottom)
* bottom: margin with respect to bottom. (Use either top or bottom)

There are three levels of notifications available: Info, Warning and Error.

### Development
The NOTIFY module does not depend on any other libraries. However, I am using [Node.js](https://github.com/joyent/node), [Grunt](https://github.com/gruntjs/grunt) and [Sass](https://github.com/sass/sass) for development. So, make sure they are all installed.

Specifically, the copy action defined in the Grunt file copies the latest version of the notify.css and notify.js files into the public directory. ```ìndex.html`` file references those files to run.`

If you don't like the default colors you can edit the ```notify.scss`` file:
```scss
$info-color: #888;
$warning-color: #FFFF7E;
$error-color: #bf0000;
```

### Examples
Showing info notification:

```js
var btnInfo = document.getElementById('btnInfo');
btnInfo.addEventListener('click', function() {
    NOTIFY.notify('Home is where I want to be!', {
        parent: document.body,
        top: 20
    });
});
```

Showing warning notification:
```js
var btnWarning = document.getElementById('btnWarning');
btnWarning.addEventListener('click', function() {
    NOTIFY.notify('Lift me up and turn me around!', {
        parent: document.body,
        level: 'warning',
        top: 20
    });
});
```

Showing error notification:
```js
var btnError = document.getElementById('btnError');
btnError.addEventListener('click', function() {
    NOTIFY.notify('I feel numb!', {
        parent: document.body,
        level: 'error',
        bottom: 10
    });
});
```

You can also see sample [index.html](https://github.com/artsince/notify.js/blob/master/public/index.html) file in the repository or view the project page [here](http://artsince.github.io/notify.js/).
