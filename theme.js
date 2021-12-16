const uno = document.querySelector("#circulo1");
const dos = document.querySelector("#circulo2");
const tres = document.querySelector("#circulo3");
const body = document.querySelector("body");
const calculadora=document.querySelector("#calculadora");


uno.addEventListener("click", ()=>{
    body.style.background="hsl(222, 26%, 31%)";
    if(calculadora.classList.contains("calculadora2") || calculadora.classList.contains("calculadora3")){
        calculadora.classList.remove("calculadora2");
        calculadora.classList.remove("calculadora3");
        calculadora.classList.add("calculadora");
    }
})
dos.addEventListener("click", ()=>{
    body.style.background="hsl(0, 0%, 90%)";
    if(calculadora.classList.contains("calculadora") || calculadora.classList.contains("calculadora3")){
        calculadora.classList.remove("calculadora");
        calculadora.classList.remove("calculadora3");
        calculadora.classList.add("calculadora2");
    }

})
tres.addEventListener("click", ()=>{
    body.style.background="hsl(268, 75%, 9%)";
    if(calculadora.classList.contains("calculadora2") || calculadora.classList.contains("calculadora")){
        calculadora.classList.remove("calculadora");
        calculadora.classList.remove("calculadora2");
        calculadora.classList.add("calculadora3");
    }
})