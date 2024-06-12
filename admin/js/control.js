let oturum = sessionStorage.getItem('isLogin');

if(oturum != 1){
    window.location.href = "../login.html"
}