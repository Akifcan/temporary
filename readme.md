# Temporary.js
### Notification
> Notification library for javascript
> For showing alert you can use this
> You can choose bootstrap or bulma templates

## Example
```
    createAlert({
        text: 'this is <b>&nbsp; table</b>',
        template: 'notification',
        color: 'danger',
        textAlign: 'center-text',
        fontFamily: 'ubuntu-family',
        alignment: 'top-right',
        expiry: 1000,
        animation: {
            animationName: 'notification-bottom-to-top',
            second: '.5s'
        }
    })
```

## File Structure

```
    temporary.js/assets/script.js
    temporary.js/assets/style.js
    https://cdn.jsdelivr.net/npm/temporary.js@1.0.0/assets/script.js
    https://cdn.jsdelivr.net/npm/temporary.js@1.0.0/assets/style.css
```

| Template | Color | 
| --- | --- |
| bootstrap-notify | primary |
| bootstrap-notify | success |
| bootstrap-notify | danger |
| bootstrap-notify | warning |
| bulma-notify | primary |
| bulma-notify | success |
| bulma-notify | danger |
| bulma-notify | warning |
| notification | primary |
| notification | success |
| notification | danger |
| notification | warning |

| Fonts |
| --- |
| roboto-family |
| ubuntu-family |
| baloo-tamma-2-family |
| montserrat-family |
| lato-family |

| Animation | Second | 
| --- | --- |
| notification-left-to-right |  pass the second ex:`'.5s'` |
| notification-bottom-to-top | pass the second ex:`'.5s'` |



```
 animation: {
            animationName: 'notification-bottom-to-top',
            second: '.5s'
        }
```

| Alignment |
| --- |
| top-right |
| top-left |
| bottom-left |
| bottom-right |

| Text Align |
| --- |
| center-text |
| text-left |
| text-right |



### Example

```
    createAlert({
        text: 'this is <b>&nbsp; table</b>',
        template: 'bootstrap',
        color: 'primary',
        textAlign: 'center-text',
        fontFamily: 'roboto-family',
        alignment: 'top-right',
        expiry: 3000 //default 2000,
        animation: {
            animationName: 'notification-bottom-to-top',
            second: '.5s'
        }
    })
```

<img src="https://i.hizliresim.com/4wsziG.png" title="example 1 temporary.js" alt="example temporary.js">
<img src="https://i.hizliresim.com/GevIG1.png" title="example 2 temporary.js" alt="example temporary.js">
<img src="https://i.hizliresim.com/YAhbkK.png" title="example 2 temporary.js" alt="example temporary.js">
