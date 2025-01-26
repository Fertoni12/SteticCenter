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

// Inicializamos todas las comparaciones en la página
window.onload = function() {
  comparisons.forEach(initializeComparison);
};



