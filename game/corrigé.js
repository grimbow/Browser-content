index.html
    <!-- L'ordre d'appel des feuilles JS est important. main.js appelle des fonctions présentes dans utilities.js, il faut donc charger ce dernier en premier -->
    <
    script src = "utilities.js" > < /script> <
    script src = "main.js" > < /script>


utilities.js <
    script >

    //fonction qui retourne un nombre entier compris entre un minimum et un maximum
    //la fonction attend en paramètre l'information du minimum et du maximum et retourne le nombre aléatoire
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

//fonction qui affiche un message prompt à l'utilisateur afin qu'il saisisse un nombre entier compris entre 1 et 3 (ou entre un minimum et un maximum, si on veut rendre cette fonction plus dynamique 
function requestInteger(msg, min, max) {
    var choix
    do {
        choix = parseInt(prompt(msg))
    } while (isNaN(choix) || choix < min || choix > max)
    return choix
}

<
/script>



main.js <
    script >

    //création d'une variable objet globale qui contiendra toutes les informations du jeu
    var jeu = new Object()

//toute l'initialisation du jeu se passera dans cette fonction (choix du niveau, définition des PV de chacun, etc...)
function initializeGame() {
    //dans cette fonction, il faudra faire appel aux fonctions du utilities.js afin de demander son choix à l'utilisateur et attribuer les PV aux personnages

    jeu.niveau = requestInteger("Saisir le niveau", 1, 3)
    jeu.epee = requestInteger("Saisir le choix de l'épée", 1, 3)
    jeu.armure = requestInteger("Saisir le choix de l'armure", 1, 3)

    switch (jeu.niveau) {
        case 1:
            jeu.pvDragon = getRandomInteger(150, 200)
            jeu.pvJoueur = getRandomInteger(200, 250)
            break
        case 2:
            jeu.pvDragon = getRandomInteger(200, 250)
            jeu.pvJoueur = getRandomInteger(200, 250)
            break
        case 3:
            jeu.pvDragon = getRandomInteger(200, 250)
            jeu.pvJoueur = getRandomInteger(150, 200)
            break
    }

    //-50% = 100 - 50 = 50 / 100 = 0,5
    switch (jeu.epee) {
        case 1:
            jeu.ratioEpee = 0.5
            break
        case 2:
            jeu.ratioEpee = 1
            break
        case 3:
            jeu.ratioEpee = 1.5
            break
    }

    switch (jeu.armure) {
        case 1:
            jeu.ratioArmure = 1
            break
        case 2:
            jeu.ratioArmure = 0.75
            break
        case 3:
            jeu.ratioArmure = 0.5
            break
    }



}

function calculDamageDragon() {
    var degat
    switch (jeu.niveau) {
        case 1:
            degat = getRandomInteger(10, 20)
            break
        case 2:
        case 3:
            degat = getRandomInteger(20, 30)
            break
    }
    return degat * jeu.ratioArmure
}

function calculDamagePlayer() {
    var degat
    switch (jeu.niveau) {
        case 1:
            degat = getRandomInteger(25, 30)
            break
        case 2:
            degat = getRandomInteger(15, 20)
            break
        case 3:
            degat = getRandomInteger(5, 10)
            break
    }
    return degat * jeu.ratioEpee
}

function gameLoop() {
    do {
        var vitesseD = Math.random()
        var vitesseJ = Math.random()
        var degat
        if (vitesseD > vitesseJ) {
            degat = calculDamageDragon() //dégats infligés par le dragon
            jeu.pvJoueur -= degat //jeu.pvJoueur = jeu.pvJoueur - degat
            console.log("Le dragon attaque et inflige " + degat + " pts de dégats au joueur")
        } else {
            degat = calculDamagePlayer() //dégats infligés par le joueur
            jeu.pvDragon -= degat
            console.log("Le joueur attaque et inflige " + degat + " pts de dégats au dragon")
        }
        displayPV()

    } while (jeu.pvJoueur > 0 && jeu.pvDragon > 0)
}

function displayPV() {}


initializeGame() //appel de la fonction afin qu'elle s'exécute et demande ses choix à l'utilisateur
gameLoop()

<
/script>