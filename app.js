/*Teclado*/
const numeros = document.querySelectorAll(".numeros");
const del = document.querySelector("#del");
const reset = document.querySelector("#reset");
const signos = document.querySelectorAll(".signos");
const pantalla = document.querySelector("#number");


/*Variables globales*/
var cifra = "";
var acumulado = 0;
var sumar = false;
var restar = false;
var multiplicar = false;
var dividir = false;
var igualS = false;
var contadorIgual=0;

/*retorno global*/

const retorno = () => {
    cifra = "";
    pantalla.value = acumulado;
}
const switchFalse = () => {
    sumar = false;
    restar = false;
    multiplicar = false;
    dividir = false;
}

/*bucles------------------------------------------------------------------------*/
numeros.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        if (igualS && contadorIgual!==1) {
            igualS = false;
            acumulado=0;
            contadorIgual=0;
        }else if(igualS){
            igualS = false;
            contadorIgual=0;
        }
        cifra += elemento.value;
        pantalla.value = cifra;
    })
});

signos.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        switch (elemento.value) {
            case "+":
                suma();
                break;
            case "-":
                resta();
                break;
            case "x":
                multiplicacion();
                break;
            case "/":
                division();
                break;
            case "=":
                igualSigno();
                break;
        }
    })
})

/*--------------------------------------------------------------------------*/

/*Funciones de signos-----------------------------------------------------------*/

/*funcion suma*/
function suma() {
    if (restar && cifra !== "") {
        acumulado -= parseFloat(cifra);
        retorno();
        restar = false;
        sumar = true;
    } else if (multiplicar && cifra !== "") {
        acumulado *= parseFloat(cifra);
        retorno();
        multiplicar = false;
        sumar = true;
    } else if (dividir && cifra !== "") {
        acumulado /= parseFloat(cifra);
        retorno();
        dividir = false;
        sumar = true;
    }
    else if (cifra !== "") {
        acumulado += parseFloat(cifra);
        retorno();
        sumar = true;
    } else {
        restar = false;
        multiplicar = false;
        dividir = false;
        sumar = true;
    }
}


/*Funcion resta*/

function resta() {
    if (sumar && cifra !== "") {
        acumulado += parseFloat(cifra);
        retorno();
        sumar = false;
        restar = true;
    }
    else if (multiplicar && cifra !== "") {
        acumulado *= parseFloat(cifra);
        retorno();
        multiplicar = false;
        restar = true;
    } else if (dividir && cifra !== "") {
        acumulado /= parseFloat(cifra);
        retorno();
        dividir = false;
        restar = true;
    } else if (!restar && cifra !== "") {
        acumulado += parseFloat(cifra);
        retorno();
        restar = true;
    }
    else if (cifra !== "") {
        acumulado -= parseFloat(cifra);
        retorno();
    } else {
        sumar = false;
        multiplicar = false;
        dividir = false;
        restar = true;
    }

}

/*Funcion Multiplicar*/

function multiplicacion() {
    if (sumar && cifra !== "") {
        acumulado += parseFloat(cifra);
        retorno();
        sumar = false;
        multiplicar = true;
    } else if (restar && cifra !== "") {
        acumulado -= parseFloat(cifra);
        retorno();
        restar = false;
        multiplicar = true;
    } else if (dividir && cifra !== "") {
        acumulado /= parseFloat(cifra);
        retorno();
        dividir = false;
        multiplicar = true;
    } else if (!multiplicar && cifra !== "") {
        acumulado += parseFloat(cifra);
        retorno();
        multiplicar = true;
    } else if (cifra !== "") {
        acumulado *= parseFloat(cifra);
        retorno();
    } else {
        sumar = false;
        restar = false;
        dividir = false;
        multiplicar = true;
    }
}
function division() {
    if (sumar && cifra !== "") {
        acumulado += parseFloat(cifra);
        retorno();
        sumar = false;
        dividir = true;
    } else if (restar && cifra !== "") {
        acumulado -= parseFloat(cifra);
        retorno();
        restar = false;
        dividir = true;
    } else if (multiplicar && cifra !== "") {
        acumulado *= parseFloat(cifra);
        retorno();
        multiplicar = false;
        dividir = true;
    } else if (!dividir && cifra !== "") {
        acumulado += parseFloat(cifra);
        retorno();
        dividir = true;
    } else if (cifra !== "") {
        acumulado /= parseFloat(cifra);
        retorno();
    } else {
        sumar = false;
        restar = false;
        multiplicar = false;
        dividir = true;
    }
}




/*Funcion igual*/

function igualSigno() {
    contadorIgual+=1;
    if (sumar && cifra !== "") {
        acumulado += parseFloat(cifra);
        retorno();
        switchFalse();
    } else if (restar && cifra !== "") {
        acumulado -= parseFloat(cifra);
        retorno();
        switchFalse();
    } else if (multiplicar && cifra !== "") {
        acumulado *= parseFloat(cifra);
        retorno();
        switchFalse();
    } else if (dividir && cifra !== "") {
        acumulado /= parseFloat(cifra);
        retorno();
        switchFalse();
    }
    else if (cifra === "") {
        retorno();
        switchFalse();
        igualS = true;
        acumulado = parseFloat(pantalla.value);
    }
}

/*--------------------------------------------------------------------------*/

/*Funcion delete y restaurar------------------------------------------------*/

reset.addEventListener("click", () => {
    acumulado = 0;
    switchFalse();
    retorno();
})

del.addEventListener("click", () => {
    if (cifra !== "") {
        cifra = cifra.slice(0, -1);
        pantalla.value = cifra;
    }
})

/*--------------------------------------------------------------------------*/