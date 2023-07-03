// MENU RESPONSIVE --------------------------------------------------------------------------------------------------------------------------------------------------
const nav = document.querySelector("#nav");
const menu = document.querySelector("#menu");
const abrir_menu = document.querySelector("#abrir_menu");
const cerrar_menu = document.querySelector("#cerrar_menu");
const carrito_li = document.querySelector("#carrito-li");

abrir_menu.addEventListener("click", () => {
    abrir_menu.classList.add("ocultar");
    abrir_menu.classList.add("none");
    abrir_menu.classList.remove ("mostrar", "visible");
    cerrar_menu.classList.add("mostrar", "visible");
    cerrar_menu.classList.remove("ocultar");
    nav.classList.add("h-40rem");
    menu.classList.add("visible");
    menu.classList.remove("ocultar");
    carrito_li.classList.add("ocultar");
})

cerrar_menu.addEventListener("click", () => {
    cerrar_menu.classList.add("ocultar");
    cerrar_menu.classList.remove("mostrar", "visible");
    abrir_menu.classList.add("mostrar", "visible");
    abrir_menu.classList.remove("ocultar");
    abrir_menu.classList.remove("none");
    menu.classList.remove("visible");
    menu.classList.add("ocultar");
    nav.classList.remove("h-40rem");
})

// FUNCIONAMIENTO PARA ABRIR Y CERRAR EL CARRITO --------------------------------------------------------------------------------------------------------------------

const carrito = document.querySelector("#carrito");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    carrito.classList.add("visible");
    carrito.classList.add("carrito_responsive");
})

cerrar.addEventListener("click", () => {
    carrito.classList.remove("visible");
    carrito.classList.remove("carrito_responsive");
})

const abrir_rp = document.querySelector("#abrir-rp");

abrir_rp.addEventListener("click", () => {
    carrito.classList.add("visible");
    carrito.classList.add("carrito_responsive");
})

// FUNCIONAMIENTO DEL CARRITO ----------------------------------------------------------------------------------------------------------------------------------------
let carrito_list = [];
let total = 0;
let cont = 0;
let cont_rp = 0

function agregarAlCarrito(nombre, precio, rutaIMG) {
    carrito_list.push({ name: nombre, price: precio, rutaImagen: rutaIMG });
    total += precio;
    cont += 1
    cont_rp += 1
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoItems = document.getElementById("carrito-items");
    const carritoTotal = document.getElementById("carrito-total");
    const carritoCont = document.getElementById("carrito-cont");
    const carritoContRP = document.getElementById("carrito-cont-rp");

    carritoItems.innerHTML = "";


    carrito_list.forEach(item => {
        const li_html = document.createElement("li");
        li_html.classList.add("li_js")

        const img = document.createElement("img");
        img.src = item.rutaImagen;
        img.alt = item.name;
        img.classList.add("cart-img")
        li_html.appendChild(img);
    
        const span = document.createElement("span");
        span.classList.add("span_js")
        span.innerText = item.name + " - $" + item.price;
        li_html.appendChild(span);
    
        carritoItems.appendChild(li_html);
    });

    // carrito_list.forEach(item => {
    // const li_html = document.createElement("li");

    // const img = document.createElement("img");
    // img.src = item.rutaIMG;
    // img.alt = item.name;
    // li_html.appendChild(img);

    // li_html.classList.add("li_js");
    // li_html.innerText = item.name + " - $" + item.price;
    // carritoItems.appendChild(li_html);
    // });

    carritoTotal.innerText = total;
    carritoCont.innerText = cont;
    carritoContRP.innerText = cont_rp;
}

function vaciarCarrito() {
    carrito_list = [];
    total = 0;
    cont = 0
    cont_rp = 0
    actualizarCarrito();
}

function comprar() {
    carrito_list = [];
    total = 0;
    cont = 0
    cont_rp = 0
    actualizarCarrito();
    alert ("Gracias por comprar en Arbore!\nSu reserva ya se encuentra registrada.\nNos comunicaremos contigo para procesar el pago y organizar el envío.")
}

// FORMULARIO ------------------------------------------------------------------------------------------------------------------------------------------------------------
function validarLetras() {
    var input = document.getElementById("nombre");
    var regex = /^[a-zA-Z\s]*$/;
    
    if (!regex.test(input.value)) {
      alert("Solo se permiten letras en el campo 'Nombre y Apellido'.");
      return false;
    }
    
    return true;
  }