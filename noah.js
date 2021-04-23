let head = document.getElementById("head");
let main = document.getElementById("main");
let rocket = document.getElementById("rocket");
let ufo = document.getElementById("ufo");
let dagen = new Date(2021,5,18).getTime();
let woorddag = "";
let nu = new Date().getTime();
let verschil = dagen - nu;
let dag = Math.floor(verschil / (1000 *60*60*24));

if(dag < 0){
    dag = -1;
    clearInterval(countdown);
}
switch(dag){
    case -1:
        woorddag = `<h1>Je bent net jarig geweest</h1>`;
        break;
    case 0:
        woorddag = `<h1>Van harte gefeliciteerd NOAH!!!!</h1>`;
        break;
    case 1:
        woorddag = `<h1>Nog ${dag} nachtje slapen!</h1>`;
        break;
    default:
        woorddag = `<h1>Nog ${dag} nachtjes slapen!</h1>`;
        break;

};

head.innerHTML = woorddag;

let afstand = dag + 30;
rocket.style.top = `${afstand}%`;

setInterval(function(){
    let zijkant = -10;
    let timer = setInterval(function(){
        zijkant++;
        if(zijkant == 100){
            clearTimeout(timer);
            zijkant = 0-20;
        }
        ufo.style.left = `${zijkant}%`;
    }, 50);
    
}, 15000)