import Contra from './Contra.js';

const i = new Contra();
/*************************CARGA DE MENU*****************************************/
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

/**************************ABRE LA VENTANA CONTRASEÑA***************************/
document.getElementById('producto1').addEventListener('click', function () {
    i.viewContraWindow();
    i.viewContraConten();
    i.consultar();
});
/**************************Consulta contraseña**********************************/

/*
function consultar() {

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => console.log(json));
}*/

