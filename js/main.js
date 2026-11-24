// Menú de las tres rayas (móvil) y menú desplegable de "Productos"
(function () {
  var header = document.getElementById('encabezado');
  var burger = document.getElementById('hamburguesa');
  var item = document.querySelector('.item-productos');
  var enlace = document.getElementById('enlace-productos');
  burger.addEventListener('click', function (e) {
    e.stopPropagation();
    var abierto = header.classList.toggle('abierto');
    burger.setAttribute('aria-expanded', abierto);
  });
  enlace.addEventListener('click', function (e) {
    var tactil = window.matchMedia('(hover: none)').matches;
    var movil = window.matchMedia('(max-width: 600px)').matches;
    if (tactil && !movil && !item.classList.contains('abierto')) {
      e.preventDefault();
      item.classList.add('abierto');
    }
  });
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) {
      header.classList.remove('abierto');
      item.classList.remove('abierto');
    }
  });
})();
