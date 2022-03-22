
const btnCierra = document.querySelector('#btn-cierra')
const btnAdelanta = document.querySelector('#btn-adelanta')
const btnRetrocede = document.querySelector('#btn-retrocede')
const imagenes = document.querySelectorAll('#galeria img')
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

//adelantar imagen

const adelantaImagen = () =>{
    if(indiceImg === imagenes.length -1){
        indiceImg = -1
    }
    imagenActiva.src = imagenes [indiceImg + 1].src;
    indiceImg++
}

btnAdelanta.addEventListener('click', adelantaImagen)

//retroceder imagen

const retrocedeImagen = () => {

    if(indiceImg === 0){
        indiceImg = imagenes.length;
    }
    imagenActiva.src = imagenes[indiceImg -1].src;
    indiceimagen --;
}

btnRetrocede.addEventListener('click', retrocedeImagen)