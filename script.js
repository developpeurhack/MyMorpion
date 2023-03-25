

// les  doonées 

const player = document.querySelector(".info")
let commencer = true
let joueurEncours = "X"
let partieEnCours = ["", "", "", "", "", "", "", "", ""]

//  les conditions de victoire
const conditionsDeVictoire = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8], [0, 3, 6],
    [1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
]

// Messages 
const gagne = () => `Le joueur ${joueurEncours} a gagné`
const egalite = () => "Egalité"
const tourJoueur = () => ` tour du joueur ${joueurEncours}`

// On affiche quel joueur commence / statut : h2
player.innerHTML = tourJoueur()

// On met en place les écouteurs d'évènements
document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click", ClickCase))
document.querySelector("#btn").addEventListener("click", restart)

 // fonction gère le clic sur les cases du jeu
function ClickCase(event) {
    const caseCliqué = event.target;
    const caseIndex = caseCliqué.getAttribute("data-index"); // la valeur de chaque cellule
            // const caseIndex = parseInt(caseCliqué.dataset.index)
             //console.log(caseIndex)
            // on verifie si le jeu terminé ou la case est vide
        if (partieEnCours[caseIndex] !== "" || !commencer) {
            return;
        }
    partieEnCours[caseIndex] = joueurEncours;
    caseCliqué.innerHTML = joueurEncours; // on affiche le joueur    
    verification()
}

/*
methode 2 : 

function ClickCase(event){
    // On récupère l'index de la case cliquée
    const indexCase = parseInt(this.dataset.index)
    //console.log(indexCase)
    // On vérifie si la case est déjà remplie ou le jeu terminé 
    if(partieEnCours[IndexCase] !== "" || !commencer){
        return
    }
    // On écrit le symbole du joueur dans le tableau etatJeu et la case
    partieEnCours[IndexCase] = joueurEncours
    this.innerHTML = joueurEncours
    // On vérifie si le joueur a gagné
    verification()
}
*/
 // Cette fonction vérifie si le joueur a gagné   
function verification(){
    let tourGagnant = false

    // On parcourt toutes les conditions de victoire
    for(let conditionVictoire of conditionsDeVictoire){
        // On récupère les 3 cases de la condition de victoire
        let a = partieEnCours[conditionVictoire[0]]
        let b = partieEnCours[conditionVictoire[1]]
        let c = partieEnCours[conditionVictoire[2]]

        // Si l'une des cases est vide
        if(a === "" || b === "" || c === ""){
            continue
        }

        // Si les 3 cases sont identiques
        if(a  === b && b === c){
            // On gagne
            tourGagnant = true
            break
        }
    }

    // Si on a gagné
    if(tourGagnant){
        player.innerHTML = gagne()
        commencer = false
        return
    }

    // Si toutes les cases sont remplies
    if(!partieEnCours.includes("")){
        player.innerHTML = egalite()
        commencer = false
        return
    }
    // On change de joueur
    joueurEncours = joueurEncours === "X" ? "O" : "X"
    player.innerHTML = tourJoueur()
}

 // fonction réinitialise le jeu

function restart(){
    joueurEncours = "X"
    commencer = true
    partieEnCours = ["", "", "", "", "", "", "", "", ""]
    player.innerHTML = tourJoueur()
    document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = "");

}

/////////////////////////////////////
const quotes = ["A vraincre sans péril, on triomphe sans gloire",
    "Create your own opportunities",
    "Just because my  path is different does not mean I am lost",
    "Notre propre défaite, conditionne la victoire de l'adversité",
    "On apprend peu par la victoire, mais beaucoup par la défaite"
];

let citation = document.getElementById("citation");
//console.log(citation);
let button = document.getElementById("btn");

button.addEventListener("click", randomQuotes)

function randomQuotes() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
    //console.log(random, "random");
    citation.innerHTML = random;
    citation.setAttribute("style", "color:green ;background-color:yellow; font-Size:2rem ; margin :15px");

}
randomQuotes();














