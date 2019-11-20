// var player = prompt("Entrez votre nom")
// console.log(player)
var playerHP
var dragonHP
var difficulty
var weapon
var weaponDM
var armor
var armorDR
var turn = 0


function random(min, max) {
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 3

// document.write("<p> Bienvenue, heros " + player + " ! </p>")

function requestInteger(min, max, phrase) {
    do {
        var dudule = prompt(phrase)
    } while (isNaN(dudule) || dudule < min || dudule > max)

    return dudule

}



function initializeGame() {
    difficulty = requestInteger(1, 3, "Difficulte")
    weapon = requestInteger(1, 3, "Arme")
    armor = requestInteger(1, 3, "Armure")

    switch (difficulty) {
        case '1':
            dragonHP = random(150, 200)
            playerHP = random(200, 250)
            break

        case '2':
            dragonHP = random(200, 250)
            playerHP = random(200, 250)
            break

        case '3':
            dragonHP = random(200, 250)
            playerHP = random(150, 200)
            break
    }

    switch (weapon) {
        case '1':
            weaponDM = 0.5
            break
        case '2':
            weaponDM = 1
            break

        case '3':
            weaponDM = 1.5
            break
    }
    switch (armor) {
        case '1':
            armorDR = 1
            break
        case '2':
            armorDR = 0.75
            break

        case '3':
            armorDR = 0.5
            break
    }
    var param = {
        niveau: difficulty,
        arme: weaponDM,
        armure: armorDR,
        playerHP: playerHP,
        dragonHP: dragonHP
    }
    return param
}

// function attackD(level, armor, critDrake) {

//     switch (level) {
//         case '1':
//             var dragondmg = random(10, 20) * armor
//             break

//         case '2':
//             var dragondmg = random(20, 30) * armor
//             break

//         case '3':
//             var dragondmg = random(20, 30) * armor
//             break
//     }
//     return dragondmg
// }

function attackD(level, armor, critDrake) {

    switch (level) {
        case '1':
            if (critDrake == 1) {
                var dragondmg = random(10, 20) * armor * 0;
                document.write("<p>Miss</p>")
            } else if (critDrake == 2) {
                var dragondmg = random(10, 20) * armor * 0.5;
                document.write("<p>Graze</p>")
            } else if (critDrake == 3) {
                var dragondmg = random(10, 20) * armor;
                document.write("<p>Hit</p>")
            } else {
                var dragondmg = random(10, 20) * armor * 1.5;
                document.write("<p>CRIT!</p>")
            }
            break

        case '2':
            if (critDrake == 1) {
                var dragondmg = random(20, 30) * armor * 0;
                document.write("<p>Miss</p>")
            } else if (critDrake == 2) {
                var dragondmg = random(20, 30) * armor * 0.5;
                document.write("<p>Grazed</p>")
            } else if (critDrake == 3) {
                var dragondmg = random(20, 30) * armor;
                document.write("<p>Hit</p>")
            } else {
                var dragondmg = random(20, 30) * armor * 1.5;
                document.write("<p>CRIT!</p>")
            }
            break

        case '3':
            if (critDrake == 1) {
                var dragondmg = random(20, 30) * armor * 0;
                document.write("<p>Miss</p>")
            } else if (critDrake == 2) {
                var dragondmg = random(20, 30) * armor * 0.5;
                document.write("<p>Graze</p>")
            } else if (critDrake == 3) {
                var dragondmg = random(20, 30) * armor;
                document.write("<p>Hit</p>")
            } else {
                var dragondmg = random(20, 30) * armor * 1.5;
                document.write("<p>CRIT!</p>")
            }
            break
    }
    return dragondmg
}


var objetJeu = initializeGame()

function attackK(level, weapon, critKnight) {

    switch (level) {
        case '1':
            if (critKnight == 1) {
                var knightdmg = random(10, 20) * weapon * 0;
                document.write("<p>Miss</p>")
            } else if (critKnight == 2) {
                var knightdmg = random(10, 20) * weapon * 0.5;
                document.write("<p>Graze</p>")
            } else if (critKnight == 3) {
                var knightdmg = random(10, 20) * weapon;
                document.write("<p>Hit</p>")
            } else {
                var knightdmg = random(10, 20) * weapon * 1.5;
                document.write("<p>CRIT!</p>")
            }
            break

        case '2':
            if (critKnight == 1) {
                var knightdmg = random(20, 30) * weapon * 0;
                document.write("<p>Miss</p>")
            } else if (critKnight == 2) {
                var knightdmg = random(20, 30) * weapon * 0.5;
                document.write("<p>Grazed</p>")
            } else if (critKnight == 3) {
                var knightdmg = random(20, 30) * weapon;
                document.write("<p>Hit</p>")
            } else {
                var knightdmg = random(20, 30) * weapon * 1.5;
                document.write("<p>CRIT!</p>")
            }
            break

        case '3':
            if (critKnight == 1) {
                var knightdmg = random(20, 30) * weapon * 0;
                document.write("<p>Miss</p>")
            } else if (critKnight == 2) {
                var knightdmg = random(20, 30) * weapon * 0.5;
                document.write("<p>Graze</p>")
            } else if (critKnight == 3) {
                var knightdmg = random(20, 30) * weapon;
                document.write("<p>Hit</p>")
            } else {
                var knightdmg = random(20, 30) * weapon * 1.5;
                document.write("<p>CRIT!</p>")
            }
            break
    }
    return knightdmg
}

document.write("<h2>FIGHT STARTED</h2><p>  Knight starts with " + objetJeu.playerHP + " Hit Points <br> Dragon starts with " + objetJeu.dragonHP + " Hit Points </p>")

do {
    var critK = random(1, 4)
    console.log(critK)
    var critD = random(1, 4)
    var playerHP = objetJeu.playerHP
    var dragonHP = objetJeu.dragonHP
    turn++
    var winner = 'dragon'
    var initiative = random(1, 2)
    document.write("=== TURN " + turn + "===")
    if (initiative === 1) {
        objetJeu.dragonHP = objetJeu.dragonHP - attackK(objetJeu.niveau, objetJeu.arme, critK)
        document.write("<p> Knight attacks for " + attackK(objetJeu.niveau, objetJeu.arme, critK) + " damage : <br> Dragon has " + objetJeu.dragonHP + "</p>")

    } else {
        objetJeu.playerHP = objetJeu.playerHP - attackD(objetJeu.niveau, objetJeu.armure)
        document.write("<p> Dragon attacks for  " + attackD(objetJeu.niveau, objetJeu.armure) + " damage :<br> Chevalier has " + objetJeu.playerHP + "</p>")
    }

    if (objetJeu.playerHP > objetJeu.dragonHP) {
        winner = 'knight'
    }

} while (objetJeu.playerHP > 0 && objetJeu.dragonHP > 0)


document.write('<img src=\"images/' + winner + '.jpg\"/>')
document.write("<h2>" + winner + " wins </h2>")

/*
do {
    difficulty = prompt("choisir une difficultee: Facile / Moyen / Difficile")
    console.log(difficulty)
} while (difficulty != "facile" && difficulty != "moyen" && difficulty != "difficile")

switch (difficulty) {
    case "facile":
        dragonhp = random(150, 200), playerHP = random(200, 250);
        break

    case "moyen":
        dragonhp = random(200, 250), playerHP = random(200, 250);
        break

    case "difficile":
        dragonhp = random(200, 250), playerHP = random(150, 200);
        break
}
console.log(dragonHP)
console.log(playerHP)

do {
    weapon = prompt("choisir un type d'épée: bois / acier / excalibur")
    console.log(weapon)
} while (weapon != "bois" && weapon != "acier" && weapon != "excalibur")

switch (weapon) {
    case "bois":
        weaponDM = 5;
        break

    case "acier":
        weaponDM = 5;
        break

    case "excalibur":
        weaponDM = 5;
        break
}
*/
// function attackK(level, weapon) {
//     switch (level) {
//         case '1':
//             if (critKnight = 1) { var knightdmg = random(10, 20) * weapon * 0 } else if (critKnight = 2) { var knightdmg = random(10, 20) * weapon * 0.5 } else if (critKnight = 3) { var knightdmg = random(10, 20) * weapon } else { var knightdmg = random(10, 20) * weapon * 1.5 }
//             break

//         case '2':
//             if (critKnight = 1) { var knightdmg = random(20, 30) * weapon * 0 } else if (critKnight = 2) { var knightdmg = random(20, 30) * weapon * 0.5 } else if (critKnight = 3) { var knightdmg = random(20, 30) * weapon } else { var knightdmg = random(20, 30) * weapon * 1.5 }
//             break

//         case '3':
//             if (critKnight = 1) { var knightdmg = random(20, 30) * weapon * 0 } else if (critKnight = 2) { var knightdmg = random(20, 30) * weapon * 0.5 } else if (critKnight = 3) { var knightdmg = random(20, 30) * weapon } else { var knightdmg = random(20, 30) * weapon * 1.5 }
//             break
//     }
//     return knightdmg
// }