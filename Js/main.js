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
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelector(".producto-agregar");
const numerito = document.querySelector(".numerito");
function cargarProductos(productosElegidos) {

   contenedorProductos.innerHTML = " ";

    productosElegidos.forEach(producto => {

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
    
    actualizarBotonesAgregar ();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }

    })
});

function actualizarBotonesAgregar () {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}
const productosEnCarrito = [];
function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find (producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton );
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    } 

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}