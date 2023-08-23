/*item agregar limpiar*/
const iteminput = document.getElementById("item");
const buttonagregar = document.getElementById("agregar");
const buttonlimpiar = document.getElementById("limpiar");
const contenedor = document.getElementById("contenedor");
const msgdisplay = []
buttonagregar.addEventListener("click",function(){
    if(iteminput.value.length > 0){
        msgdisplay.push(iteminput.value)
        localStorage.setItem("array",msgdisplay + "\n");
        iteminput.value = "";
    }
        contenedor.innerHTML += `<li>${msgdisplay[msgdisplay.length - 1]}</li>`;
    
})
buttonlimpiar.addEventListener("click",function(){
     localStorage.removeItem("array");
     contenedor.innerHTML= "";
})

document.addEventListener("keydown",event =>{
    if(event.code == "Enter"){
        buttonagregar.click()
    }
})