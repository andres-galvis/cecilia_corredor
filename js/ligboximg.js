
const btnCierra = document.querySelector('#btn-cierra')
const imagenes = document.querySelectorAll('#cards_general img')
const ligbox = document.querySelector('#contenedor--principal')

const imagenActiva = document.querySelector('#img-activa')

let indiceImg = 0;

const abreLigbox = (event) =>{

    imagenActiva.src = event.target.src;
    ligbox.style.display = 'flex';
    indiceImg = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) =>{
    imagen.addEventListener('click', abreLigbox);
});

//cierre ligbox

btnCierra.addEventListener('click', () =>{
    ligbox.style.display = 'none';
});
