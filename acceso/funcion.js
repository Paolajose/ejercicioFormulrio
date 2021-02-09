let formulario=document.getElementById("formulario");

let boton=document.getElementById("boton")

let usuario=document.getElementById("username");

let contraseña= document.getElementById("contraseña")

formulario.addEventListener('click', (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    usuario =formData.get("username");
    contraseña=formData.get("contraseña");

    console.log(usuario+contraseña);
})