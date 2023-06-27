// MENU RESPONSIVE --------------------------------------------------------------------------------------------------------------------------------------------------
const nav = document.querySelector("#nav");
const menu = document.querySelector("#menu");
const abrir_menu = document.querySelector("#abrir_menu");
const cerrar_menu = document.querySelector("#cerrar_menu");

abrir_menu.addEventListener("click", () => {
    abrir_menu.classList.add("ocultar");
    abrir_menu.classList.remove ("mostrar", "visible");
    cerrar_menu.classList.add("mostrar", "visible");
    nav.classList.add("h-40rem");
    menu.classList.add("visible");
    menu.classList.remove("ocultar");
})

cerrar_menu.addEventListener("click", () => {
    cerrar_menu.classList.add("ocultar");
    cerrar_menu.classList.remove("mostrar", "visible");
    abrir_menu.classList.add("mostrar", "visible");
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

// FUNCIONAMIENTO DEL CARRITO ----------------------------------------------------------------------------------------------------------------------------------------
let carrito_list = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito_list.push({ name: nombre, price: precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoItems = document.getElementById("carrito-items");
    const carritoTotal = document.getElementById("carrito-total");

    carritoItems.innerHTML = "";

    carrito_list.forEach(item => {
    const li_html = document.createElement("li");
    li_html.classList.add("li_js");
    li_html.innerText = item.name + " - $" + item.price;
    carritoItems.appendChild(li_html);
    });

    carritoTotal.innerText = total;
}

function vaciarCarrito() {
    carrito_list = [];
    total = 0;
    actualizarCarrito();
}

function comprar() {
    carrito_list = [];
    total = 0;
    actualizarCarrito();
    alert ("Gracias por comprar en Arbore!\nNos comunicaremos contigo para procesar el pago y organizar el envío.")
}