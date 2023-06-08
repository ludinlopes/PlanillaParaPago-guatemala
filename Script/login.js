class login {
    login(){

    }
    ingresar(){
        var usuario = document.getElementById('Usuario');
        var contraseña = document.getElementById('Contraseña');
        var mensaje = document.getElementById('mensaje')
        if (usuario.value === "ludin" && contraseña.value === "1234")
        {
        console.log(usuario.value + " " +contraseña.value);
            usuario.value = "";
        
            window.location.href = 'menu.html';
        } else {
            mensaje.innerHTML = "<p>Contraseña incorrecta. Vuelva a intentarlo</p>";
            usuario.value = "";
            contraseña.value = "";
        }
    }
}


//Este evento es cuando se presiona el boton ingresar
document.getElementById('ingresar').addEventListener('click', function (){
    i = new login();
    i.ingresar();
});


//Este evento es cuando se preciona enter
document.addEventListener("keydown", function() {
    if (event.keyCode === 13) {
      // Código para ejecutar cuando se presiona Enter
        i = new login();
        i.ingresar();
    } 
      // Aquí puedes agregar la lógica que deseas realizar al presionar Enter
  });

