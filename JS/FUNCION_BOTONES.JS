const BOTON_ISQUIERDA = document.getElementById("boton_isquierda");
const BOTON_DERECHA = document.getElementById("boton_derecha");

let cont_slider = document.getElementById("ul");
let elementos = document.querySelectorAll(".cont_imagen");

//aplica los estilos inicialmente
for (let i of elementos) {
    i.classList.add("chico");
}
elementos[1].classList.remove("chico");


//identificacion de elementos en pantalla
let elemento_1 = 0;
let elemento_2 = 1;
let elemento_3 = 2;


let cantidad_de_elementos = cont_slider.children.length;
let incio = 3;
let valor_actual_alider = 0;

const deslizamiento_derecha = () => {
    if (incio < 4) {
        incio++;
        valor_actual_alider += 400;
        cont_slider.style.transform = `translate(${valor_actual_alider}px)`;

        elemento_1--;
        elemento_2--;
        elemento_3--;

        if (elementos[elemento_1] == undefined) {
            elementos[0].classList.remove("chico");
            elementos[1].classList.add("chico");
        }

        elementos[elemento_1].classList.add("chico");
        elementos[elemento_2].classList.remove("chico");
        elementos[elemento_3].classList.add("chico");
    }
};
BOTON_DERECHA.addEventListener("click", deslizamiento_derecha);





const deslizamiento_isquierda = () => {
    if (incio > -5) {
        incio--;
        valor_actual_alider -= 400;
        cont_slider.style.transform = `translate(${valor_actual_alider}px)`;

        elemento_1++;
        elemento_2++;
        elemento_3++;

        elementos[elemento_1].classList.add("chico");
        elementos[elemento_2].classList.remove("chico");
        elementos[elemento_3].classList.add("chico");
    }
};
BOTON_ISQUIERDA.addEventListener("click", deslizamiento_isquierda);


//arreglar el primer elemento, no se aplica el agrandado

// para agregar mas elementos a la galeria, modificar la cantidad en el grid-template-columns: repeat(6, 400px); en CSS