import crearElemento from "./dom/crear_elemento.js";
import mostrarContraseña from "./dom/mostrar_contraseña.js";

const d = document;

mostrarContraseña('.formulario__items .formulario__items-input > i');

const submit = d.querySelector('.form-login-principal');

const regex = function(elemento){
    let regex = new RegExp(elemento.dataset.regex);
    return regex.test(elemento.value) ?  true : false;
}

function borrarMensaje(elemento){
    let $elemento = elemento.querySelectorAll(".form-login-principal__aviso");
    if($elemento != null){
        $elemento.forEach(elem => {
            elem.remove();
        });
    } 
}

d.addEventListener('submit', e => {
    e.preventDefault();
    if(e.target.matches('.formulario--login')){
        borrarMensaje(e.target);
        let cont = 0;
        const inputs = e.target.querySelectorAll('.formulario__items input')
        inputs.forEach(input => {
            if(regex(input)) cont++;
        });
        if(cont == 2){
            console.log('Hola');
        }else{
            let icono = crearElemento('i',{clases : ['fas','fa-exclamation-circle']});
            let parrafo = crearElemento('p',{contenido : 'Usuario y/o contraseña no válida'})
            let aviso = crearElemento('div',{clases : ["form-login-principal__aviso"]});
            inputs[inputs.length - 1].parentElement.insertAdjacentElement("afterend", aviso);
            aviso.insertAdjacentElement("afterbegin",parrafo);
            aviso.insertAdjacentElement("afterbegin",icono);
            setTimeout(() => { borrarMensaje(e.target); }, 3000);
        }       
    }
    if(e.target.matches(".formulario--crearUsuario")){
        borrarMensaje(e.target);
        let cont = 0;
        const inputs = e.target.querySelectorAll('.formulario__items input');
        inputs.forEach(input => {
            if(!regex(input)){
                cont++;
                let icono = crearElemento('i',{clases : ['fas','fa-exclamation-circle']});
                let parrafo = crearElemento('p',{contenido : input.title || 'error'})
                let aviso = crearElemento('div',{clases : ["form-login-principal__aviso"]});
                input.parentElement.parentElement.insertAdjacentElement("beforeend", aviso);
                aviso.insertAdjacentElement("afterbegin",parrafo);
                aviso.insertAdjacentElement("afterbegin",icono);
            }
        });
        if(cont == 0){
            alert("El formulario a sido enviado, espere.....")
        }else{
            console.log('error');
        }
    }
});

d.addEventListener('keyup', e => {
    if(e.target.matches('.formulario--resetContraseña .formulario__items input')){
        borrarMensaje(e.target.parentElement.parentElement)
        if(e.target.placeholder == 'Repetir nueva contraseña'){
            let elemHermano = e.target.parentElement.parentElement.previousElementSibling.querySelector('input');
            if(e.target.value != elemHermano.value){
                let icono = crearElemento('i',{clases : ['fas','fa-exclamation-circle']});
                let parrafo = crearElemento('p',{contenido : 'Las contraseñas deben ser iguales'})
                let aviso = crearElemento('div',{clases : ["form-login-principal__aviso"]});
                e.target.parentElement.parentElement.insertAdjacentElement("beforeend", aviso);
                aviso.insertAdjacentElement("afterbegin",parrafo);
                aviso.insertAdjacentElement("afterbegin",icono);
                /* setTimeout(() => { borrarMensaje(e.target.parentElement.parentElement); }, 1300); */
            }
        }else{
            if(!regex(e.target)){
                let icono = crearElemento('i',{clases : ['fas','fa-exclamation-circle']});
                let parrafo = crearElemento('p',{contenido : e.target.title || 'error'})
                let aviso = crearElemento('div',{clases : ["form-login-principal__aviso"]});
                e.target.parentElement.parentElement.insertAdjacentElement("beforeend", aviso);
                aviso.insertAdjacentElement("afterbegin",parrafo);
                aviso.insertAdjacentElement("afterbegin",icono);
                /* setTimeout(() => { borrarMensaje(e.target.parentElement.parentElement);}, 1300); */
            }
        }      
    }
    if(e.target.matches('.formulario--crearUsuario .formulario__items input')){
        borrarMensaje(e.target.parentElement.parentElement)
        if(!regex(e.target)){
            let icono = crearElemento('i',{clases : ['fas','fa-exclamation-circle']});
            let parrafo = crearElemento('p',{contenido : e.target.title || 'error'})
            let aviso = crearElemento('div',{clases : ["form-login-principal__aviso"]});
            e.target.parentElement.parentElement.insertAdjacentElement("beforeend", aviso);
            aviso.insertAdjacentElement("afterbegin",parrafo);
            aviso.insertAdjacentElement("afterbegin",icono);
            /* setTimeout(() => { borrarMensaje(e.target.parentElement.parentElement);}, 1300); */
        }
    }
});
