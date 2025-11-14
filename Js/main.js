// PRODUCTOS
const productos = [
    // Aretes
    {
        id: "aretes-01",
        titulo: "Arete 01",
        imagen: "./Imagen/aretes1.png",
        categoria: {
            nombre: "Aretes",
            id: "aretes"
        },
        precio: 1000
    },
    {
        id: "aretes-02",
        titulo: "Arete 02",
        imagen: "./Imagen/aretes2.png",
        categoria: {
            nombre: "Aretes",
            id: "aretes"
        },
        precio: 1000
    },
    {
        id: "aretes-03",
        titulo: "Arete 03",
        imagen: "./Imagen/aretes3.png",
        categoria: {
            nombre: "Aretes",
            id: "aretes"
        },
        precio: 1000
    },
    {
        id: "aretes-04",
        titulo: "Arete 04",
        imagen: "./Imagen/aretes4.png",
        categoria: {
            nombre: "Aretes",
            id: "aretes"
        },
        precio: 1000
    },
    {
        id: "aretes-05",
        titulo: "Arete 05",
        imagen: "./Imagen/aretes5.png",
        categoria: {
            nombre: "Aretes",
            id: "aretes"
        },
        precio: 1000
    },
    //collares
    {
        id: "collar-01",
        titulo: "Collar 01",
        imagen: "./Imagen/collar1.png",
        categoria: {
            nombre: "Collar",
            id: "collares"
        },
        precio: 1000
    },
    {
        id: "collar-02",
        titulo: "Collar 02",
        imagen: "./Imagen/collar2.png",
        categoria: {
            nombre: "Collar",
            id: "collares"
        },
        precio: 1000
    },
    {
        id: "collar-03",
        titulo: "Collar 03",
        imagen: "./Imagen/collar3.png",
        categoria: {
            nombre: "Collar",
            id: "collares"
        },
        precio: 1000
    },
    {
        id: "collar-04",
        titulo: "Collar 04",
        imagen: "./Imagen/collar4.png",
        categoria: {
            nombre: "Collar",
            id: "collares"
        },
        precio: 1000
    },
    {
        id: "collar-05",
        titulo: "Collar 05",
        imagen: "./Imagen/collar5.png",
        categoria: {
            nombre: "Collar",
            id: "collares"
        },
        precio: 1000
    },
    //pulseras
    {
        id: "pulsera-01",
        titulo: "Pulsera 01",
        imagen: "./Imagen/pulsera1.png",
        categoria: {
            nombre: "Pulsera",
            id: "pulseras"
        },
        precio: 1000
    },
    {
        id: "pulsera-02",
        titulo: "Pulsera 02",
        imagen: "./Imagen/pulsera2.png",
        categoria: {
            nombre: "Pulsera",
            id: "pulseras"
        },
        precio: 1000
    },
    {
        id: "pulsera-03",
        titulo: "Pulsera 03",
        imagen: "./Imagen/pulsera3.png",
        categoria: {
            nombre: "Pulsera",
            id: "pulseras"
        },
        precio: 1000
    },
    {
        id: "pulsera-04",
        titulo: "Pulsera 04",
        imagen: "./Imagen/pulsera4.png",
        categoria: {
            nombre: "Pulsera",
            id: "pulseras"
        },
        precio: 1000
    },
    {
        id: "pulsera-05",
        titulo: "Pulsera 05",
        imagen: "./Imagen/pulsera5.png",
        categoria: {
            nombre: "Pulsera",
            id: "pulseras"
        },
        precio: 1000
    },
    //reloj
    {
        id: "reloj-01",
        titulo: "Reloj 01",
        imagen: "./Imagen/reloj1..png",
        categoria: {
            nombre: "Reloj",
            id: "reloj"
        },
        precio: 1000
    },
    {
        id: "reloj-02",
        titulo: "Reloj 02",
        imagen: "./Imagen/reloj2.png",
        categoria: {
            nombre: "Reloj",
            id: "reloj"
        },
        precio: 1000
    },
    {
        id: "reloj-03",
        titulo: "Reloj 03",
        imagen: "./Imagen/reloj3.png",
        categoria: {
            nombre: "Reloj",
            id: "reloj"
        },
        precio: 1000
    },
    {
        id: "reloj-04",
        titulo: "Reloj 04",
        imagen: "./Imagen/reloj4.png",
        categoria: {
            nombre: "Reloj",
            id: "reloj"
        },
        precio: 1000
    },
    {
        id: "reloj-05",
        titulo: "Reloj 05",
        imagen: "./Imagen/reloj5.png",
        categoria: {
            nombre: "Reloj",
            id: "reloj"
        },
        precio: 1000
    }, 
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
function cargarProductos() {
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id= ${producto.id}> Agregar </button>
            </div>
        `;

        contenedorProductos.append(div);
    })

}

cargarProductos();

console.log(botonesCategorias, typeof botonesCategorias);
botonesCategorias.forEach(boton => {

    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

    })
})