var burguerButton = document.getElementById('burguer-button');
var menu = document.getElementById('menu');

      burguerButton.addEventListener('click', mostrarMenu);
      function mostrarMenu(){
        menu.classList.toggle('active')
        burguerButton.classList.toggle('active')
        console.log(menu);
      };

// var vermas = document.getElementById('ver_mas');
// var descripcionproductos = document.getElementById('productos_lista');
//
//       vermas.addEventListener('click', mostrarDescripcion);
//       function mostrarDescripcion(){
//         descripcionproductos.classList.toggle('active')
//         console.log(descripcionproductos);
//       };
