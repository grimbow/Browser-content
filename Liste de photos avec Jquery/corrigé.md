index.html

    <
    header >
    <
    h1 > Gestion de la souris < /h1> <
    button id = "toggle-rectangle" > Cacher / Afficher le rectangle < /button> <
    /header>

<
main >
    <
    p > Survolez à la souris le rectangle ci - dessous pour qu 'il change de couleur !</p> <
    p > Ou double - cliquez dessus...: -) < /p> <
div class = "rectangle" > < /div> <
    /main>


main.js <
    script >

    var bouton = document.getElementById("toggle-rectangle")
var rectangle = document.querySelector(".rectangle")
    //console.log(bouton, rectangle)

bouton.addEventListener('click', onClickButton)
    //document.getElementById("toggle-rectangle").addEventListener('click', appel fonction)

function onClickButton() {
    //on rentre dans cette fonction quand on clique sur le bouton
    //cacher ou afficher le bouton
    if (rectangle.classList.contains('hide')) {
        // Pour afficher : on lui enlève la classe .hide
        rectangle.classList.remove('hide')
    } else {
        //Pour cacher : on applique la classe .hide au rectangle
        rectangle.classList.add('hide')
    }
    //rectangle.classList.toggle('hide')
}

rectangle.addEventListener('mouseover', rectHover)

function rectHover() {
    rectangle.classList.add('important')
}


rectangle.addEventListener('dblclick', rectDbl)

function rectDbl() {
    rectangle.classList.add('good')
}


rectangle.addEventListener('mouseout', rectOut)

function rectOut() {
    rectangle.classList.remove('important')
    rectangle.classList.remove('good')
}

<
/script>

style.css <
    style >

    .hide {
        display: none;
    }

.rectangle {
    height: 300 px;
    width: 400 px;
    background - color: royalblue;
    border - radius: 25 px;
    margin - top: 30 px
}


.important {
    background - color: firebrick;
}

.good {
    background - color: limegreen;
}


<
/style>