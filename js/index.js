const button = document.getElementById("buttonText");
const input = document.getElementById("inputText");

button.addEventListener("click",function(e){
    localStorage.setItem("datavalue", input.value);
})