// ## Énoncé
// ​
// L'utilisateur saisit le mot *stone*, *leaf* ou *scissors*, l'ordinateur choisit aléatoirement l'une des trois possibilités, et la partie commence !
// ​
// ## Détails
// ​
// * Le mot peut tout aussi bien être saisi en minuscules qu'en majuscules.
// ​
// > text transform en JS : 
// 	https://devdocs.io/javascript/global_objects/string/tolowercase
// 	https://devdocs.io/javascript/global_objects/string/touppercase
// ​
// ## Rappels
// ​
// * Si le joueur et l'ordinateur font le même choix on obtient une égalité.
// * Le ciseau est écrasé par la pierre (la pierre gagne, le ciseau perd).
// * La leaf est découpée par le ciseau (le ciseau gagne, la leaf perd).
// * La pierre est enveloppée par la leaf (la leaf gagne, la pierre perd).
// ​

// /saisie utilisateur, random, , switch case'use strict'

var userTurn
var msg = "Please chose one of 3 following: stone/ leaf/ scissors"
do {
    userTurn = prompt(msg).toLowerCase()
    msg = "TYPE STONE LEAF OR SCISSORS PLEASE "
} while (userTurn != "stone" && userTurn != "leaf" && userTurn != "scissors")

console.log(userTurn)

document.write("<p>You chose " + userTurn + "</p>")
if (userTurn == "stone") {
    document.write("<img src=Img/Pierre.jpg>")
} else if (userTurn == "leaf") {
    document.write("<img src=Img/Feuille.jpg>")
} else if (userTurn == "scissors") {
    document.write("<img src=Img/Ciseaux.jpg>")
}

var cpu = Math.random() //retourne un chiffre aléatoire compris entre 0 et 1
console.log(cpu)
if (cpu <= 1 / 3) {
    var cpuTurn = "stone"
        // document.write("<img src="img/Pierre.jpg" alt="pierre">")
    document.write("<img src=Img/Pierre2.jpg>")
} else if (cpu <= 2 / 3 && cpu > 1 / 3) {
    var cpuTurn = "leaf"
        // document.write("<img src="img/Feuille.jpg" alt="feuille">")
    document.write("<img src=Img/Feuille2.jpg>")
} else {
    var cpuTurn = "scissors"
        // document.write("<img src="img/Ciseaux.jpg" alt="ciseaux">")
    document.write("<img src=Img/Ciseaux2.jpg>")
}
console.log(cpuTurn)
document.write("<p>CPU chose " + cpuTurn + "</p>")

if (userTurn === cpuTurn) {
    document.write("<h3>Draw</h3>")
} else {
    switch (userTurn) {
        case "stone":
            if (cpuTurn == "scissors") {
                document.write("<h3> Victory </h3>")
            } else {
                document.write("<h3> Defeat </h3>")
            }

            break
        case "scissors":
            if (cpuTurn == "leaf") {
                document.write("<h3> Victory </h3>")
            } else {
                document.write("<h3> Defeat </h3>")
            }
            break

        case "leaf":
            if (cpuTurn == "stone") {
                document.write("<h3> Victory </h3>")
            } else {
                document.write("<h3> Defeat </h3>")
            }
            break
    }
}


// $.ajaxSetup()