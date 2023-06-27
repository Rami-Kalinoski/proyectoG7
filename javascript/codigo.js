// FUNCIONAMIENTO PARA ABRIR Y CERRAR EL CARRITO --------------------------------------------------------------------------------------------------------------------

const carrito = document.querySelector("#carrito");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    carrito.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    carrito.classList.remove("visible");
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