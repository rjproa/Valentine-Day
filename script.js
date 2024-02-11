function mostrarModal() {
  document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

function cambiarTextoNo() {
  const botonNo = document.getElementById('no');
  const textosNo = ["¿Estás segura?", "Piénsalo bien xfa", "de verdad no quieres :C", "No me rendiréee", "Di que si >:v", "Eres tu?", "Piensalo de nuevo", "Me estas bromeeeaandooo", "Ya no da risa :c"];

  if (!botonNo.dataset.indice || botonNo.dataset.indice >= textosNo.length - 1) {
    botonNo.dataset.indice = 0;
  } else {
    botonNo.dataset.indice++;
  }

  botonNo.innerHTML = textosNo[botonNo.dataset.indice];
}

function mostrarCorazon() {
  const corazonContainer = document.getElementById('corazon-container');
  const corazon = document.getElementById('corazon');
  const cancion1 = document.getElementById('cancion1');
  const cancion2 = document.getElementById('cancion2');

  // Muestra el contenedor del corazón
  corazonContainer.style.display = 'flex';

  // Inicia la animación del corazón
  corazon.classList.add('corazon-animation');

  // Reproduce ambas canciones al mismo tiempo
  Promise.all([cancion1.play(), cancion2.play()])
    .then(() => {
      // Puedes agregar lógica adicional después de que ambas canciones se hayan reproducido
    })
    .catch(error => {
      console.error('Error al reproducir las canciones:', error);
    });

  alert("Ya sabia que estabas enamorada de mi 😌🥰🥰🥰");

}
// Llamada a mostrarModal() al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  mostrarModal();
});
