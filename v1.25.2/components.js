const notifications = document.querySelector("#notifications")

function Confirm(message, title) {
    const confirm_body = document.createElement('div')
    let head = title
    let msg = message || 'This is a confirm message'
    confirm_body.setAttribute('id', 'confirm_body')
    confirm_body.innerHTML = `
    <div class="msg_box">
    <div class="box_body">
        <div id="title">${head}</div>
        <div id="msg">${msg}</div>
    </div>
    <div class="buttons">
      <button id="c_ok" class="ok">OK</button>
      <button id="c_cancel" class="cancel">Cancel</button>
    </div>
  </div>`
    if(!title) {
        confirm_body.querySelector('#title').style.display = 'none'
        confirm_body.querySelector('#msg').style.height = '100%'
    } else {
        confirm_body.querySelector('#title').style.display = 'flex'
        confirm_body.querySelector('#msg').style.height = '67%'
    }
    document.body.appendChild(confirm_body)
    const ok = document.querySelector('#c_ok')
    const cancel = document.querySelector('#c_cancel')
    ok.onclick = () => {
        console.log('ok')
        confirm_body.remove()
        return true
    }
    cancel.onclick = () => {
        console.log('cancel')
        confirm_body.remove()
        return false
    }
}
function Toast(type, icon, text, duration) {
    let newToast = document.createElement("div")
    let drtn = parseInt(duration)*1000 || 3000
    newToast.innerHTML = `
    <div class="toast ${type}">
        <i class="bi ${icon}"></i>
        <div class="content">
            <span>${text}</span>
            <i class="bi bi-x" onclick="(this.parentElement.parentElement).remove()"></i>
        </div>
    </div>`
    notifications.appendChild(newToast)
    setTimeout(() => {
        newToast.remove()
    }, drtn)
}    
function NotifySuccess(text, duration) {
    let txt = text || 'This is a success message'
    Toast('success', 'bi bi-check-circle-fill', txt, duration)
}
function NotifyError(text, duration) {
    let txt = text || 'This is a error message'
    Toast('error', 'bi-x-circle-fill', txt, duration)
}
function NotifyWarning(text, duration) {
    let txt = text || 'This is a warnign message'
    Toast('warning', 'bi-exclamation-circle-fill', txt, duration)
}
function NotifyInfo(text, duration) {
    let txt = text || 'This is a info message'
    Toast('info', 'bi-info-circle-fill', txt, duration)
}


