const btnJap = document.getElementById("JaP1");

const carouselDefault = document.getElementById("screenS-default");
const descriptionDefault = document.getElementById("des-default");

const btnProject1 = document.getElementById("project1");//BOTONES PARA MOSTRAR SEGUN SE SELECCIONE
const btnProject2 = document.getElementById("project2");
const btnProject3 = document.getElementById("project3");

const pageYcode1 = document.getElementById("PyC1");
const pageYcode2 = document.getElementById("PyC2");
const pageYcode3 = document.getElementById("PyC3");

const carousel1 = document.getElementById("screenS-ecommerce");
const carousel2 = document.getElementById("screenS-crud");
const carousel3 = document.getElementById("screenS-inventory");

const description1 = document.getElementById("des-ecommerce");
const description2 = document.getElementById("des-crud");
const description3 = document.getElementById("des-inventory");

let number = 0;

const btnPage1 = document.getElementById("page1");
const btnCode1 = document.getElementById("code1");

const btnPage2 = document.getElementById("page2");
const btnCode2 = document.getElementById("code2");

const btnPage3 = document.getElementById("page3");
const btnCode3 = document.getElementById("code3");


verRubrica()

btnPage1.addEventListener('click',()=>{
  abrirNuevoTab("https://ayelentatto.github.io/Plan-Ceibal-e-commerce-JAP/")
});
btnPage2.addEventListener('click',()=>{
  abrirNuevoTab("https://yaoming16.github.io/Entrega-7-Grupal-JaP/")
});
btnPage3.addEventListener('click',()=>{
  abrirNuevoTab("https://ayelentatto.github.io/inventory-control/")
});


function abrirNuevoTab(url) {
  // Abrir nuevo tab
  var win = window.open(url, '_blank');
  // Cambiar el foco al nuevo tab (punto opcional)
  win.focus();
}






function verRubrica() {
  btnJap.addEventListener('click', () => {
    abrirNuevoTab("https://drive.google.com/file/d/1-raFaU9XfRYG9GMOUfHvVV7GTIAkH8lw/view?usp=sharing")
  })
}





const showProject = () => {

  btnProject1.addEventListener("click", () => {
    number = 1;
    console.log(number)
    switch (number) {
      case 1:
        carouselDefault.classList.add("d-none");
        descriptionDefault.classList.add("d-none");
        pageYcode1.classList.remove("d-none");
        pageYcode1.classList.add("d-inline-Block");
        carousel1.classList.remove("d-none");
        carousel1.classList.add("d-inline-Block");
        description1.classList.remove("d-none");
        description1.classList.add("d-inline-Block");// code block

        pageYcode2.classList.add("d-none");
        pageYcode2.classList.remove("d-inline-Block");
        carousel2.classList.add("d-none");
        carousel2.classList.remove("d-inline-Block");
        description2.classList.add("d-none");
        description2.classList.remove("d-inline-Block");

        pageYcode3.classList.add("d-none");
        pageYcode3.classList.remove("d-inline-Block");
        carousel3.classList.add("d-none");
        carousel3.classList.remove("d-inline-Block");
        description3.classList.add("d-none");
        description3.classList.remove("d-inline-Block");
        console.log("ecommerce");
        break;
      case 2:
        carouselDefault.classList.add("d-none");
        descriptionDefault.classList.add("d-none");

        pageYcode2.classList.remove("d-none");
        pageYcode2.classList.add("d-inline-Block");
        carousel2.classList.remove("d-none");
        carousel2.classList.add("d-inline-Block");
        description2.classList.remove("d-none");
        description2.classList.add("d-inline-Block");
        
        pageYcode1.classList.add("d-none");
        pageYcode1.classList.remove("d-inline-Block");
        carousel1.classList.add("d-none");
        carousel1.classList.remove("d-inline-Block");
        description1.classList.add("d-none");
        description1.classList.remove("d-inline-Block");

        pageYcode3.classList.add("d-none");
        pageYcode3.classList.remove("d-inline-Block");
        carousel3.classList.add("d-none");
        carousel3.classList.remove("d-inline-Block");
        description3.classList.add("d-none");
        description3.classList.remove("d-inline-Block");
        // code block
        console.log("crud")
        break;
      case 3: carouselDefault.classList.add("d-none");
      descriptionDefault.classList.add("d-none");

        pageYcode3.classList.remove("d-none");
        pageYcode3.classList.add("d-inline-Block");
        carousel3.classList.remove("d-none");
        carousel3.classList.add("d-inline-Block");
        description3.classList.remove("d-none");
        description3.classList.add("d-inline-Block");

        pageYcode1.classList.add("d-none");
        pageYcode1.classList.remove("d-inline-Block");
        carousel1.classList.add("d-none");
        carousel1.classList.remove("d-inline-Block");
        description1.classList.add("d-none");
        description1.classList.remove("d-inline-Block");

        pageYcode2.classList.add("d-none");
        pageYcode2.classList.remove("d-inline-Block");
        carousel2.classList.add("d-none");
        carousel2.classList.remove("d-inline-Block");
        description2.classList.add("d-none");
        description2.classList.remove("d-inline-Block");

        console.log("inventory")
        break;
      default:
        console.log("no seleccionado") // code block
    }
  });
  btnProject2.addEventListener("click", () => {
    number = 2;
    console.log(number);
    switch (number) {
      case 1:
        carouselDefault.classList.add("d-none");
        descriptionDefault.classList.add("d-none");
        pageYcode1.classList.remove("d-none");
        pageYcode1.classList.add("d-inline-Block");
        carousel1.classList.remove("d-none");
        carousel1.classList.add("d-inline-Block");
        description1.classList.remove("d-none");
        description1.classList.add("d-inline-Block");// code block

        pageYcode2.classList.add("d-none");
        pageYcode2.classList.remove("d-inline-Block");
        carousel2.classList.add("d-none");
        carousel2.classList.remove("d-inline-Block");
        description2.classList.add("d-none");
        description2.classList.remove("d-inline-Block");

        pageYcode3.classList.add("d-none");
        pageYcode3.classList.remove("d-inline-Block");
        carousel3.classList.add("d-none");
        carousel3.classList.remove("d-inline-Block");
        description3.classList.add("d-none");
        description3.classList.remove("d-inline-Block");
        console.log("ecommerce");
        break;
      case 2:
        carouselDefault.classList.add("d-none");
        descriptionDefault.classList.add("d-none");

        pageYcode2.classList.remove("d-none");
        pageYcode2.classList.add("d-inline-Block");
        carousel2.classList.remove("d-none");
        carousel2.classList.add("d-inline-Block");
        description2.classList.remove("d-none");
        description2.classList.add("d-inline-Block");
        
        pageYcode1.classList.add("d-none");
        pageYcode1.classList.remove("d-inline-Block");
        carousel1.classList.add("d-none");
        carousel1.classList.remove("d-inline-Block");
        description1.classList.add("d-none");
        description1.classList.remove("d-inline-Block");

        pageYcode3.classList.add("d-none");
        pageYcode3.classList.remove("d-inline-Block");
        carousel3.classList.add("d-none");
        carousel3.classList.remove("d-inline-Block");
        description3.classList.add("d-none");
        description3.classList.remove("d-inline-Block");
        // code block
        console.log("crud")
        break;
      case 3: carouselDefault.classList.add("d-none");
      descriptionDefault.classList.add("d-none");

        pageYcode3.classList.remove("d-none");
        pageYcode3.classList.add("d-inline-Block");
        carousel3.classList.remove("d-none");
        carousel3.classList.add("d-inline-Block");
        description3.classList.remove("d-none");
        description3.classList.add("d-inline-Block");

        pageYcode1.classList.add("d-none");
        pageYcode1.classList.remove("d-inline-Block");
        carousel1.classList.add("d-none");
        carousel1.classList.remove("d-inline-Block");
        description1.classList.add("d-none");
        description1.classList.remove("d-inline-Block");

        pageYcode2.classList.add("d-none");
        pageYcode2.classList.remove("d-inline-Block");
        carousel2.classList.add("d-none");
        carousel2.classList.remove("d-inline-Block");
        description2.classList.add("d-none");
        description2.classList.remove("d-inline-Block");
        
        console.log("inventory")
        break;
      default:
        console.log("no seleccionado") // code block
    }

  });
  btnProject3.addEventListener("click", () => {
    number = 3;
    console.log(number)
    switch (number) {
      case 1:
        carouselDefault.classList.add("d-none");
        descriptionDefault.classList.add("d-none");
        pageYcode1.classList.remove("d-none");
        pageYcode1.classList.add("d-inline-Block");
        carousel1.classList.remove("d-none");
        carousel1.classList.add("d-inline-Block");
        description1.classList.remove("d-none");
        description1.classList.add("d-inline-Block");// code block

        pageYcode2.classList.add("d-none");
        pageYcode2.classList.remove("d-inline-Block");
        carousel2.classList.add("d-none");
        carousel2.classList.remove("d-inline-Block");
        description2.classList.add("d-none");
        description2.classList.remove("d-inline-Block");

        pageYcode3.classList.add("d-none");
        pageYcode3.classList.remove("d-inline-Block");
        carousel3.classList.add("d-none");
        carousel3.classList.remove("d-inline-Block");
        description3.classList.add("d-none");
        description3.classList.remove("d-inline-Block");
        console.log("ecommerce");
        break;
      case 2:
        carouselDefault.classList.add("d-none");
        descriptionDefault.classList.add("d-none");

        pageYcode2.classList.remove("d-none");
        pageYcode2.classList.add("d-inline-Block");
        carousel2.classList.remove("d-none");
        carousel2.classList.add("d-inline-Block");
        description2.classList.remove("d-none");
        description2.classList.add("d-inline-Block");
        
        pageYcode1.classList.add("d-none");
        pageYcode1.classList.remove("d-inline-Block");
        carousel1.classList.add("d-none");
        carousel1.classList.remove("d-inline-Block");
        description1.classList.add("d-none");
        description1.classList.remove("d-inline-Block");

        pageYcode3.classList.add("d-none");
        pageYcode3.classList.remove("d-inline-Block");
        carousel3.classList.add("d-none");
        carousel3.classList.remove("d-inline-Block");
        description3.classList.add("d-none");
        description3.classList.remove("d-inline-Block");
        // code block
        console.log("crud")
        break;
      case 3: carouselDefault.classList.add("d-none");
      descriptionDefault.classList.add("d-none");

        pageYcode3.classList.remove("d-none");
        pageYcode3.classList.add("d-inline-Block");
        carousel3.classList.remove("d-none");
        carousel3.classList.add("d-inline-Block");
        description3.classList.remove("d-none");
        description3.classList.add("d-inline-Block");

        pageYcode1.classList.add("d-none");
        pageYcode1.classList.remove("d-inline-Block");
        carousel1.classList.add("d-none");
        carousel1.classList.remove("d-inline-Block");
        description1.classList.add("d-none");
        description1.classList.remove("d-inline-Block");

        pageYcode2.classList.add("d-none");
        pageYcode2.classList.remove("d-inline-Block");
        carousel2.classList.add("d-none");
        carousel2.classList.remove("d-inline-Block");
        description2.classList.add("d-none");
        description2.classList.remove("d-inline-Block");
        
        console.log("inventory")
        break;
      default:
        console.log("no seleccionado") // code block
    }
  })

}





function verRubrica() {
  btnJap.addEventListener('click', () => {
    abrirNuevoTab("https://drive.google.com/file/d/1-raFaU9XfRYG9GMOUfHvVV7GTIAkH8lw/view?usp=sharing")
  })
}


