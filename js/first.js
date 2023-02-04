
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
        localStorage.setItem(signup_username.value, JSON.stringify(user));
    }

};
const signin = () => {
    const signin_username = document.querySelector("#sign-in_username");
    const signin_password = document.querySelector("#sign-in_password");
    const siginData = JSON.parse(localStorage.getItem(signin_username.value));
    if (localStorage.getItem(signin_username.value) !== null) {
        if (signin_password.value === siginData.password) {
            window.location = '../html/home.html'
            localStorage.setItem('currentLogin', signin_username.value)
        }
        else {
            console.log('Sai mật khẩu');
        }
    }
    else {
        console.log("Người dùng không tồn tại")
    }
}