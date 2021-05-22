function iniciar(){
var user=document.querySelector("#user");
var password=document.querySelector("#password");
var mail=document.querySelector("#email_id")
user.addEventListener("input", validacion, false);
password.addEventListener("input", validacion2,false);
mail.addEventListener("input", validacion3,false);
validacion();
validacion2();
validacion3();
}
function validacion(){
    if (user.value==""){
        user.setCustomValidity("Escribe un Usuario");
        user.style.background="#ffb26b"
    }
    else{   
        user.setCustomValidity("");
        user.style.background="#9fe6a0";
    }
}
function validacion2(){
    if (password.value==""){
        password.setCustomValidity("Escribe una contraseña");
        password.style.background="#ffb26b"
    }
    else{
        password.setCustomValidity("");
        password.style.background="#9fe6a0";
    }
}
function validacion3(){
    if (mail.value==""){
        mail.setCustomValidity("Escribe tu e-mail");
        mail.style.background="#ffb26b"
    }
    else{
        mail.setCustomValidity("");
        mail.style.background="#9fe6a0";
    }
}
window.addEventListener("load",iniciar,false);