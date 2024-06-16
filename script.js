const success = document.querySelector("#success")
const error = document.querySelector("#error")
const warning = document.querySelector("#warning")
const info = document.querySelector("#info")
const confirmBtn = document.querySelector('#confirmBtn')
const promptBtn = document.querySelector('#promptBtn')
const modalBtn = document.querySelector('#modalBtn')
let bdy = document.querySelectorAll('.bdy')

document.addEventListener('DOMContentLoaded', ()=>{
    confirmBtn.onclick = () => {
        Confirm()
    }
    success.onclick = () => {
        NotifySuccess()
    }
    error.onclick = () => {
        NotifyError()
    }
    warning.onclick = () => {
        NotifyWarning()
    }
    info.onclick = () => {
        NotifyInfo()
    }
})

function copyCode(comp) {
    var copyText = comp

    copyText.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(copyText.value);
    response("Copied");
}
function response(text) {
    const response = document.querySelector('#response')

    response.innerHTML = text
    response.style.display = 'flex'
    setTimeout(() => {
        response.style.display = 'none'
    }, 1000)
}
