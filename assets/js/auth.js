const HTML_login_btn = document.querySelector('#login-btn')
const HTML_password_fied = document.querySelector('#password')

const login = () => {
  window.start_authentication(user.name)
  console.log(user.name)
  
  setTimeout(() => {
    provide_secret()
  }, 500)
}

window.start_authentication = username => {
  console.log('cancel time login')
  lightdm.cancel_timed_login()
  console.log('start auth', username)
  lightdm.start_authentication(username)
}

window.provide_secret = () => {
  console.log('provide password')
  if (HTML_password_fied.value !== null) {
    lightdm.provide_secret(HTML_password_fied.value)
  }
}

window.authentication_complete = () => {
  if (lightdm.is_authenticated) {
    show_message('Logged in')
    lightdm.login(lightdm.authentication_user, lightdm.default_session)
  } else {
    show_message('Error', 'error')
  }
}

HTML_login_btn.addEventListener('click', login)
HTML_login_btn.addEventListener('submit', login)