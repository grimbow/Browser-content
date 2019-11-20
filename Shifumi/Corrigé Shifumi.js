// - Demander à l'utilisateur de choisir son jeu
// - avoir le choix de l'ordinateur
// 	- générer un nb aléatoire
//     - si ce nb est inférieur à 1/3 = pierre
//     - si ce nb est compris entre 1/3 et 2/3 = ciseaux
//     - sinon = feuille
// - comparer les 2 jeux
// 	- si le joueur et l'ordi jouent pareil = égalité
//     - sinon
//     	- si joueur a fait "pierre"
//         	- si l'ordi joue feuille = ordi gagne
//             - sinon le joueur gagne
//         - ...


var user = prompt("Choisir pierre, feuille ou ciseaux").toLowerCase()

if(user != "pierre" && user != "feuille" && user != "ciseaux")
{
alert("error : saisir p, f ou c")
} else {


var nb = Math.random() //génère un chiffre aléatoire compris entre 0 et 1
var ordi
if(nb < 1/3) {
    ordi = "pierre"
} else if ((nb >= 1/3) && (nb < 2/3)){
    ordi = "ciseaux"
} else {
    ordi = "feuille"
}
//console.log(nb,ordi)

//user = "FEuiLle"
//ordi = "feuille"

if(ordi == user){
    alert("Egalité")
    } else {
        switch(user){
            case "pierre":
                if(ordi == "feuille"){
                    alert("l'ordi gagne")
                } else {
                    alert("l'utilisateur gagne")
                }
                break
            case "feuille":
                if(ordi == "ciseaux"){
                    alert("l'ordi gagne")
                } else {
                    alert("l'utilisateur gagne")
                }
                break
            case "ciseaux":
                if(ordi == "pierre"){
                    alert("l'ordi gagne")
                } else {
                    alert("l'utilisateur gagne")
                }
                break
        }
    }
}



