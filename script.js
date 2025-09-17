// Efecto de partículas
function crearParticulas() {
  const contenedor = document.getElementById("particulas");
  const cantidad = 30;

  for (let i = 0; i < cantidad; i++) {
    const particula = document.createElement("div");
    particula.classList.add("particula");

    // Tamaño aleatorio entre 3 y 8px
    const tamaño = Math.random() * 5 + 3;
    particula.style.width = `${tamaño}px`;
    particula.style.height = `${tamaño}px`;

    // Posición aleatoria
    particula.style.left = `${Math.random() * 100}%`;
    particula.style.top = `${Math.random() * 100}%`;

    // Animación con delay aleatorio
    particula.style.animationDuration = `${Math.random() * 10 + 10}s`;
    particula.style.animationDelay = `${Math.random() * 5}s`;

    contenedor.appendChild(particula);
  }
}

// Navegación responsive
function setupNavegacion() {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("activo");
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("activo");
    });
  });
}

// Efecto de escritura
function setupTypedEffect() {
  const texto = "Creando soluciones con código y creatividad";
  const elemento = document.getElementById("typed");
  let index = 0;

  function escribir() {
    if (index < texto.length) {
      elemento.innerHTML =
        texto.substring(0, index + 1) + '<span class="typed-cursor">|</span>';
      index++;
      setTimeout(escribir, 100);
    }
  }

  escribir();
}

// Mostrar niveles de habilidad al hacer scroll
function setupHabilidades() {
  const niveles = document.querySelectorAll(".nivel");

  function mostrarNiveles() {
    niveles.forEach((nivel) => {
      const valor = nivel.getAttribute("data-nivel");
      nivel.style.width = `${valor}%`;
    });
  }

  // Usar Intersection Observer para activar la animación cuando las habilidades son visibles
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mostrarNiveles();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector(".habilidades"));
}

// Ocultar/mostrar header al hacer scroll
function setupHeaderScroll() {
  const header = document.getElementById("header");
  let ultimaPosicion = window.pageYOffset;

  window.addEventListener("scroll", () => {
    const posicionActual = window.pageYOffset;

    if (posicionActual > ultimaPosicion && posicionActual > 100) {
      header.classList.add("oculto");
    } else {
      header.classList.remove("oculto");
    }

    ultimaPosicion = posicionActual;
  });
}

// Inicializar todo cuando el documento esté cargado
document.addEventListener("DOMContentLoaded", () => {
  crearParticulas();
  setupNavegacion();
  setupTypedEffect();
  setupHabilidades();
  setupHeaderScroll();
});
