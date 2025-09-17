// Datos de ejemplo (debes reemplazarlos con tu información real)
const habilidades = [
    { nombre: "JavaScript", nivel: "Avanzado" },
    { nombre: "HTML/CSS", nivel: "Avanzado" },
    { nombre: "React", nivel: "Intermedio" },
    { nombre: "Node.js", nivel: "Intermedio" },
    { nombre: "Python", nivel: "Intermedio" },
    { nombre: "Git", nivel: "Avanzado" }
];

const proyectos = [
    { 
        nombre: "Proyecto 1", 
        descripcion: "Descripción del proyecto 1", 
        imagen: "https://via.placeholder.com/300x200?text=Proyecto+1",
        enlace: "#"
    },
    { 
        nombre: "Proyecto 2", 
        descripcion: "Descripción del proyecto 2", 
        imagen: "https://via.placeholder.com/300x200?text=Proyecto+2",
        enlace: "#"
    },
    { 
        nombre: "Proyecto 3", 
        descripcion: "Descripción del proyecto 3", 
        imagen: "https://via.placeholder.com/300x200?text=Proyecto+3",
        enlace: "#"
    }
];

// Función para cargar habilidades
function cargarHabilidades() {
    const contenedor = document.querySelector('.habilidades-container');
    
    habilidades.forEach(habilidad => {
        const elemento = document.createElement('div');
        elemento.classList.add('habilidad');
        elemento.innerHTML = `
            <h3>${habilidad.nombre}</h3>
            <p>Nivel: ${habilidad.nivel}</p>
        `;
        contenedor.appendChild(elemento);
    });
}

// Función para cargar proyectos
function cargarProyectos() {
    const contenedor = document.querySelector('.proyectos-container');
    
    proyectos.forEach(proyecto => {
        const elemento = document.createElement('div');
        elemento.classList.add('proyecto');
        elemento.innerHTML = `
            <img src="${proyecto.imagen}" alt="${proyecto.nombre}">
            <div class="proyecto-info">
                <h3>${proyecto.nombre}</h3>
                <p>${proyecto.descripcion}</p>
                <a href="${proyecto.enlace}" target="_blank">Ver proyecto</a>
            </div>
        `;
        contenedor.appendChild(elemento);
    });
}

// Manejo del formulario de contacto
document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te responderé pronto.');
    this.reset();
});

// Efectos visuales adicionales
function agregarEfectosSangre() {
    const titulos = document.querySelectorAll('h1, h2');
    titulos.forEach(titulo => {
        titulo.classList.add('sangre-efecto');
    });
}

// Inicializar cuando el documento esté cargado
document.addEventListener('DOMContentLoaded', function() {
    cargarHabilidades();
    cargarProyectos();
    agregarEfectosSangre();
});
