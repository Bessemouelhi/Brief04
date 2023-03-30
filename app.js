/***************************************CAROUSEL********************************************** */
let nb_image = 8;
let position = 0;

const container = document.getElementById('container');
const btnLeft = document.getElementById('d');
const btnRight = document.getElementById('g');

afficherBtns();

for (let index = 0; index < nb_image; index++) {
    
}

btnLeft.onclick = function() {
    if(position > -nb_image+1) {
        console.log('btnLeft');
        console.log('position : ', position);
        position--;
    }
    
    container.style.transform = "translate(" + position*200 + "px)";
    container.style.transition = "all 00.5s ease";
    afficherBtns();
}

btnRight.onclick = function() {
    if(position < 0) {
        console.log('btnRight');
        console.log('position : ', position);
        position++;
    }
    
    container.style.transform = "translate(" + position*200 + "px)";
    container.style.transition = "all 00.5s ease";
    afficherBtns();
}

function afficherBtns() {
    if(position == -nb_image+1)
        btnLeft.style.visibility = "hidden";
    else
        btnLeft.style.visibility = "visible";

    if(position == 0)
        btnRight.style.visibility = "hidden";
    else
        btnRight.style.visibility = "visible";
}


/***************************************POPUP********************************************** */

const btnPopup = document.querySelectorAll('#container button');
console.log(btnPopup);// affiche un tableau de 8 boutons dans la console