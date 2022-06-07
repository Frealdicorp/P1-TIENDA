const d = document;

export default function crearElemento(elemento, atributos = {}){
    let $elemento = d.createElement(elemento);
    if(atributos.clases){
        atributos.clases.forEach(clase => {
            $elemento.classList.add(clase);
        });
    }
    $elemento.innerHTML = atributos.contenido || null;

    return $elemento;
}