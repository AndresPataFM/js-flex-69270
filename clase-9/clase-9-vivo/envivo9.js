// swal
// https://sweetalert2.github.io/

const btnSwal = document.getElementById("btnSwal")

btnSwal.addEventListener("click", ()=>{
  try {
    Swal.fire({
      title: "¡Para loco!",
      text: "No me gusta que me toquen",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Entiendo",
      cancelbuttontext:"lo voy a volver a hacer",
      backdrop: `
      rgba(123,0,0,0.4)`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "gracias",
          text: "Aprecio que me respetes.",
          icon: "success"
        });
      } else {
        Swal.fire({
          imageUrl:"https://cdn-icons-png.flaticon.com/512/4332/4332656.png" 
        });
      }
    })
  } catch (error) {
    console.error("este es el error:",error)
  }
})

/* Esto esta mal porque se ejecuta en el parámetro
btnSwal.addEventListener("click",Swal.fire({
  title: "The Internet?",
  text: "That thing is still around?",
  icon: "question"
  })
) */


// toastify
// https://apvarun.github.io/toastify-js/

const btnToastify = document.querySelector("#botonToastify")

btnToastify.addEventListener("click",function(){
  Toastify({
    text: "Producto Eliminado",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, green, red)",
    }// Callback after click
  }).showToast();
  // funcion que borra el producto
  btnToastify.disabled = true
  setTimeout(()=>{
    btnToastify.disabled = false
  }, 3000)
})

// Luxon
// https://moment.github.io/luxon/#/?id=luxon

let DateTime = luxon.DateTime;
console.dir(DateTime)
console.log(DateTime.now())
console.log(DateTime.now().toLocaleString(DateTime.DATETIME_SHORT))
console.log(DateTime.now().toLocaleString(DateTime.DATETIME_LONG))
console.log(DateTime.now().zoneName)
