
class menu {
  menu() {
  }

  abrir() {

    const movableDiv = document.getElementById("movableDiv");
    const closeButton = document.getElementById("closeButton");

    movableDiv.style.display = "inline-block";

    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    movableDiv.addEventListener("mousedown", function (event) {
      isDragging = true;
      offsetX = event.clientX - movableDiv.offsetLeft;
      offsetY = event.clientY - movableDiv.offsetTop;
    });

    document.addEventListener("mousemove", function (event) {
      if (isDragging) {
        movableDiv.style.left = event.clientX - offsetX + "px";
        movableDiv.style.top = event.clientY - offsetY + "px";
      }
    });

    document.addEventListener("mouseup", function () {
      isDragging = false;
    });

    closeButton.addEventListener("click", function () {
      movableDiv.style.display = "none";
    });

  }


  conteContra() {




    var contenido = document.getElementById('window-content');
    var titulo = document.getElementById('window-title')
    titulo.innerHTML = 'Contraseña'
    contenido.innerHTML =
      '<div class = "encabezado">'
      + '<div class = "datos1">'
      + '<label class = "cont">No de Documento</label>'
      + '<input class = "texto" type = text >'
      + '<label class = "cont">Código</label>'
      + '<input class = "texto" type = text >'
      + '<label class = "cont">Nit</label>'
      + '<input class = "texto" type = text >'
      + '<label class = "cont">Nombre</label>'
      + '<input class = "texto" type = text >'
      + '<label class = "cont">Sucursal</label>'
      + '<select class = "texto" id="mySelect">'
      + '<option>Ricza</option>'
      + '<option>Servicocinas</option>'
      + '</select>'
      
      + '<label class = "cont">Comentario</label>'
      + '<input class = "texto" type = text >'
      + '</div>'
      + '<div class = "datos2">'
      + '<label class = "cont">No de Documento</label>'
      + '<input class = "texto" type = text >'
      + '<label class = "cont">Código</label>'
      + '<input class = "texto" type = text >'
      + '<label class = "cont">Nit</label>'
      + '<input class = "texto" type = text >'
      + '<label class = "cont">Nombre</label>'
      + '<input class = "texto" type = text >'
      + '</div>'
      + '</div>'
      + '<div class = "detalle">'
      + '<table>'
      + '<tr>'
      + '<th><p class = "id">id Linea</p></th>'
      + '<th><p Class = "no_fac">No. Factura</p></th>'
      + '<th><p Class = "fecha">Fecha</p></th>'
      + '<th><p Class = "monto">Monto</p></th>'
      + '<th class = "agregar"><button>Agregar linea</button></th>'
      + '</tr>'
      + '<tr>'
      + '<td><p class = "id">Dato 1</p></td>'
      + '<td><p class = "no_fac">Dato 2</p></td>'
      + '<td><p class = "fecha">Dato 3</p></td>'
      + '<td><p class = "monto">Dato 4</p></td>'
      + '<td>'
      + '<button class = "boton1">Editar</button>'
      + '<button class = "boton2">Borrar</button>'
      + '</td>'
      + '</tr>'
      + '</table>'
      + '</div>'
      ;
  }
}



document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu > li");


  menuItems.forEach(function (item) {
    const submenu = item.querySelector(".submenu");
    const menuItemLink = item.querySelector("a");

    menuItemLink.addEventListener("click", function (event) {
      event.preventDefault();
      submenu.classList.toggle("active");
    });
  });
});




function abrirContra() {

  const i = new menu();
  i.abrir();
  i.conteContra();

}

