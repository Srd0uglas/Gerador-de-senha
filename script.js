
let sliderElement = document.querySelector("#slider"); /*pegando o id do input*/ 
let buttonElement = document.querySelector("#button"); /*pegando o id do buttom*/

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";  /*caracteres que eu quero que gere*/ 
let novaSenha = "";

/* mostrar numeros de caracteres no "tamanho ... caracteres" */
sizePassword.innerHTML = sliderElement.value;
/* function para fazer com que o input atualize a cada vez que ele for mexido*/
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}
function generatePassword(){
    
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword .classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}
function copyPassword(){
    alert("senha copiada")
    navigator.clipboard.writeText(novaSenha);
}
