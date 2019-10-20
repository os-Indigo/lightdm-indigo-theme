const HTML_reboot_dialog = document.querySelector('#reboot-dialog')
const HTML_reboot_btn = document.querySelector('#reboot-btn')

const HTML_shutdown_dialog = document.querySelector('#shutdown-dialog')
const HTML_shutdown_btn = document.querySelector('#shutdown-btn')

/* Reboot dialog */
if (!HTML_reboot_dialog.showModal) {
  dialogPolyfill.registerDialog(HTML_reboot_dialog)
}

HTML_reboot_btn.addEventListener('click', () => {
  HTML_reboot_dialog.showModal()
})

HTML_reboot_dialog.querySelector('.close').addEventListener('click', () => {
  HTML_reboot_dialog.close()
})

/* Shutdown dialog */
if (!HTML_shutdown_dialog.showModal) {
  dialogPolyfill.registerDialog(HTML_shutdown_dialog)
}

HTML_shutdown_btn.addEventListener('click', () => {
  HTML_shutdown_dialog.showModal()
})

HTML_shutdown_dialog.querySelector('.close').addEventListener('click', () => {
  HTML_shutdown_dialog.close()
})