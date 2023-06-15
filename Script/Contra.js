export default class Contra {
    constructor() {
    }

    consultar() {
        var datos = "";
        var url = "http://localhost:5069/api/contra/88";
        const noDoc = document.getElementById('code');
        const nit = document.getElementById('nit');
        const nombre = document.getElementById('nombre');
        const sucursal = document.getElementById('mySelect');
        const comentario = document.getElementById('coment');
        const ordenCompra = document.getElementById('noOc');
        const encargado = document.getElementById('encargado');
        const facturas = document.getElementById('facturas');
        const docnum = document.getElementById('nodoc');
        const cancelado = document.getElementById('cancelado');
        const estado = document.getElementById('estado');
        const fechaen = document.getElementById('fechaen');

        fetch(url)
            .then(r => r.json())
            .then((respuesta) => {
                /*console.log(respuesta);*/
                docnum.value = respuesta.docEntry;
                cancelado.value = respuesta.canceled;
                estado.value = respuesta.status;
                fechaen.value = respuesta.createDate;
                noDoc.value = respuesta.u_CardCode;
                nit.value = respuesta.u_Nit;
                nombre.value = respuesta.u_CardName;
                sucursal.value = respuesta.u_Sucursal;
                comentario.value = respuesta.u_Memo;
                ordenCompra.value = respuesta.u_BaseNum;
                encargado.value = respuesta.u_encargado;
                console.log(respuesta.detalles);
                respuesta.detalles.map(
                    function (detalle) {
                        datos += '<tr>';
                        datos += '<td class = "id" >'+ "prueba" + '</td>';
                        datos += '<td Class = "no_fac">'+ detalle.u_NoFact + '</td>';
                        datos += '<td Class = "fecha">'+ detalle.u_Fecha + '</td>';
                        datos += '<td class = "monto">'+ detalle.u_ValorFact + '</td>';
                        //datos += '<td>'+ detalle.u_Memo + '</td>';
                        datos += '<td>'
                        datos += '<button class = "boton1">Editar</button>';
                        datos += '<button class = "boton2">Borrar</button>';
                        datos += '</td>';
                        datos += '</tr>';
                        
                        

                    }
                );
                return facturas.innerHTML = datos;
            })
            .catch(console.log);
    }

    viewContraWindow() {
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
    viewContraConten() {

        var contenido = document.getElementById('window-content');
        var titulo = document.getElementById('window-title')
        titulo.innerHTML = 'Contraseña'
        contenido.innerHTML =
            '<div class = "encabezado">'
            + '<div class = "datos1">'
            + '<label class = "cont">No de Documento</label>'
            + '<input class = "texto" type = text id = "nodoc">'
            + '<label class = "cont">Código</label>'
            + '<input class = "texto" type = text id = "code">'
            + '<label class = "cont">Nit</label>'
            + '<input class = "texto" type = text id = "nit">'
            + '<label class = "cont">Nombre</label>'
            + '<input class = "texto" type = text id = "nombre" >'
            + '<label class = "cont">Sucursal</label>'
            + '<select class = "texto" id="mySelect">'
            + '<option value="Ricza">Ricza</option>'
            + '<option value="Servicocinas">Servicocinas</option>'
            + '</select>'
            + '<label class = "cont">Comentario</label>'
            + '<input class = "texto" type = text id = "coment">'
            + '</div>'

            + '<div class = "datos2">'
            + '<label class = "cont">Cancelado</label>'
            + '<input class = "texto" type = text id = "cancelado">'
            + '<label class = "cont">Estado</label>'
            + '<input class = "texto" type = text id = "estado">'
            + '<label class = "cont">Fecha</label>'
            + '<input class = "texto" type = text id = "fechaen">'
            + '<label class = "cont">Orden de compra</label>'
            + '<input class = "texto" type = text id = "noOc">'
            + '<label class = "cont">Encargado</label>'
            + '<input class = "texto" type = text id = "encargado">'
            + '</div>'
            + '</div>'

            + '<div class = "detalle">'
            + '<table>'
            + '<thead>'
            + '<tr>'
            + '<th><p class = "id">id Linea</p></th>'
            + '<th><p Class = "no_fac">No. Factura</p></th>'
            + '<th><p Class = "fecha">Fecha</p></th>'
            + '<th><p Class = "monto">Monto</p></th>'
            + '<th class = "agregar" id = "agregar"><button>Agregar linea</button></th>'
            + '</tr>'
            + '</thead>'
            + '<tbody id = "facturas">'
            + '</tbody>'
            + '</table>'
            + '</div>'
            ;
    }

}