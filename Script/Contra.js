class Contra {
    Contra() {

    }
    encabezado() {
        var contenido = document.getElementById('window-content');
        var titulo = document.getElementById('window-title')
        titulo.innerHTML = 'Contraseña'
        contenido.innerHTML =
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
    }

}