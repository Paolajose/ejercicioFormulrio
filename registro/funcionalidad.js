 let formulario=document.getElementById("formulario");

let correo=document.getElementById("correo");
let usuario=document.getElementById("username");
let contraseña=document.getElementById("contraseña");


formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    data={
    correo: formData.get("correo"),
    usuario: formData.get("username"),
    contraseña: formData.get("contraseña")
    }

    
    fetch('http://localhost:3000/data', {
      method: 'POST',
      body:JSON.stringify(data),
      headers:{
       "content-type":"application/json"
      }
      })
      
       console.log(data)

       swal.fire({
        title:"Bienvenido",
        text: "Sus datos han sido guardados coreectamente",
        icon: "success",
        footer: '<span class="rojo"> Esta informacion es confidencial</span>',
       
    })
  })

   