//CODIGO DE MENU RESPONSIVE
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', function() {
      navbar.classList.toggle('menu-active');
    });
  });

//CODIGO DE SLIDER
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-images img');
const dots = document.querySelectorAll('.dot');

function changeSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Cambiar la imagen mostrada
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slider-images').style.transform = `translateX(${-currentSlide * slideWidth}px)`;

  // Actualizar los puntos
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentSlide) {
      dot.classList.add('active');
    }
  });
}

// Inicializar el primer punto como activo
dots[currentSlide].classList.add('active');


// Automatiza el cambio de imagen cada 3 segundos
setInterval(() => {
    changeSlide(1); // Pasa una imagen automáticamente cada 3 segundos
}, 3000);

// _________________________________________________________________

 // Eventos para los botones de cambio de imagen
// Seleccionamos todas las comparaciones
var comparisons = document.querySelectorAll(".comparison");

function initializeComparison(comparison) {
  // Seleccionamos elementos dentro de cada contenedor de comparación
  var divisor = comparison.querySelector(".divisor"),
      handle = comparison.querySelector(".handle"),
      slider = comparison.querySelector("input[type=range]");

  // Función para mover el divisor
  function moveDivisor() {
    handle.style.left = slider.value + "%";
    divisor.style.width = slider.value + "%";
  }

  // Evento para actualizar la posición del divisor al cambiar el slider
  slider.addEventListener("input", moveDivisor);

  // Inicializamos la posición del divisor
  moveDivisor();
}

// Variables para manejar el desplazamiento entre casos
let currentMoldeoIndex = 0;
let currentFacialIndex = 0;

// Casos de moldeo y facial
const moldeoCasos = document.querySelectorAll('.caso.moldeo');
const facialCasos = document.querySelectorAll('.caso.facial');

function showMoldeoCase(index) {
  moldeoCasos.forEach((caso, i) => {
    caso.style.display = (i === index) ? 'block' : 'none';
  });
}

function showFacialCase(index) {
  facialCasos.forEach((caso, i) => {
    caso.style.display = (i === index) ? 'block' : 'none';
  });
}

// Funciones para mover los casos
function nextMoldeoCase() {
  currentMoldeoIndex = (currentMoldeoIndex + 1) % moldeoCasos.length;
  showMoldeoCase(currentMoldeoIndex);
}

function prevMoldeoCase() {
  currentMoldeoIndex = (currentMoldeoIndex - 1 + moldeoCasos.length) % moldeoCasos.length;
  showMoldeoCase(currentMoldeoIndex);
}

function nextFacialCase() {
  currentFacialIndex = (currentFacialIndex + 1) % facialCasos.length;
  showFacialCase(currentFacialIndex);
}

function prevFacialCase() {
  currentFacialIndex = (currentFacialIndex - 1 + facialCasos.length) % facialCasos.length;
  showFacialCase(currentFacialIndex);
}

// Inicializamos todas las comparaciones y mostramos el primer caso al cargar la página
window.onload = function() {
  comparisons.forEach(initializeComparison);  // Inicializa las comparaciones
  showMoldeoCase(currentMoldeoIndex);  // Muestra el primer caso de moldeo
  showFacialCase(currentFacialIndex);  // Muestra el primer caso facial
};


//_______________

