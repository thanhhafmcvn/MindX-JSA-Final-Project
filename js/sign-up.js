$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});

$(document).ready(function(){
    $('#eye2').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});

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
          window.location = '../html/sign-in.html'
      }
  
  };