const d = document;
console.log('Hola');

const icono = document.querySelector('.form-login-principal__items i');

d.addEventListener('click', e =>{
    if(e.target == icono){
        let inputPass = d.querySelector('.item-password input');
        icono.classList.remove(icono.className.substring(4));
        if(inputPass.type == 'password'){
            inputPass.type = 'text';
            icono.classList.add('fa-eye-slash');
        }else{
            inputPass.type = 'password';
            icono.classList.add('fa-eye');
        }

    }
});

const submit = d.querySelector('.form-login-principal');

d.addEventListener('submit', e => {
    e.preventDefault();
    if(e.target.matches('.form-login-principal')){
        let cont = 0;
        const inputs = e.target.querySelectorAll('input[type=text], input[type=password]');
        inputs.forEach(input => {
            let regex = new RegExp(input.dataset.regex);
            if(regex.test(input.value)){
                cont++;
            }
        });
        if(cont == 2){
            console.log('Hola');
        }else{
            d.querySelector('.form-login-principal__aviso').classList.remove('form-login-principal__aviso--hidden')
            setTimeout(() => {
                d.querySelector('.form-login-principal__aviso').classList.add('form-login-principal__aviso--hidden')
            }, 2000);
        }
        /*let username = submit.querySelector('[name=username]');
        let password = submit.querySelector('[name=password]')
        let regex = /^([0-9]{8,10})$/g;
        let regex1 = /^([a-zA-Z0-9ñÑ*-_]{8,16})$/g;
        if(regex.test(username.value) && regex1.test(password.value)){
            console.log('hola');
        }
        else{
            d.querySelector('.form-login-principal__aviso').classList.remove('form-login-principal__aviso--hidden')
            password.value = "";
            setTimeout(() => {
                d.querySelector('.form-login-principal__aviso').classList.add('form-login-principal__aviso--hidden')
            }, 2000);
        }*/
        
    }
    if(e.target.matches(".formulario")){
        let cont = 0;
        const inputs = e.target.querySelectorAll('input[type=text], input[type=number], input[type=tel]');
        inputs.forEach(input => {
            let regex = new RegExp(input.dataset.regex);
            if(regex.test(input.value)){
                cont++;
            }
        });
        if(cont == inputs.length - 1){
            console.log('Hola');
        }else{
            console.log('no');
            /* d.querySelector('.form-login-principal__aviso').classList.remove('form-login-principal__aviso--hidden')
            setTimeout(() => {
                d.querySelector('.form-login-principal__aviso').classList.add('form-login-principal__aviso--hidden')
            }, 2000); */
        }
    }
})