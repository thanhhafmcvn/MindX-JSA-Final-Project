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