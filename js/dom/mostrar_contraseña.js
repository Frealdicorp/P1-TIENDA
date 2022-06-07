export default function mostrarContraseña(iconoBtn){
    const d = document;
    d.addEventListener('click', e => {
        if(e.target.matches(iconoBtn)){
            let $input = e.target.previousElementSibling,
                $iconoBtn = e.target;
            $iconoBtn.classList.remove($iconoBtn.className.substring(4));
            if($input.type == 'password'){
                $input.type = 'text';
                $iconoBtn.classList.add('fa-eye-slash');
            }else{
                $input.type = 'password';
                $iconoBtn.classList.add('fa-eye');
            }
        }
    });
}