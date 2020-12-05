// VARIABLES
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciarCarrito');
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];

cargarEventListener();
function cargarEventListener() {        
    listaCursos.addEventListener('click', agregarCurso)
}

// -- FUNCIONES --
function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado);        
    }
    
}

//Lee el contenido del HTML seleccionado y extrae info de curso
function leerDatosCurso(curso) {
    //Crea objeto del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Agrega elementos al array de carritos
    // articulosCarrito.push(infoCurso);
    articulosCarrito = [...articulosCarrito, infoCurso];
    
    console.log(articulosCarrito);

    carritoHTML();
}

//Muestra carrito en el HTML
function carritoHTML() {
    
    limpiarHTML();

    //recorre carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso; 
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td> ${titulo} </td>
            <td> ${precio} </td>
            <td> ${cantidad} </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        contenedorCarrito.appendChild(row);
    })
}

//Eliminar los cursos del tbody
function limpiarHTML() {
    // contenedorCarrito.innerHTML = '';

    //codigo mejorado*
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}