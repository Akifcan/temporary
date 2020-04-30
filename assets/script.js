const button = document.querySelector('button')

function createAlert(alertElements){

    let isContainHtml = false
 
    if(alertElements.text == null || alertElements.text == ''){
        console.error('please provide a text')
        return
    }

    if(alertElements.text.match(/<.*?>(.*?)<\/.*?>/g)){
        isContainHtml = true
    }else{
        isContainHtml = false
    }

    const div = document.createElement('div')
    div.classList.add('notify')
    div.classList.add(alertElements.alignment ? alertElements.alignment : 'bottom-right')
    div.classList.add(alertElements.template ? alertElements.template : 'notification')
    div.classList.add(alertElements.color ? alertElements.color : 'primary')
    div.classList.add(alertElements.fontFamily ? alertElements.fontFamily : 'roboto-family')
    div.classList.add(alertElements.textAlign ? alertElements.textAlign : 'center-text')
    isContainHtml ? div.innerHTML = alertElements.text : div.innerText = alertElements.text

    if(alertElements.animation){
        if(alertElements.animation.animationName == null || alertElements.animation.animationName == ''){
            console.error('Notification: animation name null or blank. Animation list: ')
            return
        }else if(alertElements.animation.second == null || alertElements.animation.second == ''){
            console.error('Notification: animation second null or blank. Animation list: ')
            return
        }
        div.style.animation = `${alertElements.animation.animationName} ${alertElements.animation.second}`
    }
  
    document.body.appendChild(div)


    setTimeout(() => {
        div.style.display = 'none'
    }, alertElements.expiry ? alertElements.expiry : 2000)
}

button.addEventListener('click', function(){
    createAlert({
        text: 'this is <b>&nbsp; notification</b>',
        template: 'bulma-notify',
        color: 'warning',
        textAlign: 'center-text',
        fontFamily: 'ubuntu-family',
        alignment: 'top-right',
        expiry: 1000,
        animation: {
            animationName: 'notification-bottom-to-top',
            second: '.5s'
        }
    })
})