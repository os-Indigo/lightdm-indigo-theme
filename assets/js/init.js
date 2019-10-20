const HTML_username = document.querySelector('#username')
const user = lightdm.users[0]
const session = lightdm.sessions[0]

HTML_username.innerHTML = user.display_name
lightdm.cancel_timed_login()