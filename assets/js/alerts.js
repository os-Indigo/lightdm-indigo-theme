const HTML_alert_dialog = document.querySelector('#alert-dialog')
const HTML_alert_dialog_message = document.querySelector('#alert-dialog-message')
const HTML_alert_dialog_icon = document.querySelector('#alert-dialog-icon')

if (!HTML_alert_dialog.showModal) {
  dialogPolyfill.registerDialog(HTML_alert_dialog)
}

HTML_alert_dialog.querySelector('.close').addEventListener('click', () => {
  HTML_alert_dialog.close()
})

window.show_message = (text, type) => {
  if (text.length === 0) return
  if (type === 'error') {
    HTML_alert_dialog_icon.innerHTML = 'warning'
  } else {
    HTML_alert_dialog_icon.innerHTML = 'info'
  }

  HTML_alert_dialog_message.innerHTML = text

  HTML_alert_dialog.showModal()
}

window.show_prompt = (text) => {
  console.log(text)
}