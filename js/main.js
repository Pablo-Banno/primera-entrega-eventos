const niveles = [
    { id: 1, nombre: "Amateur", precio: 0.25},
    { id: 2, nombre: "Semi-Profesional", precio: 0.50},
    { id: 3, nombre: "Profesional", precio: 0.75},
    { id: 4, nombre: "Universitario", precio: 1},
];

const servicios = [
    { id: 1, nombre: "Service 1", precio: 50},
    { id: 2, nombre: "Service 2", precio: 60},
    { id: 3, nombre: "Service 3", precio: 70},
    { id: 4, nombre: "Service 4", precio: 80},
    { id: 5, nombre: "Service 5", precio: 90},
    { id: 6, nombre: "Service 6", precio: 100},
    { id: 7, nombre: "Service 7", precio: 110},
    { id: 8, nombre: "Service 8", precio: 120},
    { id: 9, nombre: "Service 9", precio: 130},
];

let total = [];

const listadoNiveles = document.getElementById("listado_niveles")
const listadoServicios = document.getElementById("listado_servicios")

const verTotal = document.getElementById("ver_total");
const presupuestoGenerado = document.getElementById("presupuesto_generado");

niveles.forEach((nivel) => {
    let contenidoNivel = document.createElement("div");
    contenidoNivel.className = "cada_nivel"; // Clase para CSS todavía no usada
    contenidoNivel.innerHTML = `<p><input type="radio" name="nivel" id="selector_nivel">${nivel.nombre}</p>`;

    listadoNiveles.append(contenidoNivel)
})

servicios.forEach((servicio) => {
    let contenidoServicio = document.createElement("div");
    contenidoServicio.className = "cada_servicio"; // Clase para CSS todavía no usada
    contenidoServicio.innerHTML = `<p>Servicio: ${servicio.nombre} / Precio: ${servicio.precio} USD</p>`;

    let botonSumar = document.createElement("button");
    let botonRestar = document.createElement("button");
    botonSumar.innerText = "+";
    botonRestar.innerText = "-"; // Todavía no le dí funcionalidad

    listadoServicios.append(contenidoServicio, botonSumar, botonRestar);

    botonSumar.addEventListener("click", () => {
        total.push({
            Servicio: servicio.nombre,
            Precio: servicio.precio,
        })
        console.log(total);
    })

});

// ---------------------------------------------------------------------------------------------------------

verTotal.addEventListener("click", () => {

    const totalTitulo = document.createElement("div");
    totalTitulo.innerHTML = `<h4>Presupuesto generado:</h4>`;

    presupuestoGenerado.append(totalTitulo);

    total.forEach((servicio) => {
        let totalContenido = document.createElement("div");
        totalContenido.innerHTML = `<p>Servicio: ${servicio.nombre} / Precio: ${servicio.precio} USD</p>`;

        // Me toma como UNDEFINED los valores servicio.nombre y servicio.precio

        presupuestoGenerado.append(totalContenido);
    })

    const totalPresupuesto = total.reduce((acc, el) => acc + el.precio, 0);

    const totalPresupuestoCompleto = document.createElement("div");
    totalPresupuestoCompleto.innerHTML = `Total a cobrar: ${totalPresupuesto} USD`

    // Al no tomar valores, tampoco realiza el presupuesto; me da NaN

    presupuestoGenerado.append(totalPresupuestoCompleto)

})

// Necesito ayuda con, y falta agregar:
// 1. Hacer funcionar el botón "-"
// 2. Arreglar los valores que no detecta
// 3. Agregar que multiplique el total * el nivel, para que se haga el descuento correspondiente
// 4. Todo el CSS (Voy a usar bootstrap para darle formato, e ir cambiando los valores) - No necesito ayuda con esto

