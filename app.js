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
console.log(btnPopup);// affiche un tableau de boutons dans la console

//initialisation et affectation des variables
const popup = document.createElement("div");
const popupContent = document.createElement("div");
const row = document.createElement("div");
const colText = document.createElement("div");
const img = document.createElement("img");
const titre = document.createElement("h3");
const par = document.createElement("p");
const btnClose = document.createElement("span");

//Creation de la popup
popup.setAttribute('id', 'popup');
popupContent.setAttribute('id', 'popup-content');
row.setAttribute('id', 'row-popup');
colText.setAttribute('id', 'col-text');
img.src = 'img/img1.jpg';
img.setAttribute('id', 'img-popup');
titre.innerText = 'Lorem ipsum dolor';
par.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore eveniet non pariatur consectetur exercitationem labore molestias sint nisi quos.';
btnClose.innerHTML = "&times;";
btnClose.setAttribute('id', 'close');

//Construction et ajout de la popup dans le html
popupContent.appendChild(btnClose);
colText.appendChild(titre);
colText.appendChild(par);
row.appendChild(img);
row.appendChild(colText);
popupContent.appendChild(row);
popup.appendChild(popupContent);
document.body.appendChild(popup);

// Quand l'utilisateur click sur <span> (x), ferme la popup
btnClose.onclick = function () {
    popup.style.display = "none";
}

// Quand l'utilisateur click ferme en dehor de la popup, ferme la popup
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

// rajoute un evenement click sur chaque bouton pour afficher la popup
for (let index = 0; index < btnPopup.length; index++) {
    btnPopup[index].addEventListener('click', () => {
        console.log(index+1);
        displayPopup(index);
    })
}

// fonction qui affiche une popup
function displayPopup(index) {
    img.src = 'img/img'+(index+1)+'.jpg';
    popup.style.display = "block";
}