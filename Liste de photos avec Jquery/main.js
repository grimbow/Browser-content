var photos = $("#photo-list li")

//récupère un tableau qui contient toutes les photos et le stocke dans la variable "photos"

var total = $("#total em")
console.log(photos) //récupère la balise em dans p#total et la stocke dans la variable "total"

//on boucle sur le tableau de photos afin d'installer un gestionnaire d'événement sur chacune des photos

var bouton = $("toggle-selected")
    //gestionnaire d'evt -> au clic sur chaque photo, ça appellera la fonction clickPhoto()

for (var i = 0; i < photos.length; i++) {
    $(photos[i]).on('click', clickPhoto)
}

//fonction qui est appelée dès qu'on clique sur une photo, et affecte la classe selected à la photo sur laquelle on a cliqué :

function clickPhoto() {
    console.log(this)

    // this : variable magique créée automatiquement par JS qui dans une fonction appelée lors d'un événement contient la balise qui a déclenché l'événement. Ici, la balise susceptible de déclencher l'evt est une <li> donc this contient la <li> sur laquelle on a cliqué

    $(this).toggleClass('selected');
    //manipuler la classe de la <li> cliquée : si elle n'a pas la classe .selected > ça lui ajoute, sinon, ça lui enlève
    var nbphoto = $('.selected')
    console.log(nbphoto.length) //récupère un tableau qui contient toutes les li sélectionnées (qui ont la classe .selected) et on le stocke dans la variable selectedPhoto
        // total.textContent = "<i> nombre </i>" //
    total.text(nbphoto.length)
        //selectedPhoto.length = la longueur du tableau de li selectionnées = le nombre de photos sélectionnées => mettre le nombre dans la balise <em> contenue dans la variable total
}

bouton.on('click', onClickButton)
for (var photos = 0; photos < photos.total; photos++) {}

function onClickButton() {
    $(this).toggleClass('hide')
}

function selectAll() {
    photos.addClass('selected')
}