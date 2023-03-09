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

function createCards(projects) {
  const cardsContainer = document.querySelector('.cards-container');  
  for (let project of projects) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '18rem';
    card.style.margin = '20px';
    card.style.display = 'inline-block';
    card.style.verticalAlign = 'top';
    
    const cardImg = document.createElement('img');
    cardImg.src = project.img;
    cardImg.className = 'card-img-top';
    cardImg.style.width = '100%';
    cardImg.alt = '...';
    card.appendChild(cardImg);
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    card.appendChild(cardBody);
    
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = project.title;
    cardBody.appendChild(cardTitle);
    
    const cardDescription = document.createElement('p');
    cardDescription.className = 'card-text';
    cardDescription.textContent = project.description;
    cardBody.appendChild(cardDescription);
    
    const cardLink = document.createElement('a');
    cardLink.href = project.url;
    cardLink.className = 'btn btn-primary';
    cardLink.textContent = 'Go somewhere';
    cardBody.appendChild(cardLink);
    
    cardsContainer.appendChild(card);
  }
}

createCards(projects);