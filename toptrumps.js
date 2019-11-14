class Card {
    constructor(name, Devastation, Likelihood, NuisanceFactor, FinancialImpact, Defendability){
        this.name = name
        this.devastation = Devastation;
        this.likelihood = Likelihood;
        this.nuisancefactor = NuisanceFactor;
        this.financialimpact = FinancialImpact;
        this.defendability = Defendability;
    }
}

let spearPhishing = new Card("Spear Phishing", 76, 71, 89, 75, 60);
let weakConfiguration = new Card("Weak Configuration", 67, 70, 54, 55, 86);
let physicalAccess = new Card("physicalAccess", 80, 51, 71, 63, 87);
let socialMedia = new Card("socialMedia", 21, 50, 74, 11, 69);
let crosssiteScripting = new Card("Cross Site Scripting", 85, 71, 68, 89, 78);
let virus = new Card("Virus", 45, 85, 71, 52, 82);
let maliciousFileExecution = new Card("Malicious File Execution", 92, 81, 80, 91, 84);
let amateurHacker = new Card("Amateur Hacker", 54, 58, 81, 73, 79);
let injectionFlaw = new Card("Injection Flaw", 90, 71, 68, 89, 78);
let webBrowsing = new Card("Web Browsing", 88, 81, 86, 97, 75);
let vulnerabilityScanner = new Card("Vulnerability Scanner", 38, 89, 77, 75, 97);
let helpdeskSpoofing = new Card("Helpdesk Spoofing", 72, 60, 69, 61, 86);
let publicWifi = new Card("Public Wifi", 41, 57, 80, 35, 75);
let sessionHijacking = new Card("Session Hijacking", 76, 69, 68, 79, 84);
let botNet = new Card("Bot Net", 87, 24, 73, 96, 51);
let phishing = new Card("Phishing", 72, 98, 95, 67, 70);
let trojan = new Card("Trojan", 73, 49, 93, 65, 77); 
let rogueaccessPoint = new Card("Rogue Access Point", 41, 52, 56, 45, 48);
let geotagging = new Card("Geotagging", 27, 36, 89, 45, 99);
let unsecuredDatabases = new Card("Unsecured Databases", 91, 78, 86, 97, 82);
let denialofServive = new Card("Denial of Servive", 98, 43, 97, 98, 72);
let usb = new Card("Usb", 45, 89, 72, 36, 75);
let disgruntledEmployee = new Card("Disgruntled Employee", 75, 40, 61, 70, 71);
let patching = new Card("Patching", 94, 90, 92, 88, 99);
let blackhat = new Card("Black Hat", 91, 79, 70, 92, 80);
let ransomware = new Card("Ransom ware", 85, 92, 100, 92, 94);
let nationState = new Card("Nation State", 100, 5, 16, 80, 51);
let zeroDay = new Card("Zero Day", 99, 15, 20, 83, 64);
let domainAdmin = new Card("Domain Admin", 95, 35, 48, 87, 84);
let lostPhone = new Card("Lost Phone", 29, 64, 91, 20, 38);
let privilegeEscalation = new Card("Privilege Escalation", 87, 71, 59, 80, 85);
let whitehat = new Card("White Hat", 0, 0, 0, 0, 100);
let carelessEmployee = new Card("Careless Employee", 61, 86, 75, 70, 73);
let remoteAccess = new Card("Remote Access", 76, 58, 41, 42, 80);
let worm = new Card("Worm", 51, 58, 76, 54, 72);
let weakPassword = new Card("Weak Password", 86, 84, 97, 73, 22);


let playerOneDeck = [];
let playerTwoDeck = [];
let whosGo = null;

function pickCards(bigDeck, person1Deck, person2Deck){
    while (bigDeck.length>0){
        let tempIndex = 0;
        let heldNumber = 0;
        tempIndex = Math.floor((Math.random()*bigDeck.length));
        heldNumber = bigDeck[tempIndex];
        bigDeck.splice(tempIndex, 1);
        person1Deck.push(heldNumber);
        
        tempIndex = Math.floor((Math.random()*bigDeck.length));
        heldNumber = bigDeck[tempIndex];
        bigDeck.splice(tempIndex, 1);
        person2Deck.push(heldNumber);
    }
}

function gameIntro(){
    alert("Welcome to the cybersecurity Top Trumps!")
    player1name = prompt("Player 1, please enter name:");
    player2name = prompt("Player 2, please enter name:");
    alert(`Roll Dice to decide who goes first. ${player1name} will be even numbers and ${player2name} will be odd numbers.`);
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(`The dice rolled a ${randomNumber}!`);
    if (randomNumber%2 == 0){
        whosGo = true;
        alert(`${player1name} goes first!`);
        console.log(whosGo)
        return whosGo;
    } else {
        whosGo = false;
        alert(`${player2name} goes first!`);
        console.log(whosGo)
        return whosGo
    }
    // return whosGo;
    return player1name, player2name;
}

function shuffle(array){
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
}

let normalComparison = ["devastation", "likelihood", "nuisancefactor", "financialimpact", "defendability"]

var player1name = "";
var player2name = "";
let player1Deck = []
let player2Deck = []

let allCards = [spearPhishing, weakConfiguration, physicalAccess, socialMedia, crosssiteScripting, virus, maliciousFileExecution, amateurHacker, 
    injectionFlaw, webBrowsing, vulnerabilityScanner, helpdeskSpoofing, publicWifi, sessionHijacking, botNet, phishing, trojan, rogueaccessPoint, 
    geotagging, unsecuredDatabases, denialofServive, usb, disgruntledEmployee, patching, blackhat, ransomware, nationState, zeroDay, domainAdmin, 
    lostPhone, privilegeEscalation, whitehat, carelessEmployee, remoteAccess, worm, weakPassword];


shuffle(allCards);
pickCards(allCards, player1Deck, player2Deck);
console.log("=-=-=-=-==-=-=-=-=")
console.log("Player1 Deck:");
console.log("=-=-=-=-==-=-=-=-=")
console.log(player1Deck);
console.log("=-=-=-=-==-=-=-=-=")
console.log("Player2 Deck:");
console.log("=-=-=-=-==-=-=-=-=")
console.log(player2Deck);


function playerTurn(){
    if (whosGo) {
        let playerInput = prompt (`${player1name}, your card is: ${p1ActiveCard.name}
        Name: ${player1Deck[0].name}
        Devastation: ${player1Deck[0].devastation}
        Likelihood: ${player1Deck[0].likelihood}
        NuisanceFactor: ${player1Deck[0].nuisancefactor}
        FinancialImpact: ${player1Deck[0].financialimpact}
        Defendability: ${player1Deck[0].defendability}
        What category would you like to pick?`)
        let answer = playerInput.toLowerCase()
        statComparison(answer)
        
    } else {
        let playerInput = prompt(`${player2name}, your card is:  ${p2ActiveCard.name} 
        Name: ${player2Deck[0].name}
        Devastation: ${player2Deck[0].devastation}
        Likelihood: ${player2Deck[0].likelihood}
        NuisanceFactor: ${player2Deck[0].nuisancefactor}
        FinancialImpact: ${player2Deck[0].financialimpact}
        Defendability: ${player2Deck[0].defendability}
        What stat would you like to pick?`)
        var answer = playerInput.toLowerCase()
        statComparison(answer)
    }
}

function statComparison(answer)
{
    if (normalComparison.includes(answer))
    {
        console.log(p1ActiveCard)
        if (p1ActiveCard[answer] > p2ActiveCard[answer])
        {
            alert(`RESULT:
            ${p1ActiveCard.name}'s stat is: ${p1ActiveCard[answer]}
            ${p2ActiveCard.name}'s stat is: ${p2ActiveCard[answer]}
            ${player1name} Wins!`);
            victoryFn(player1Deck, player2Deck);
        }
        else if (p1ActiveCard[answer] < p2ActiveCard[answer])
        {
            alert(`RESULT:
            ${p1ActiveCard.name}'s stat is: ${p1ActiveCard[answer]}
            ${p2ActiveCard.name}'s stat is: ${p2ActiveCard[answer]}
            ${player2name} Wins!`);
            victoryFn(player2Deck, player1Deck);
    
        }
        else if (p1ActiveCard[answer] == p2ActiveCard[answer])
        {
            alert(`
            ${p1ActiveCard[name]}'s stat is: ${p1ActiveCard[answer]}
            ${p2ActiveCard[name]}'s stat is: ${p2ActiveCard[answer]}
            It's a draw!`);
            loser.push(loser[0]);
            victor.push(victor[0]);
            loser.shift();
            victor.shift();
        }
    }
}

function victoryFn(victor, loser)
{
    victor.push(loser[0]);
    victor.push(victor[0]);
    victor.shift();
    loser.shift();
}

function totalVictory()
{
    if (player2Deck.length == 0)
    {
        alert(`CONGRATULATIONS PLAYER 1!!!
        You have won the game!`)
    }
    else if (player1Deck.length == 0)
    {
        alert(`CONGRATULATIONS PLAYER 2!!!
        You have won the game!`)
    }
}

gameIntro()

while ((player1Deck.length>0) && (player2Deck.length>0))
{
    var p1ActiveCard = player1Deck[0]
    var p2ActiveCard = player2Deck[0]
    playerTurn()
    console.log(player1Deck);
    console.log(player2Deck);
}
totalVictory();
