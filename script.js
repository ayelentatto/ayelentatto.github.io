

let projects = [
  {
    "img": './img/screenshots/capturaEcommerce1.png',
    "title": 'E-commerce - Final Project "Jóvenes a Programar"',
    "description": 'Realización de un Proyecto E-commerce. Tecnologías: HTML , CSS , JavaScript, Node.js, Bootstrap y GitHub. Mejora de idioma Ingles en plataforma "VOXY". Competencias transversales - Proyecto Ocupacional - Autoconocimiento - Mejora de análisis FODA personal.',
    "test": 'Test Page',
    "url":'https://ayelentatto.github.io/Plan-Ceibal-e-commerce-JAP/'
  },
  {
    "img": './img/screenshots/crud1.png',
    "title": 'CRUD - Colaboration',
    "description": 'Create (Crear registros),Read bzw. Retrieve (Leer registros),Update (Actualizar registros),Delete bzw. Destroy (Borrar registros)',
    "test": 'Test Page',
    "url": 'https://yaoming16.github.io/Entrega-7-Grupal-JaP/'
  },
  {
    "img": './img/screenshots/ct1.png',
    "title": 'Inventory Control',
    "description": 'sistema que permite realizar una gestión de las existencias de un almacén, tanto en la entrada como en la permanencia o la salida. El objetivo final es la optimización de los costes y conseguir que el uso de las existencias sea el mejor',
    "test": 'Test Page',
    "url":'https://ayelentatto.github.io/inventory-control/'
  }
];
var $carousel = $('.carousel').flickity({
  // opciones de Flickity
});

function createCards(projects) {
  function CreateCards(projects) {
    let cardsHtml = ''; // variable para almacenar el HTML de las tarjetas
  
    // crea el HTML de cada tarjeta y lo agrega a la variable cardsHtml
    for (let project of projects) {
      cardsHtml += '<div class="carousel-item">' +
                   '<img src="'+ project.img +'" class="d-block w-100" alt="...">' +
                   '<div class="carousel-caption d-none d-md-block">' +
                   '<h5>'+ project.title +'</h5>' +
                   '<p>'+ project.description +'</p>' +
                   '<a href="'+ project.url +'" class="btn btn-primary" target="_blank">Ir al proyecto</a>' +
                   '</div>' +
                   '</div>';
    }
  
    // agrega las tarjetas al contenedor del carousel
    document.getElementById('cards').innerHTML = cardsHtml;
  }
  
}
$('#myCarousel').carousel({
  interval: 3000, // tiempo en milisegundos entre cada transición de tarjetas
  pause: 'hover' // pausa la transición al pasar el mouse sobre el carousel
});

createCards(projects);

