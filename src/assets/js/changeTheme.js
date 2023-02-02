function changeTheme() {
    if(window.localStorage.getItem("modeChange") == '1') {
        clearInterval(timer)
    }
    let date = new Date()
    if(date.getHours() >= 20) {
        document.getElementsByTagName("html")[0].setAttribute('theme','dark')
    }else {
        document.getElementsByTagName("html")[0].removeAttribute('theme')
    }
}
let timer = null
function start() {
    timer = setInterval(changeTheme,1000)
}
start()