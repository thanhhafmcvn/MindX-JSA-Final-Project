
const signup = () => {
  const signup_email = document.querySelector("#sign-up_email");
  const signup_username = document.querySelector("#sign-up_username");
  const signup_password = document.querySelector("#sign-up_password");
  const signup_retype = document.querySelector("#sign-up_retype");
  const user = {
    email: signup_email.value,
    username: signup_username.value,
    password: signup_password.value,
  };
    if (signup_password.value !== signup_retype.value) {
      alert('Vui lòng nhập lại chính xác mật khẩu')
    }
    else {
        console.log('pass')
        localStorage.setItem('user', JSON.stringify(user));
    }

};
const signin = () => {
    const signin_email_username = document.querySelector("#sign-in_username-email");
    const signin_password = document.querySelector("#sign-in_password");
    const signinData = JSON.parse(localStorage.getItem('user'))
    if (signinData.username === signin_email_username.value || signinData.email === signin_email_username.value) {
        if (signinData.password === signin_password.value) {
            window.location = '../html/home.html'
            console.log('passs');
        }
        else {
            alert("Mật khẩu của bạn đã bị sai")
        }
    }
    else {
        alert('Người dùng không tồn tại')
    }
}