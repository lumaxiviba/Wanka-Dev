//Codigo para el Responsive Design
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});
//Realizando animaciones
ScrollReveal().reveal(".hero-image", { delay: 100 });
ScrollReveal().reveal(".news-cards", { delay: 300 });
ScrollReveal().reveal(".cards-banner-one", { delay: 300 });
ScrollReveal().reveal(".cards-banner-two", { delay: 300 });

ScrollReveal().reveal(".box-article", { delay: 300 });
ScrollReveal().reveal(".cards-banner-one", { delay: 300 });
ScrollReveal().reveal(".cards-banner-two", { delay: 300 });
ScrollReveal().reveal(".fas", { delay: 300 });

// BUSCADOR DE CONTENIDO

// Ejecutando las funciones
document
  .getElementById("icon-search")
  .addEventListener("click", mostrarBuscador);
document
  .getElementById("cover-ctn-search")
  .addEventListener("click", ocultar_buscador);

//Declarando mis variables
let bars_search = document.getElementById("ctn-bars-search");
let cover_ctn_search = document.getElementById("cover-ctn-search");
let input_search = document.getElementById("inputSearch");
let box_search = document.getElementById("box-search");

//Funcion para mostrar el buscador
function mostrarBuscador() {
  bars_search.style.top = "80px";
  cover_ctn_search.style.display = "block";
  input_search.focus();
}

//Función para ocultar el buscador
function ocultar_buscador() {
  bars_search.style.top = "-100px";
  cover_ctn_search.style.display = "none";
  input_search.value = "";
}

//Creando mi filtrado de busqueda
document
  .getElementById("inputSearch")
  .addEventListener("keyup", buscador_interno);

function buscador_interno() {
  let filter = input_search.value.toUpperCase();
  let li = box_search.getElementsByTagName("li");

  //Recorriendo elementos a filtrar
  for (i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    let text_value = a.textContent || a.innerText;

    if (text_value.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
      box_search.style.display = "block";
    }
  }
}
