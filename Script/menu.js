
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
      + '<input class = "texto" type = text >'
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
      + '<th>Columna 1</th>'
      + '<th>Columna 2</th>'
      + '<th>Columna 3</th>'
      + '<th>Columna 4</th>'
      + '<th>Columna 5</th>'
      + '<th>Columna 6</th>'
      + '</tr>'
      + '<tr>'
      + '<td>Dato 1</td>'
      + '<td>Dato 2</td>'
      + '<td>Dato 3</td>'
      + '<td>Dato 4</td>'
      + '<td>'
      + '<button>Botón 1</button>'
      + '</td>'
      + '<td>'
      + '<button>Botón 1</button>'
      + '</td>'
      + '</tr>'
      + '<tr>'
      + '<td>Dato 6</td>'
      + '<td>Dato 7</td>'
      + '<td>Dato 8</td>'
      + '<td>Dato 9</td>'
      + '<td>Dato 10</td>'
      + '<td>'
      + '<button>Botón 2</button>'
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

